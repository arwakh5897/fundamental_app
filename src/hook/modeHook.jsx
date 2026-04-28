import { useEffect, useState } from "react";
import Mood from "../components/mood/mood";
import Cart from "../components/header/cart";
import SignIn from "../components/header/profile";
import SearchBar from "../components/search/search_bar";
import SearchIcon from "../components/search/searchComponents/search_icon";

export default function useModeHook() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return {isDark , setIsDark};
}