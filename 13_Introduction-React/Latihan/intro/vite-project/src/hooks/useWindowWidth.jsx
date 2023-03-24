import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  let checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 600);
  };

  useEffect(() => {
    checkScreenSize();
  }, []);

  return isSmallScreen;
};

export default useWindowWidth;
