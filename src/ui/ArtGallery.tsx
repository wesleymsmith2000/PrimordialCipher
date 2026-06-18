import type { PrimordialArtAsset } from "../skins/primordialArt";

interface ArtGalleryProps {
  assets: PrimordialArtAsset[];
}

export function ArtGallery({ assets }: ArtGalleryProps) {
  return (
    <section className="art-gallery" aria-label="Primordial Cipher concept art">
      <div className="panel-heading">
        <h2>Concept Art</h2>
        <span>{assets.length} assets</span>
      </div>
      <div className="art-grid">
        {assets.map((asset) => (
          <figure className={`art-card ${asset.aspect}`} key={asset.id}>
            <img src={asset.src} alt={asset.title} />
            <figcaption>
              <strong>{asset.title}</strong>
              <span>{asset.kind}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
