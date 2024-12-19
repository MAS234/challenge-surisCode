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
    <div className="w-96 h-96 border m-auto border-white rounded-xl overflow-auto">
      {Array.isArray(palindromes) && palindromes.length > 0 ? (
        <>
          {palindromes.map((item, index) => (
            <div
              key={index}
              className="bg-[#f29f2c] m-3 w-auto text-center flex flex-wrap justify-start rounded-md p-2"
            >
              <p className="text-white m-auto font-light">{item.word}</p>
            </div>
          ))}
        </>
      ) : (
        <div className="text-white flex justify-center items-center m-auto h-full"><p>No hay palíndromos en el historial.</p></div>
      )}
    </div>
  );
}

export default Historial;
