import { motion } from "framer-motion";

const PageTransitions = ({ children }) => {
  return (
    <>
      <motion.div
        className="fixed flex items-center justify-center top-0 left-0 w-full h-full bg-base-200 origin-top z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: "circInOut" }}
      ></motion.div>
      <div className="">{children}</div>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-base-200 origin-bottom z-50"
        exit={{ scaleY: 1 }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: "circInOut" }}
      />
    </>
  );
};

export default PageTransitions;
