import { useEffect, useState } from "react";
import { fetchPokemons } from "../services/api";
import PokemonCard from "../components/PokemonCard";
import TypeFilter from "../components/TypeFilter";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons();
        setPokemons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, []);

  // Extract unique types
  const allTypes = [
    ...new Set(
      pokemons.flatMap((p) => p.types.map((t) => t.type.name))
    )
  ];

  // Filter logic
  const filteredPokemons = selectedType
    ? pokemons.filter((p) =>
        p.types.some((t) => t.type.name === selectedType)
      )
    : pokemons;

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ maxWidth: "900px", margin: "auto" }}>
      <h1>Pokémon Tag Explorer</h1>

      <TypeFilter
        types={allTypes}
        selectedType={selectedType}
        onSelect={setSelectedType}
      />

      <div style={styles.grid}>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "16px"
  }
};

export default Home;
