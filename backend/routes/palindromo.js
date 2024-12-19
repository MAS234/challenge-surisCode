import { Router } from "express";
import isPalindrome from "../service/verification.js";

const palindrome = Router();

const history = [];

// POST ENDPOINT
palindrome.post("/palindrome", async (req, res) => {
  try {
    const { word } = req.body;

    // Validar que la palabra exista
    if (!word || typeof word !== "string") {
      return res.status(400).json({
        success: false,
        message: "Se requiere una palabra o frase válida en el campo 'word'.",
      });
    }

    // Verificar si la palabra o frase es un palíndromo
    const palindrome = isPalindrome(word);

    if(palindrome){
    // Guardar en el historial
    history.push({ word, palindrome });
    }
 
    res.status(200).json({
        success: true,
        message: palindrome ? "La palabra o frase es un palíndromo." : "La palabra o frase no es un palíndromo.",
      });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Ocurrio un error con el palindromo" });
  }
});



export default palindrome;
