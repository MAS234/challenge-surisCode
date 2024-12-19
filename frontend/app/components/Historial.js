"use client";

import React, { useEffect, useState } from "react";
import getPalindromes from "../service/historialPalidromes";

function Historial({ newWord }) {
  const [palindromes, setPalindromes] = useState([]);

  console.log(newWord);
  console.log("estos son los que hay", palindromes);

  useEffect(() => {
    const fetchPalindromes = async () => {
      try {
        const data = await getPalindromes();
        setPalindromes(data.history);
      } catch (error) {
        console.error("Error al obtener palíndromos:", error);
      }
    };

    fetchPalindromes();
  }, [newWord]);

  return (
    <div className="w-full max-w-md md:w-96 h-auto max-h-[24rem] border m-auto border-white rounded-xl overflow-auto p-4">
      <h1 className="text-white text-center text-xl font-semibold mb-4">
        Historial
      </h1>

      {Array.isArray(palindromes) && palindromes.length > 0 ? (
        <div className="flex flex-wrap gap-3 justify-start">
          {palindromes.map((item, index) => (
            <div
              key={index}
              className={`flex-1 min-w-[120px] max-w-[150px] p-3 rounded-md text-center ${
                item.palindrome === 1 ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <p className="text-white font-semibold">{item.message}</p>
              <p className="text-white font-light">{item.word}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-white flex justify-center items-center h-full">
          <p>No hay palíndromos en el historial.</p>
        </div>
      )}
    </div>
  );
}

export default Historial;
