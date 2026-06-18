param(
  [string]$Remote = "origin",
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$logDir = Join-Path $repoRoot "logs"
$logFile = Join-Path $logDir "github-sync.log"

if (-not (Test-Path -LiteralPath $logDir)) {
  New-Item -ItemType Directory -Path $logDir | Out-Null
}

function Write-SyncLog {
  param([string]$Message)
  $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
  Add-Content -LiteralPath $logFile -Value "[$timestamp] $Message"
}

function Invoke-Git {
  param([string[]]$Arguments)
  $output = & git @Arguments 2>&1
  $exitCode = $LASTEXITCODE
  if ($output) {
    foreach ($line in $output) {
      Write-SyncLog "git $($Arguments -join ' '): $line"
    }
  }
  if ($exitCode -ne 0) {
    throw "git $($Arguments -join ' ') failed with exit code $exitCode"
  }
  return $output
}

try {
  Set-Location -LiteralPath $repoRoot
  Write-SyncLog "Starting sync for $repoRoot"

  Invoke-Git @("rev-parse", "--is-inside-work-tree") | Out-Null
  Invoke-Git @("fetch", "--prune", $Remote) | Out-Null

  $currentBranch = (& git branch --show-current).Trim()
  if ($currentBranch -ne $Branch) {
    Write-SyncLog "Skipped: current branch is '$currentBranch', expected '$Branch'."
    exit 0
  }

  $dirty = (& git status --porcelain)
  if ($dirty) {
    Write-SyncLog "Skipped: working tree has uncommitted changes."
    exit 0
  }

  $local = (& git rev-parse $Branch).Trim()
  $upstreamRef = "$Remote/$Branch"
  $upstream = (& git rev-parse $upstreamRef).Trim()
  $base = (& git merge-base $Branch $upstreamRef).Trim()

  if ($local -eq $upstream) {
    Write-SyncLog "Already synchronized."
  } elseif ($local -eq $base) {
    Write-SyncLog "Remote is ahead. Pulling with fast-forward only."
    Invoke-Git @("pull", "--ff-only", $Remote, $Branch) | Out-Null
  } elseif ($upstream -eq $base) {
    Write-SyncLog "Local branch is ahead. Pushing committed changes."
    Invoke-Git @("push", $Remote, $Branch) | Out-Null
  } else {
    Write-SyncLog "Skipped: local and remote branches have diverged."
  }

  Write-SyncLog "Finished sync."
} catch {
  Write-SyncLog "Error: $($_.Exception.Message)"
  exit 1
}
