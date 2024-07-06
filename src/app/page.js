"use client"
import Image from "next/image";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-tailwind/react";
export default function Main() {
  return (
    <main className="">
      <ThemeProvider>
    <Home />
    </ThemeProvider>
    </main>
  );
}
