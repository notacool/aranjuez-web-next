import React from "react";
import { Container, Grid } from "@mui/material";
import {
  TitleTypography,
  DescriptionTypography,
  SectionTypography,
} from "./routeDetailsStyles";
import ImageGallery from "@components/ImageGallery/ImageGallery";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";
import Footer from "@components/Footer/Footer";
import InterestingSitesForViewInRoute from "@components/InterestingSites/InterestingSitesForViewInRoute";
import { images } from "@const/images";
import { INTERESTING_SITES } from "@const/interestingSites";
import IllustriousPeople from "@components/AcordionRoute5/IllustriousPeople";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { INTERESTING_SITES_FOR_MIRADORES } from "@const/interestingSitesForMiradores";
import { INTERESTING_SITES_FOR_AGUA } from "@const/interestingSitesForRutaDelAgua";
import { INTERESTING_SITES_FOR_VIP_PEOPLE } from "@const/interestingSitesForVipPeople";
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

export default function RouteDetails({
  id,
  title,
  introduction,
  videoDescription,
  videoUrl,
  description,
  image,
  mapUrl,
}: RouteProps) {
  const filterImages = images.filter((image) => image.route.includes(id));
  const filterInterestingSites = INTERESTING_SITES.filter((site) =>
    site.routeId.includes(id)
  );

  return (
    <>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginTop="4em"
          marginBottom="3em"
        >
          <Grid item xs={12}>
            <TitleTypography
              fontWeight="700"
              fontSize={title.includes("visitantes") ? "70px" : "72px"}
              lineHeight="88px"
            >
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
          </Grid>
          <Grid item xs={12}>
            <SectionTypography>Vídeo de la ruta</SectionTypography>
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <VideoPlayer url={videoUrl} image={image} />
          </Grid>

          <Grid item xs={12} sx={{ marginTop: "4em" }}>
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
          </Grid>
          <Grid item xs={12}>
            <SectionTypography>Galería de imágenes</SectionTypography>
          </Grid>
          <Grid item xs={12}>
            <ImageGallery images={filterImages} />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          {title === "Ruta de los personajes ilustres" && (
            <Grid item xs={12}>
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
            </Grid>
          )}
          {title !== "Ruta de los personajes ilustres" && (
            <Grid item xs={12}>
              <SectionTypography>Puntos de interés</SectionTypography>
            </Grid>
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
          <Grid item xs={12}>
            <SectionTypography>Mapa</SectionTypography>
          </Grid>

          <iframe src={mapUrl} width="100%" height="600px"></iframe>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
