'use client';

import React, { useState } from "react";
import postPolindrome from "../service/verification";

function VerificationPalidrome({ setNewWord }) {
  // Estados
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState("");

  // Función para manejar el cambio en el campo de entrada
  const handleChange = (event) => {
    setWord(event.target.value);
    setInputError("");
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!word.trim()) {
      setInputError("Por favor, complete el campo.");
      return;
    }
    try {
      await postPolindrome(word, setMessage, setError, setWord);
      setNewWord(word);
    } catch (error) {
      console.error(error);
      setError("Hubo un error al verificar el palíndromo.");
    }
  };

  return (
    <div className="w-full max-w-md md:w-96 h-auto p-6 md:h-96 border-2 m-auto flex flex-col justify-center items-center border-white rounded-3xl hover:bg-[#f29f2c] duration-300">
      <h1 className="text-center text-white text-2xl font-semibold mb-6">
        Verificador
      </h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full mt-10">
        <input
          type="text"
          className="text-center text-gray-800 text-sm rounded-xl p-2 font-light mb-4 w-full"
          value={word}
          onChange={handleChange}
          placeholder="Escriba una palabra o frase"
        />
        <button
          className="bg-[#f29f2c] hover:bg-green-500 rounded-2xl w-full md:w-28 h-10 border-2 duration-300 cursor-pointer text-white mt-10"
          type="submit"
        >
          Verificar
        </button>
      </form>

      {/* Mensaje de error si el campo está vacío */}
      {inputError && <p className="mt-4 text-red-500">{inputError}</p>}

      {/* Mostrar mensajes de éxito o error */}
      {message && <p className="mt-4 text-white">{message}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}

export default VerificationPalidrome;
