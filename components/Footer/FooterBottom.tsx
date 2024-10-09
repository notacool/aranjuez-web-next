import { Grid } from "@mui/material";
import React from "react";
import { FooterTypography } from "./footerStyles";

export default function FooterBottom() {
  return (
    <Grid
      container
      sx={{ background: "#5c4835", justifyContent: "space-around" }}
    >
      {/* <FooterTypography
        fontWeight="400"
        fontSize="16px"
        lineHeight="20px"
        color="#fdfaf8"
      >
        <a href="https://www.aranjuez.es/aviso-legal/" target="_blank">
          Política de privacidad
        </a>
      </FooterTypography> */}
      <FooterTypography
        fontWeight="400"
        fontSize="16px"
        lineHeight="20px"
        color="#fdfaf8"
      >
        Ayuntamiento de Aranjuez - 2022
      </FooterTypography>
      <FooterTypography
        fontWeight="400"
        fontSize="16px"
        lineHeight="20px"
        color="#fdfaf8"
      >
        <a href="https://www.aranjuez.es/aviso-legal/" target="_blank" rel="noreferrer">
          Aviso legal. Política de Cookies
        </a>
      </FooterTypography>
    </Grid>
  );
}
