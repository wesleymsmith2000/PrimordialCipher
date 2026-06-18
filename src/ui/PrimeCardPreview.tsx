import { primeCardArtList } from "../skins/primordialArt";

export function PrimeCardPreview() {
  return (
    <section className="prime-card-preview" aria-label="Prime draw card art">
      <div className="panel-heading">
        <h2>Prime Cards</h2>
        <span>{primeCardArtList.length} cards</span>
      </div>
      <div className="prime-card-grid">
        {primeCardArtList.map((card) => (
          <figure className="prime-card" key={card.prime}>
            <img src={card.src} alt={`${card.title}, prime ${card.prime}`} />
            <figcaption>
              <strong>{card.prime}</strong>
              <span>{card.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
