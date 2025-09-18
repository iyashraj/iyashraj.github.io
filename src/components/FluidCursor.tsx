"use client";
import { useEffect } from "react";
import useFluidCursor from "@/hooks/useFluidCursor";

const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <canvas
      id="fluid"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default FluidCursor;
