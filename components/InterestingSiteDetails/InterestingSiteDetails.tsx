import React from "react";
import {
  Button,
  Container,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ImageGallery from "@components/ImageGallery/ImageGallery";
import Footer from "@components/Footer/Footer";
import {
  TitleTypography,
  SectionTypography,
  DescriptionTypography,
} from "@components/RouteDetails/routeDetailsStyles";
import { images } from "@const/images";
import { INTERESTING_SITES } from "@const/interestingSites";
import { ROUTES_INFO } from "@const/routes";
import { useRouter } from "next/router";

interface RouteProps {
  url: string;
}

export default function InterestingSitesDetails({ url }: RouteProps) {
  const filterImages = images.filter((image) => image.pointOfInterest === url);
  const filterSite = INTERESTING_SITES.filter((site) => site.url === url);
  const router = useRouter();
  return (
    <>
      <Container>
        <Grid2
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginTop="5em"
          marginBottom="3em"
        >
          <Grid2 size={{ xs: 12 }}>
            <TitleTypography fontWeight="700" fontSize="72px" lineHeight="88px">
              {filterSite[0].name}
            </TitleTypography>

            <DescriptionTypography
              fontWeight="400"
              fontSize="18px"
              lineHeight="22px"
            >
              {filterSite[0].introduction}
            </DescriptionTypography>
            <Grid2
              size={{ xs: 12 }}
              spacing={0}
              sx={{ padding: 0, marginTop: 5 }}
            >
              <DescriptionTypography
                fontWeight="600"
                fontSize="22px"
                lineHeight="22px"
              >
                Rutas que pasan por <i>{filterSite[0].name}</i>:
              </DescriptionTypography>
              <List>
                {ROUTES_INFO.map(
                  (route, id) =>
                    filterSite[0].routeId.includes(route.routeId) && (
                      <DescriptionTypography
                        key={id}
                        fontWeight="50"
                        fontSize="18px"
                        lineHeight="2px"
                      >
                        <Button variant="outlined">
                          <a
                            href={`https://minio.notacool.com/aranjuez/${route.url}.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            R{route.routeId} - {route.title} (PDF)
                          </a>
                        </Button>
                      </DescriptionTypography>
                    )
                )}
              </List>
            </Grid2>
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <SectionTypography>Galería de imágenes</SectionTypography>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <ImageGallery images={filterImages} />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ marginTop: 2 }}>
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
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <SectionTypography>Mapa</SectionTypography>
          </Grid2>

          <iframe src={filterSite[0].mapUrl} width="640" height="480"></iframe>
        </Grid2>
      </Container>
      <Footer />
    </>
  );
}
