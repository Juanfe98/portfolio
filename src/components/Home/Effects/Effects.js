import React from "react";
import "./effects.css";

export function Effects() {
  const effectQuantity = (quantity) => {
    let divs = [];
    for (let i = 1; i <= quantity; i++) {
      divs = [...divs, <div key={i}></div>];
    }
    return divs;
  };
  return (
    <div className="effect-wrap">
      <div className="effect effect-1"></div>
      <div className="effect effect-2">{effectQuantity(28)}</div>
      <div className="effect effect-3"></div>
      <div className="effect effect-4"></div>
      <div className="effect effect-5">{effectQuantity(10)}</div>
    </div>
  );
}
