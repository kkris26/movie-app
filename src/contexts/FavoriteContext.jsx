import { createContext, useContext, useEffect, useState } from "react";
import SuccessToast from "../components/Toast/SuccessToast";
import DangerToast from "../components/Toast/DangerToast";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const localFavorite = localStorage.getItem("favorite");
  const [itemFav, setItemFav] = useState("");
  const [errorItem, setErrorItem] = useState("");
  const [favorite, setFavorite] = useState(
    localFavorite ? JSON.parse(localFavorite) : []
  );
  const toggleFavorite = (obj) => {
    if (favorite.find((fav) => fav.id === obj.id)) {
      setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      setErrorItem(obj.title);
      return;
    }
    setFavorite((prev) => [...prev, obj]);
    setItemFav(obj.title);
  };
  useEffect(() => {
    const setItemTO = setTimeout(() => {
      setItemFav("");
    }, 4000);

    return () => {
      clearTimeout(setItemTO);
    };
  }, [itemFav]);

  useEffect(() => {
    const errorItemTO = setTimeout(() => {
      setErrorItem("");
    }, 4000);

    return () => {
      clearTimeout(errorItemTO);
    };
  }, [errorItem]);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <FavoriteContext.Provider value={{ favorite, toggleFavorite }}>
      <div className="fixed flex flex-col gap-2 justify-end items-end  z-9 bottom-20 right-5">
        {itemFav && (
          <SuccessToast itemFav={itemFav}>
            {itemFav} Added to favorites.
          </SuccessToast>
        )}
        {errorItem && (
          <DangerToast errorItem={errorItem}>
            {errorItem} Removed from favorites.
          </DangerToast>
        )}
      </div>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
