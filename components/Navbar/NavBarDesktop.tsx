import { AppBar, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import {
  ImgContainer,
  LinkContainer,
  LogoContainer,
  NavBarTypography,
} from "./navBarStyles";
import RoutesDropdown from "./RoutesDropdown";

interface Props {
  landing?: boolean;
}

export default function NavBarDesktop({ landing }: Props) {
  const router = useRouter();
  const handleButtonClick = (url: string) => {
    router.push(url);
  };

  return (
    <AppBar position="fixed" color="default" component="div">
      <Toolbar>
        <LogoContainer>
          <Link to="home" smooth onClick={() => handleButtonClick("/")}>
            <ImgContainer src="https://www.aranjuez.es/wp-content/uploads/2019/09/firma_web.png"></ImgContainer>
          </Link>
          <CulturaContainer src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Logotipo_del_Ministerio_de_Cultura_y_Deporte.svg/2560px-Logotipo_del_Ministerio_de_Cultura_y_Deporte.svg.png"></CulturaContainer>
          <LogoHumanidadContainer src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/World_Heritage_Logo_global.svg/230px-World_Heritage_Logo_global.svg.png"></LogoHumanidadContainer>
        </LogoContainer>
        <RoutesDropdown landing={landing} />
        <NavBarTypography>
          <LinkContainer
            onClick={() => handleButtonClick("/interesting-sites")}
          >
            Puntos de interés
          </LinkContainer>
        </NavBarTypography>
        <LinkContainer>
          <Link to="footer" smooth>
            <NavBarTypography>Contacto</NavBarTypography>
          </Link>
        </LinkContainer>
      </Toolbar>
    </AppBar>
  );
}

const LogoHumanidadContainer = styled.img`
  height: 8vh;
  width: 4vw;
  margin-left: 3vw;
  margin-right: 3vw;
`;

const CulturaContainer = styled.img`
  width: 7vw;
  margin-bottom: 2vh;
  margin-left: 3vw;
`;
