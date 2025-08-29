import React from "react";
const ShimmerUI = () => {
  const shimmercards = Array(10).fill(0);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {shimmercards.map((_, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            height: "300px",
            margin: "10px",
            borderRadius: "8px",
            background: "linear-gradient(90deg, #ececec 25%, #f5f5f5 50%, #ececec 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShimmerUI;
