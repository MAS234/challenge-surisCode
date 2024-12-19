import React from "react";
import VerificationPalidrome from "../components/VerificationPalidrome";
import Historial from "../components/Historial";
import postPalindrome from "../service/verification";

export default function page() {

  return (
    <div className="bg-[#001226] w-full h-screen flex items-center justify-center">
      <div className="flex justify-bwetween items-center w-full h-full">

         {/* Componentes */}
        <VerificationPalidrome />

        <Historial />
      </div>
    </div>
  );
}
