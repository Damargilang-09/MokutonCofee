import { useState, useEffect } from "react";

export default function useHandleScrol(){
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80); // angka 80 sesuaikan tinggi header kamu
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return{
    isScrolled
  }
}