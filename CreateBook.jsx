import React from "react";

function CreateBook() {
  return (
    <div>
      <h3>Create a Book</h3>
      <p>Design your book, add text, artwork, or cover design.</p>
      <textarea
        placeholder="Start writing your novel here..."
        style={{ width: "100%", height: "200px", padding: "10px", fontSize: "16px", marginTop: "10px" }}
      ></textarea>
    </div>
  );
}

export default CreateBook;