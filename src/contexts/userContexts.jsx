import { createContext } from "react";
import { useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext({});
const Provider = ({ children }) => {
  const [words, setWords] = useState([]);
  
 
  async function loadWords(word) {
    try {
      const { data } = await api.get(`${word}`);
      setWords(data);
    } catch (error) {}
  }
  return (
    <AuthContext.Provider
      value={{
        loadWords,
        words,
    
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default Provider;
