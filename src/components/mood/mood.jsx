import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Mood({darkLight , className}) {

  return (
    darkLight ? <Sun size={18} className={className}/> : <Moon size={18} className={className}/>
  );
}