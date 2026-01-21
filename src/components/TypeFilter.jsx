const TypeFilter = ({ types, selectedType, onSelect }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => onSelect(null)}
        style={selectedType === null ? styles.active : styles.button}
      >
        All
      </button>

      {types.map((type) => (
        <button
          key={type}
          onClick={() => onSelect(type)}
          style={selectedType === type ? styles.active : styles.button}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

const styles = {
  button: {
    marginRight: "8px",
    marginBottom: "8px",
    padding: "6px 12px"
  },
  active: {
    marginRight: "8px",
    marginBottom: "8px",
    padding: "6px 12px",
    backgroundColor: "#333",
    color: "#fff"
  }
};

export default TypeFilter;
