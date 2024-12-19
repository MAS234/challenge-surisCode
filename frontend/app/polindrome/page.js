'use client'

import React from "react";
import VerificationPalidrome from "../components/VerificationPalidrome";
import Historial from "../components/Historial";
import postPalindrome from "../service/verification";
import { useState } from "react";

export default function page() {

    const [newWord, setNewWord] = useState("");
    
  return (
    <div className="bg-[#001226] w-full h-screen flex items-center justify-center">
      <div className="flex justify-bwetween items-center w-full h-full">

         {/* Componentes */}
        <VerificationPalidrome setNewWord={setNewWord}/>

        <Historial newWord={newWord}/>
      </div>
    </div>
  );
}
