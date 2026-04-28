import { useEffect, useState } from "react";

export default function Mood({darkLight , className}) {

  return (
      <img
        src={darkLight ? "/assets/icons/sun.png" : "/assets/icons/moon.png"}
        alt="Toggle Theme"
        className={`w-5 h-5 ${className}`}
      />
  );
}