import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { INTERESTING_SITES } from "@const/interestingSites";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import Searcher from "./Searcher";
import MenuMobile from "@components/Navbar/MenuMobile";
import NavBarMobile from "@components/Navbar/NavBarMobile";
import FiltersMobile from "@components/Filters/FiltersMobile";
import { useRouter } from "next/router";
import { DrawerHeader, Main } from "utils/DrawerComponents";
import { images } from "@const/images";
import { InterestingSites } from "types";
import styled from "styled-components";

export default function InterestingSitesMobile() {
  const [checked, setChecked] = useState([0]);
  const [sites, setSites] = useState<InterestingSites[]>([]);
  const [searchResult, setSearchResult] = useState<InterestingSites[]>([]);
  const [sitesToShow, setSitesToShow] = useState<InterestingSites[]>([]);
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

  const [open, setOpen] = useState(false);
  const drawerWidth = 240;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", marginTop: 12 }}>
      <NavBarMobile open={open} handleDrawerOpen={handleDrawerOpen} />
      <Main open={open}></Main>
      <DrawerHeader />
      <Container>
        <Grid2 container spacing={1}>
          <Grid2
            container
            size={{ xs: 11 }}
            style={{ justifyContent: "space-between" }}
          >
            <Searcher
              setSearchResult={(e) => setSearchResult(e)}
              sites={sites}
            />

            <FiltersMobile
              sites={sites}
              setSites={(e) => setSites(e)}
              setSearchResult={(e) => setSearchResult(e)}
              checked={checked}
              setChecked={setChecked}
            />
          </Grid2>
          {sitesToShow.length !== 0 &&
            sitesToShow.map((site, index) => (
              <Grid2
                size={{ xs: 6 }}
                key={index}
                style={{ display: "flex", alignItems: "stretch" }}
              >
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={site.image}
                      sx={{ minHeight: "15vh", maxHeight: "15vh" }}
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
              </Grid2>
            ))}
        </Grid2>
      </Container>
      {/* <DrawerComponent handleDrawerClose={handleDrawerClose} open={open} /> */}
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

const IntroductionContainer = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
