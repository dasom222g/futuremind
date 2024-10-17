// state/menuState.js
import { atom } from "recoil";

export const isMenuOpenState = atom({
  key: "isMenuOpenState", // 고유한 ID
  default: false, // 기본값
});
