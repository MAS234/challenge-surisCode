import axios from "axios";

const postPalindrome = async (word, setMessage, setError,setWord) => {
  try {

    const response = await axios.post("http://localhost:3001/palindrome", {
      word: word,
    });

    setMessage(response.data.message);
    setError(""); 
    setWord("")
  } catch (error) {
    console.error("Error al verificar el palíndromo:", error); 
    setError("Hubo un error al verificar el palíndromo.");
    setMessage(""); 
  }
};

export default postPalindrome;
