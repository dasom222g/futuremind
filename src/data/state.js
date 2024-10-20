// state/menuState.js
import { atom } from "recoil";

// 햄버거메뉴 오픈상태
export const isMenuOpenState = atom({
  key: "isMenuOpenState", // 고유한 ID
  default: false, // 기본값
});

export const mainSectionNumState = atom({
  key: "mainSectionNumState",
  default: 0,
});

export const scrollYState = atom({
  key: "scrollYState",
  default: 0,
});
