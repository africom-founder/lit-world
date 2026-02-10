import React from "react";

function Home() {
  return (
    <div style={{ flex: 1, padding: "20px", backgroundColor: "#FFF5E1" }}>
      <h2>Welcome to LitWorld!</h2>
      <p>Search for African and international novels, poems, plays, and more.</p>
      <input
        type="text"
        placeholder="Search books, authors..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginTop: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />
    </div>
  );
}

export default Home;