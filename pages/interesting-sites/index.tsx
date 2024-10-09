import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import Filters from "@components/Filters/Filters";
import { INTERESTING_SITES } from "@const/interestingSites";
import { useScreenSize } from "@hooks/useScreenSize";
import InterestingSitesMobile from "@components/InterestingSites/InterestingSitesMobile";
import Searcher from "@components/InterestingSites/Searcher";
import NavBarDesktop from "@components/Navbar/NavBarDesktop";
import Footer from "@components/Footer/Footer";
import FooterMobile from "@components/Footer/FooterMobile";
import styled from "styled-components";
import { InterestingSites } from "types";
import SelectAppModal from "@components/selectAppModal/SelectAppModal";

export default function InterestingSitesPage() {
  const [sites, setSites] = useState<InterestingSites[]>([]);
  const [searchResult, setSearchResult] = useState<InterestingSites[]>([]);
  const [sitesToShow, setSitesToShow] = useState<InterestingSites[]>([]);
  const { isDesktop, isMobile, isTablet } = useScreenSize();
  const router = useRouter();
  const handleButtonClick = (url: string) => {
    router.push("/interesting-sites/" + url);
  };
  useEffect(() => setSites(INTERESTING_SITES), []);

  useEffect(() => {
    const changeSites = () => {
      searchResult.length === 0
        ? setSitesToShow(sites)
        : setSitesToShow(searchResult);
    };
    changeSites();
  }, [sites, searchResult]);

  // Loader
  return !isDesktop && !isMobile && !isTablet ? (
    <Box sx={{ width: "100%", marginTop: "50vh" }}>
      <LinearProgress />
      <LinearProgress />
    </Box>
  ) : isDesktop ? (
    <>
      <NavBarDesktop />
      <Container>
        <Grid
          container
          spacing={4}
          style={{
            marginTop: "6em",
            textOverflow: "clip",
            paddingBottom: "200px",
          }}
        >
          <Grid container item xs={3} style={{ display: "flex" }}>
            <Filters
              sites={sites}
              setSites={setSites}
              setSearchResult={setSearchResult}
            />
          </Grid>
          <Grid container spacing={4} item xs={9}>
            <Searcher setSearchResult={setSearchResult} sites={sites} />
            {sitesToShow.length !== 0 &&
              sitesToShow.map((site, index) => (
                <Grid
                  item
                  xs={4}
                  key={index}
                  style={{ display: "flex", alignItems: "stretch" }}
                >
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={site.image}
                        sx={{ minHeight: "20vh", maxHeight: "20vh" }}
                      />
                      <CardContent onClick={() => handleButtonClick(site.url)}>
                        <Typography gutterBottom variant="h6" component="div">
                          {site.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <IntroductionContainer>
                            {site.introduction}
                          </IntroductionContainer>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Container>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  ) : (
    <div>
      <InterestingSitesMobile />
      <FooterMobile />
      <SelectAppModal />
    </div>
  );
}

const FooterContainer = styled.div`
  bottom: 0;
  height: 328px;
  width: 100%;
`;

const IntroductionContainer = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
