import { useEffect, useState } from "react";

export default function Mood() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className=" hover:cursor-pointer md:flex hidden"
    >
      <img
        src={isDark ? "/assets/icons/sun.png" : "/assets/icons/moon.png"}
        alt="Toggle Theme"
        className="w-5 h-5"
      />
    </button>
  );
}