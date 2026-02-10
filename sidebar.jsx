import React from "react";

function Sidebar() {
  return (
    <div style={{ width: "220px", backgroundColor: "#D2691E", color: "white", padding: "20px" }}>
      <h1 style={{ color: "#FFA500" }}>LitWorld</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "15px 0", cursor: "pointer" }}>Home</li>
        <li style={{ margin: "15px 0", cursor: "pointer" }}>Chats</li>
        <li style={{ margin: "15px 0", cursor: "pointer" }}>Friends</li>
        <li style={{ margin: "15px 0", cursor: "pointer" }}>Create Book</li>
        <li style={{ margin: "15px 0", cursor: "pointer" }}>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;