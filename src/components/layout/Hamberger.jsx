import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { y: "-100%" },
    open: { y: "0%" },
  };

  return (
    <>
      <button
        className="w-10 h-10 flex items-center justify-center"
        onClick={toggleMenu}
      >
        <div className="w-10 h-9 relative">
          <motion.span
            className="absolute bg-white"
            style={{
              width: "40px",
              height: "4px",
              top: "0px",
              left: "0px",
            }}
            animate={isOpen ? { rotate: 45, y: 16 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute bg-white"
            style={{
              width: "40px",
              height: "4px",
              top: "16px",
              left: "0px",
            }}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute bg-white"
            style={{
              width: "40px",
              height: "4px",
              top: "32px",
              left: "0px",
            }}
            animate={isOpen ? { rotate: -45, y: -16 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="text-white text-2xl flex flex-col items-center space-y-8">
              <a href="#" className="hover:text-blue-400">
                마음을 보는 마음
              </a>
              <a href="#" className="hover:text-blue-400">
                ABOUT
              </a>
              <a href="#" className="hover:text-blue-400">
                WE WORK
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburger;
