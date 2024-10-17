import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navList } from "../../data/reponse";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isMenuOpenState } from "../../data/state";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuVariants = {
    closed: { y: "-100%" },
    open: { y: "0%" },
  };

  return (
    <>
      <button
        className="w-10 h-10 flex items-center justify-center z-20"
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
            animate={isMenuOpen ? { rotate: 45, y: 16 } : { rotate: 0, y: 0 }}
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
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
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
            animate={isMenuOpen ? { rotate: -45, y: -16 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-10 flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="text-white text-2xl flex flex-col items-center space-y-8">
              {navList.map((nav) => (
                <Link
                  key={nav.id}
                  to={nav.path}
                  className="hover:text-future-blue-400"
                >
                  {nav.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburger;
