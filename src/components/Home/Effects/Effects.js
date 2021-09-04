import React from "react";
import "./effects.css";

export function Effects() {
  const effect2Quantity = (quantity) => {
    let divs = [];
    for (let i = 1; i <= quantity; i++) {
      divs = [...divs, <div key={i}></div>];
    }
    return divs;
  };
  return (
    <div className="effect-wrap">
      <div className="effect effect-1"></div>
      <div className="effect effect-2">{effect2Quantity(28)}</div>
      <div className="effect effect-3"></div>
    </div>
  );
}
