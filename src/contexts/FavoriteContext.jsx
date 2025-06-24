import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const localFavorite = localStorage.getItem("favorite");
  const [favorite, setFavorite] = useState(
    localFavorite ? JSON.parse(localFavorite) : []
  );
  const toggleFavorite = (obj) => {
    if (favorite.find((fav) => fav.id === obj.id)) {
      setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      return console.log("fav sudah ada");
    }
    setFavorite((prev) => [...prev, obj]);
  };
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <FavoriteContext.Provider value={{ favorite, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
