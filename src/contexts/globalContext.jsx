import { createContext, useContext, useEffect, useRef, useState } from "react";
import SuccessToast from "../components/Toast/SuccessToast";
import DangerToast from "../components/Toast/DangerToast";
import useGetGenres from "../hooks/useGetGenres";
import WarningModal from "../components/WarningModal/WarningModal";

const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const localFavorite = localStorage.getItem("favorite");
  const [itemFav, setItemFav] = useState("");
  const [errorItem, setErrorItem] = useState("");
  const [favToRemove, setFavToRemove] = useState({});
  const [favorite, setFavorite] = useState(
    localFavorite ? JSON.parse(localFavorite) : []
  );

  const modalRef = useRef(null);
  const hanldeDeleteFavorite = () => {
    setFavorite((prev) => prev.filter((item) => item.id !== favToRemove.id));
    setErrorItem(favToRemove.title);
    console.log("success delete item");
    clearItemToDelete();
    return;
  };
  const clearItemToDelete = () => {
    console.log("clear item to delete");
    setTimeout(() => {
      return setFavToRemove({});
    }, 200);
  };

  const toggleFavorite = (obj) => {
    if (favorite.find((fav) => fav.id === obj.id)) {
      setFavToRemove(obj);
      modalRef.current?.showModal();
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

  const { genres, loadingGenres } = useGetGenres();
  return (
    <globalContext.Provider
      value={{ favorite, toggleFavorite, genres, loadingGenres }}
    >
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
      <WarningModal
        ref={modalRef}
        action={hanldeDeleteFavorite}
        cancel={clearItemToDelete}
        item={favToRemove}
      />
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(globalContext);
