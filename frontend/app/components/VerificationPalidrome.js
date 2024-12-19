'use client'

import React, { useState } from "react";
import postPolindrome from "../service/verification";

function VerificationPalidrome() {
  // Estados
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Función para manejar el cambio en el campo de entrada
  const handleChange = (event) => {
    setWord(event.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postPolindrome(word, setMessage, setError); 
    } catch (error) {
      console.error(error);
      setError("Hubo un error al verificar el palíndromo fdsfdsd.");
    }
  };

  return (
    <div className="w-96 h-96 border m-auto flex flex-col justify-center items-center border-white rounded-3xl">
      <h1 className="text-center text-white text-2xl font-semibold mt-10">
        Verificador
      </h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          className="text-center m-auto text-gray text-sm rounded-xl p-2 font-light mt-10 w-64"
          value={word}
          onChange={handleChange}
          placeholder="Escriba una palabra o frase"
        />
        <button
          className="bg-[#f29f2c] rounded-lg w-28 h-10 hover:bg-[#f2a02c97] duration-300 cursor-pointer text-white mt-4"
          type="submit"
        >
          Verificar
        </button>
      </form>

      {/* Mostrar mensajes de éxito o error */}
      {message && <p className="mt-4 text-green-500">{message}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}

export default VerificationPalidrome;
