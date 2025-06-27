import { createContext, useContext, useEffect, useRef, useState } from "react";
import SuccessToast from "../components/Toast/SuccessToast";
import DangerToast from "../components/Toast/DangerToast";
import useGetGenres from "../hooks/useGetGenres";
import WarningModal from "../components/WarningModal/WarningModal";
import { AnimatePresence, motion } from "framer-motion";

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
    clearItemToDelete();
    return;
  };
  const clearItemToDelete = () => {
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
      <div className="fixed flex flex-col gap-2 justify-end items-end  z-9 bottom-12 md:bottom-15 right-5">
        <AnimatePresence initial={false}>
          {itemFav && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -20 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <SuccessToast itemFav={itemFav}>
                {itemFav} Added to favorites.
              </SuccessToast>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {errorItem && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -20 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <DangerToast errorItem={errorItem}>
                {errorItem} Removed from favorites.
              </DangerToast>
            </motion.div>
          )}
        </AnimatePresence>
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
