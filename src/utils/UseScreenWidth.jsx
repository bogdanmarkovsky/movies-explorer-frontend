import { useState, useEffect, useCallback } from "react";

export const useScreenWidth = () => {
  const checkScreenWidth = useCallback(() => window.innerWidth, []);
  const [screenWidth, setsSreenWidth] = useState(checkScreenWidth);

  useEffect(() => {
    let checkScreenWidthTimeout;
    const handleCheckScreenWidthTimeout = () => {
      if (!checkScreenWidthTimeout) {
        checkScreenWidthTimeout = setTimeout(() => {
          setsSreenWidth(checkScreenWidth());
          checkScreenWidthTimeout = null;
        }, 1000);
      }
    }

    window.addEventListener('resize', handleCheckScreenWidthTimeout);

    return () => window.removeEventListener('resize', handleCheckScreenWidthTimeout);
  }, [checkScreenWidth]);

  return screenWidth;
}
