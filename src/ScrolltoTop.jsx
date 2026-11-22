// fix bug setiap pindah halaman / melakukan sesuatu, baca halaman dari atas

import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrolltoTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrolltoTop;
