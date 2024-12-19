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

    if (palindrome) {
      history.push({ word, palindrome: 1, message:"Es un palindromo" });
    } else {
      history.push({ word, palindrome: 0, message:"No es un palindromo" });
    }
    
 
    console.log("SE registro con exito")
    return res.status(200).json({
        success: true,
        message: palindrome ? "La palabra o frase es un palíndromo." : "La palabra o frase no es un palíndromo.",
      });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, error: "Ocurrio un error con el palindromo" });
     
  }
});

// GET ENDPOINT
palindrome.get("/history", async (req, res) => {

  try{
    return res.status(200).json({ history });
  } catch{
      console.error("Error:", error);
      return res.status(500).json({ success: false, error: "Ocurrio un error en el historial" });
  }

})


export default palindrome;
