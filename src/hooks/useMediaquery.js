import { useState, useEffect } from "react";

/**
 * 미디어 쿼리 상태를 관리하는 커스텀 훅
 * @param {string} query - CSS 미디어 쿼리 문자열 (예: '(max-width: 768px)')
 * @returns {boolean} 미디어 쿼리 일치 여부
 */
const useMediaQuery = (query) => {
  // SSR 대응: window 객체가 없는 경우를 위한 초기값 설정
  const getMatches = (query) => {
    // 서버사이드에서는 window가 없으므로 기본값 반환
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // 핸들러 함수
    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };

    // 초기값 설정
    updateMatches();

    // 리사이즈 이벤트 리스너 등록
    mediaQuery.addEventListener("change", updateMatches);

    // 클린업 함수: 컴포넌트 언마운트 시 리스너 제거
    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
};

// 자주 사용하는 브레이크포인트를 상수로 정의
export const BREAKPOINTS = {
  // mobile: "(max-width: 768px)",
  tablet: "(max-width: 1023px)",
  desktop: "(min-width: 1024px)",
};

export default useMediaQuery;
