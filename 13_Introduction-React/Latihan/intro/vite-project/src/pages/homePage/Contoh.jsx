import React, { useState } from "react";

const Contoh = () => {
  const [overlay, setOverlay] = useState(false);

  const onCardClick = () => {
    setOverlay(!overlay);
  };

  return (
    <>
      {/* Satu Card */}
      <div
        onClick={onCardClick}
        style={{
          backgroundColor: overlay ? "red" : "#333333",
          backgroundImage: "url",
        }}
        className=""
      >
        <div>{overlay ? "text overlay" : "text normal"}</div>
      </div>
    </>
  );
};

export default Contoh;
