'use client';

import React, { useState } from "react";
import VerificationPalidrome from "../components/VerificationPalidrome";
import Historial from "../components/Historial";

export default function Page() {
  const [newWord, setNewWord] = useState("");

  return (
    <div className="bg-[#001226] w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl h-auto md:h-full gap-6">
        {/* Componentes */}
        <VerificationPalidrome setNewWord={setNewWord} className="w-full md:w-1/2" />
        <Historial newWord={newWord} className="w-full md:w-1/2" />
      </div>
    </div>
  );
}
