import { useEffect, useState } from "react";
import Mood from "../components/mood/mood";
import Cart from "../components/header/cart";
import SignIn from "../components/header/profile";
import SearchBar from "../components/search/search_bar";
export default function ModeHook() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
  <div className="order-3 flex gap-4">
    <button
      onClick={() => setIsDark(!isDark)}
      className=" hover:cursor-pointer md:flex hidden"
    >
            <Mood darkLight={isDark}/>          
    </button>
            <SearchBar darkLight={isDark}/>
            <SignIn darkLight={isDark}/>
            <Cart darkLight={isDark}/>
    </div>
  );
}