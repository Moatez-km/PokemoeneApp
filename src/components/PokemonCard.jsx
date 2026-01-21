const PokemonCard = ({ pokemon }) => {
  return (
    <div style={styles.card}>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <h3>{pokemon.name}</h3>

      <div>
        {pokemon.types.map((t) => (
          <span key={t.type.name} style={styles.tag}>
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "8px",
    textAlign: "center"
  },
  tag: {
    display: "inline-block",
    margin: "4px",
    padding: "4px 8px",
    background: "#eee",
    borderRadius: "4px",
    fontSize: "12px"
  }
};

export default PokemonCard;
