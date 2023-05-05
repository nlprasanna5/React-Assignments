import React, { useState } from "react";
import "./PixelToRem.css";

function Pixel() {
  const [pixels, setPixels] = useState("");
  const [rems, setRems] = useState("");

  const handlePixelsChange = (event) => {
    const pxValue = parseInt(event.target.value);
    const remValue = pxValue / 16;
    setPixels(event.target.value);
    setRems(remValue.toFixed(2));
  };

  const handleRemsChange = (event) => {
    const remValue = parseFloat(event.target.value);
    const pxValue = remValue * 16;
    setRems(event.target.value);
    setPixels(pxValue.toFixed(2));
  };

  return (
    <>
    <h2>Pixel To Rem and Rem To Pixel Conversion</h2>
    <div className="container">
        
      <label>
        Pixels:
        <input type="number" value={pixels} onChange={handlePixelsChange} />
      </label>
      <br />
      <label>
        Rems:
        <input type="number" value={rems} onChange={handleRemsChange} />
      </label>
    </div>
    </>
  );
}

export default Pixel;
