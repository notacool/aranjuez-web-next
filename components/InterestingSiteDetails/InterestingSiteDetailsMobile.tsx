import React, { useState } from "react";
import { Box, Button, Container, Grid, IconButton, List } from "@mui/material";
import ImageGallery from "@components/ImageGallery/ImageGallery";
import Drawer from "@mui/material/Drawer";
import {
  TitleTypography,
  SectionTypography,
  DescriptionTypography,
} from "@components/RouteDetails/routeDetailsStyles";
import NavBarMobile from "@components/Navbar/NavBarMobile";
import CloseIcon from "@mui/icons-material/Close";
import MenuMobile from "@components/Navbar/MenuMobile";
import { DrawerHeader, drawerWidth, Main } from "utils/DrawerComponents";
import { images } from "@const/images";
import { INTERESTING_SITES } from "@const/interestingSites";
import { ROUTES_INFO } from "@const/routes";

interface RouteProps {
  url: string;
}

export default function InterestingSitesMobile({ url }: RouteProps) {
  const [open, setOpen] = useState(false);
  const filterImages = images.filter((image) => image.pointOfInterest === url);
  const filterSite = INTERESTING_SITES.filter((site) => site.url === url);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", padding: 0, marginTop: 2 }}>
      <NavBarMobile open={open} handleDrawerOpen={handleDrawerOpen} />
      <Main open={open}></Main>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginBottom="3em"
          marginTop="4em"
        >
          <Grid item xs={12}>
            <TitleTypography fontWeight="700" fontSize="24px" lineHeight="29px">
              {filterSite[0].name}
            </TitleTypography>
            <DescriptionTypography
              fontWeight="400"
              fontSize="16px"
              lineHeight="20px"
            >
              {filterSite[0].introduction}
            </DescriptionTypography>
            <Grid item xs={12} spacing={0} sx={{ padding: 0, marginTop: 5 }}>
              <DescriptionTypography
                fontWeight="600"
                fontSize="22px"
                lineHeight="22px">
                Rutas que pasan por <i>{filterSite[0].name}</i>:
              </DescriptionTypography>
              <List>
                {ROUTES_INFO.map((route) => filterSite[0].routeId.includes(route.routeId) &&
                  <DescriptionTypography
                    fontWeight="50"
                    fontSize="18px"
                    lineHeight="2px">
                    <Button variant="outlined" > <a href={`https://minio.notacool.com/aranjuez/${route.url}.pdf`} target="_blank" rel="noopener noreferrer"> R{route.routeId} - {route.title} (PDF)</a></Button></DescriptionTypography>
                )}
              </List>

            </Grid>
          </Grid>


          <Grid item xs={12}>
            <SectionTypography>Galería de imágenes</SectionTypography>
          </Grid>
          <Grid item xs={12}>
            <ImageGallery images={filterImages} />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            {filterSite[0].description.map((paragraph, index) => (
              <DescriptionTypography
                key={index}
                fontWeight="400"
                fontSize="18px"
                lineHeight="22px"
              >
                {paragraph}
              </DescriptionTypography>
            ))}
          </Grid>

          <Grid item xs={12}>
            <SectionTypography>Mapa</SectionTypography>
          </Grid>
          <iframe
            src={filterSite[0].mapUrl}
            width="100%"
            height="600px"
            loading="lazy"
          ></iframe>
        </Grid>
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
