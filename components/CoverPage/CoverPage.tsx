import React from "react";
import Image from "next/image";
import { Grid2, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import { Link } from "react-scroll";
import { useScreenSize } from "@hooks/useScreenSize";
import RouteDescription from "@components/RouteCardComponents/RouteDescription";
import CarouselCoverPage from "@components/CarouselCoverImages/Carousel";
import {
  DescriptionText,
  Title,
  LinkContainer,
  TitleMobile,
} from "./coverPageStyles";

const useStyles = makeStyles({
  titleContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    top: "50%",
  },
});

interface TypographyProps {
  variant?: string;
}

export default function CoverPage(props: TypographyProps) {
  const classes = useStyles();
  const theme = useTheme();
  const { isDesktop } = useScreenSize();
  return isDesktop ? (
    <Grid2
      container
      className="sectionContainer"
      id="home"
      sx={{ backgroundColor: "#fdfaf8" }}
    >
      <Grid2 size={{ xs: 6 }} className={classes.titleContainer}>
        <Title>
          Conoce <br /> Aranjuez
        </Title>
        <DescriptionText>
          <Link to="1" smooth>
            <Grid2 container justifyContent="flex-end">
              <LinkContainer isDesktop={isDesktop}>
                <Typography variant="h4">Ver Rutas</Typography>
              </LinkContainer>
            </Grid2>
          </Link>
        </DescriptionText>
      </Grid2>

      <Grid2 size={{ xs: 6 }} style={{ width: "50%", height: "100vh", position: 'relative' }}>
        <Image
          className="imageLeft"
          alt="aranjuez"
          src="https://minio.notacool.com/aranjuez/interestingSites/web/puente de barcas/aranjuez_puente_de_barcas_1.jpg"
          fill
          style={{ objectFit: 'cover' }}
        />
        <Image
          className="imageCenter"
          alt="aranjuez"
          src="https://minio.notacool.com/aranjuez/interestingSites/web/iglesia de alpajes/aranjuez_iglesia_alpajes_1.jpg"
          fill
          style={{ objectFit: 'cover' }}
        />
        <Image
          className="imageRight"
          alt="aranjuez"
          src="https://minio.notacool.com/aranjuez/interestingSites/web/casa de infantes/aranjuez_casa_de_infantes_5.jpg"
          fill
          style={{ objectFit: 'cover' }}
        />
      </Grid2>
    </Grid2>
  ) : (
    <Grid2 size={{ xs: 12 }}>
      <CarouselCoverPage />
      <Grid2 container paddingX={3}>
        <TitleMobile>Conoce Aranjuez</TitleMobile>
        <RouteDescription
          accentColor={theme.palette.primary.main}
          fontSize="16px"
          lineHeight="19px"
          marginBottom="4vh"
        />
        <Grid2 size={{ xs: 12 }}>
          <LinkContainer isDesktop={isDesktop}>
            <Link to="1" smooth>
              <Typography variant="h5">Ver Rutas</Typography>
            </Link>
          </LinkContainer>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
