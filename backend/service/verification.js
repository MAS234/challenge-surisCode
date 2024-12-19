// Función para verificar si una palabra o frase es un palíndromo
const isPalindrome = (text) => {
    const sanitized = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, ""); 
  return sanitized === sanitized.split("").reverse().join("");
};

export default isPalindrome;