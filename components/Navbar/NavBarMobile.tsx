import React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { LinkContainer } from "./navBarStyles";
import styled from "styled-components";

interface NavBarProps {
  open: boolean;
  handleDrawerOpen?: () => void;
}

export default function NavBarMobile({ open, handleDrawerOpen }: NavBarProps) {
  const router = useRouter();

  return (
    <AppBar position="fixed" color="default" component="div">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          <LinkContainer>
            <Link to="home" smooth onClick={() => router.push("/")}>
              <div style={{ position: 'relative', width: '100vw', height: '50px' }}>
                <Image
                  src="https://www.aranjuez.es/wp-content/uploads/2019/09/firma_web.png"
                  alt="Aranjuez"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
            <ImgContainer>
              <div style={{ position: 'relative', width: '100px', height: '50px' }}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Logotipo_del_Ministerio_de_Cultura_y_Deporte.svg/2560px-Logotipo_del_Ministerio_de_Cultura_y_Deporte.svg.png" alt="Cultura" fill style={{ objectFit: 'contain' }} />
              </div>
            </ImgContainer>
            <div style={{ position: 'relative', width: '100px', height: '50px' }}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/World_Heritage_Logo_global.svg/230px-World_Heritage_Logo_global.svg.png" alt="UNESCO" fill style={{ objectFit: 'contain' }} />
            </div>
          </LinkContainer>
        </Typography>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }), mr: 1 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const ImgContainer = styled.span`
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  object-fit: contain;
`;

const LogoHumanidadContainer = styled.img`
  height: 5vh;
  width: 13vw;
  margin-left: 0vw;
  margin-right: 1vw;
  object-fit: contain;
`;

const CulturaContainer = styled.img`
  width: 20vw;
  margin-bottom: 1vh;
  object-fit: contain;
`;
