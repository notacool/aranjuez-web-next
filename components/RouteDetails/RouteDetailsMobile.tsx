import NavBarMobile from "@components/Navbar/NavBarMobile";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { Container, Grid2, IconButton } from "@mui/material";
import MenuMobile from "@components/Navbar/MenuMobile";
import {
  DescriptionTypography,
  SectionTypography,
  TitleTypography,
} from "./routeDetailsStyles";
import ImageGallery from "@components/ImageGallery/ImageGallery";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";
import InterestingSitesForViewInRoute from "@components/InterestingSites/InterestingSitesForViewInRoute";
import { DrawerHeader, drawerWidth, Main } from "utils/DrawerComponents";
import { images } from "@const/images";
import { INTERESTING_SITES } from "@const/interestingSites";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IllustriousPeople from "@components/AcordionRoute5/IllustriousPeople";
import { INTERESTING_SITES_FOR_MIRADORES } from "@const/interestingSitesForMiradores";
import { INTERESTING_SITES_FOR_AGUA } from "@const/interestingSitesForRutaDelAgua";
import DisplayInterestingSitesForVipPeople from "@components/InterestingSiteDetails/DisplayInterestingSitesForVipPeople";
interface RouteProps {
  id: number;
  title: string;
  introduction: Array<string>;
  videoDescription: Array<string>;
  description: Array<string>;
  videoUrl: string;
  image: string;
  mapUrl: string;
}

export default function RouteDetailsMobile({
  id,
  title,
  introduction,
  videoDescription,
  videoUrl,
  description,
  image,
  mapUrl,
}: RouteProps) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const filterImages = images.filter((image) => image.route.includes(id));
  const filterInterestingSites = INTERESTING_SITES.filter((site) =>
    site.routeId.includes(id)
  );
  return (
    <Box sx={{ display: "flex", padding: 0, marginTop: 4 }}>
      <NavBarMobile open={open} handleDrawerOpen={handleDrawerOpen} />
      <Main open={open}></Main>
      <Container>
        <DrawerHeader />
        <Grid2 size={{ xs: 12 }}>
          <TitleTypography fontWeight="700" fontSize="24px" lineHeight="29px">
            {title}
          </TitleTypography>
          {introduction.map((paragraph, index) => (
            <DescriptionTypography
              key={index}
              fontWeight="400"
              fontSize="18px"
              lineHeight="22px"
            >
              {paragraph}
            </DescriptionTypography>
          ))}
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <SectionTypography>Vídeo de la ruta</SectionTypography>
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
          <VideoPlayer url={videoUrl} image={image} />
        </Grid2>

        <Grid2 size={{ xs: 12 }} sx={{ marginTop: "4em" }}>
          {videoDescription.map((paragraph, index) => (
            <DescriptionTypography
              key={index}
              fontWeight="400"
              fontSize="18px"
              lineHeight="22px"
            >
              {paragraph}
            </DescriptionTypography>
          ))}
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <SectionTypography>Galería de imágenes</SectionTypography>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <ImageGallery images={filterImages} />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          {description.map((paragraph, index) => (
            <DescriptionTypography
              key={index}
              fontWeight="400"
              fontSize="18px"
              lineHeight="22px"
            >
              {paragraph}
            </DescriptionTypography>
          ))}
        </Grid2>
        {title === "Ruta de los personajes ilustres" && (
          <Grid2 size={{ xs: 12 }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <SectionTypography>Personajes Ilustres</SectionTypography>
              </AccordionSummary>
              <AccordionDetails>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <SectionTypography>
                      Personajes en la ciudad
                    </SectionTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <IllustriousPeople id="ciudad" />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <SectionTypography>
                      Personajes en el paisaje
                    </SectionTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <IllustriousPeople id="paisaje" />
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </Grid2>
        )}
        {title !== "Ruta de los personajes ilustres" && (
          <Grid2 size={{ xs: 12 }}>
            <SectionTypography>Puntos de interés</SectionTypography>
          </Grid2>
        )}
        {title === "Ruta de los miradores" ? (
          INTERESTING_SITES_FOR_MIRADORES.map((site, index) => (
            <InterestingSitesForViewInRoute
              id={id}
              key={index}
              siteUrl={site.url}
              siteName={site.name}
              siteImage={site.image}
              siteIntroduction={site.introduction}
              siteDescription={site.description}
            />
          ))
        ) : title === "Ruta del agua y las Colonias agropecuarias" ? (
          INTERESTING_SITES_FOR_AGUA.map((site, index) => (
            <InterestingSitesForViewInRoute
              id={id}
              key={index}
              siteUrl={site.url}
              siteName={site.name}
              siteImage={site.image}
              siteIntroduction={site.introduction}
              siteDescription={site.description}
            />
          ))
        ) : title === "Ruta de los personajes ilustres" ? (
          <DisplayInterestingSitesForVipPeople id={id} />
        ) : (
          filterInterestingSites &&
          filterInterestingSites.map((site, index) => (
            <InterestingSitesForViewInRoute
              id={id}
              key={index}
              siteUrl={site.url}
              siteName={site.name}
              siteImage={site.image}
              siteIntroduction={site.introduction}
              siteDescription={site.description}
            />
          ))
        )}
        <Grid2 size={{ xs: 12 }}>
          <SectionTypography>Mapa</SectionTypography>
        </Grid2>
        <iframe
          src={mapUrl}
          width="100%"
          height="600px"
          loading="lazy"
        ></iframe>
      </Container>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        BackdropProps={{ invisible: true }}
        // variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon fontSize="large" color="primary" />
          </IconButton>
        </DrawerHeader>
        <MenuMobile landing={false} handleDrawerClose={handleDrawerClose} />
      </Drawer>
    </Box>
  );
}
