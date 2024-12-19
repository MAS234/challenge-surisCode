'use client'

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
    setInputError(""); // Resetear error de campo cuando el usuario empieza a escribir
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!word.trim()) {
      setInputError("Por favor, complete el campo.");
      return; // No enviar la solicitud si el campo está vacío
    }

    try {
      await postPolindrome(word, setMessage, setError);
      setNewWord(word);
    } catch (error) {
      console.error(error);
      setError("Hubo un error al verificar el palíndromo.");
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

      {/* Mensaje de error si el campo está vacío */}
      {inputError && <p className="mt-4 text-red-500">{inputError}</p>}

      {/* Mostrar mensajes de éxito o error */}
      {message && <p className="mt-4 text-white">{message}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}

export default VerificationPalidrome;
