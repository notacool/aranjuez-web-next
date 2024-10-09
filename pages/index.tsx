import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import LandingPage from "@components/LandingPage/LandingPage";
import { useScreenSize } from "@hooks/useScreenSize";

const Home: NextPage = () => {
  const { isDesktop } = useScreenSize();

  // TODO
  // clave introducida para cargar estilos cuando actualizamos página
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(1);
  }, []);

  return (
    <div key={key}>
      <LandingPage />
    </div>
  );
};

export default Home;
