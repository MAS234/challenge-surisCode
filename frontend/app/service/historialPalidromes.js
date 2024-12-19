import axios from "axios";

const getPalindromes = async () => {
  try {

    const response = await axios.get("http://localhost:3001/history");
    return response.data; 

  } catch (error) {
    console.error("Error al obtener los palíndromos:", error);
    return [];
  }
};

export default getPalindromes;
