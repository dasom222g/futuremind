import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navList } from "../../data/response";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isMenuOpenState } from "../../data/state";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);

  // 현재 열려 있는 메뉴의 Id배열
  const [openMenuIdList, setOpenMenuIdList] = useState([]);

  const accordionVariants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  const handleToggleHambergerMenu = () => setIsMenuOpen((prev) => !prev);

  const handleToggleSubMenu = (selectedId) => {
    const isAlreadyOpen = openMenuIdList.includes(selectedId);
    setOpenMenuIdList((prev) =>
      isAlreadyOpen
        ? prev.filter((openedMenuId) => openedMenuId !== selectedId)
        : [...prev, selectedId]
    );
  };

  const menuVariants = {
    open: { y: "0%" },
    closed: { y: "-100%" },
  };

  const rotateVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <>
      <button
        className="w-10 h-10 flex items-center justify-center z-20"
        onClick={handleToggleHambergerMenu}
      >
        <div className="w-9 h-9 relative">
          <motion.span
            className="absolute bg-white w-full"
            style={{
              height: "4px",
              top: "0px",
              left: "0px",
            }}
            animate={isMenuOpen ? { rotate: 45, y: 16 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute bg-white w-full"
            style={{
              height: "4px",
              top: "16px",
              left: "0px",
            }}
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute bg-white w-full"
            style={{
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
            className="fixed inset-0 bg-future-gray-700 z-10 flex items-start py-28 lg:py-36 overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex w-full gap-8 lg:gap-16">
              {/* 로고 */}
              <h2 className="max-w-7.1p">
                <img
                  src="/images/logo-menu-white.png"
                  alt="로고 이미지"
                  className="block w-full"
                />
              </h2>
              {/* 로고 */}
              <nav className="text-white text-2xl menu-interval pt-4 lg:pt-16">
                {navList.map((nav, index) => (
                  <div key={`nav-${nav.id}`}>
                    {/* START: 대메뉴 */}
                    <button
                      className="flex items-center text-left font-semibold text-2xl lg:text-4xl gap-4 lg:gap-7"
                      onClick={() => handleToggleSubMenu(nav.id)}
                    >
                      {nav.title}
                      {/* 아이콘 */}
                      <motion.span
                        animate={
                          openMenuIdList.includes(nav.id) ? "open" : "closed"
                        }
                        variants={rotateVariants}
                        transition={{ duration: 0.5 }}
                        className="inline-block w-4 h-4 lg:w-7.5 lg:h-7.5 relative"
                      >
                        <motion.span
                          animate={
                            openMenuIdList.includes(nav.id)
                              ? { opacity: 0 }
                              : { opacity: 1 }
                          }
                          transition={{ duration: 0.5 }}
                          className="block bg-white absolute inset-0 w-full h-[2px] lg:h-1 top-1/2 -translate-y-1/2"
                        />
                        <motion.span className="block bg-white absolute inset-0 h-[2px] lg:h-1 top-1/2 -translate-y-1/2 rotate-90" />
                      </motion.span>
                      {/* // 아이콘 */}
                    </button>
                    {/* END: 대메뉴 */}
                    <motion.ul
                      className="pl-1 overflow-hidden flex flex-col gap-3 lg:gap-6"
                      initial="closed"
                      animate={
                        openMenuIdList.includes(nav.id) ? "open" : "closed"
                      }
                      variants={accordionVariants}
                      transition={{ duration: 0.5 }}
                    >
                      {/* START: 소메뉴 */}
                      {nav.children.map((child) => (
                        <li
                          key={child.id}
                          className="first-of-type:pt-4 lg:first-of-type:pt-10 last-of-type:pb-4 lg:last-of-type:pb-10"
                        >
                          <Link
                            to={`/sub${child.path}`}
                            className="text-base lg:text-xl font-medium text-future-gray-300 hover:text-white"
                            onClick={handleToggleHambergerMenu}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                      {/* END: 소메뉴 */}
                    </motion.ul>
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburger;
