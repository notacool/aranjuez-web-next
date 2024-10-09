import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { ROUTES_INFO } from "@const/routes";
import CoverPage from "@components/CoverPage/CoverPage";
import { useScreenSize } from "@hooks/useScreenSize";
import CloseIcon from "@mui/icons-material/Close";
import MenuMobile from "@components/Navbar/MenuMobile";
import Footer from "@components/Footer/Footer";
import NavBarDesktop from "@components/Navbar/NavBarDesktop";
import NavBarMobile from "@components/Navbar/NavBarMobile";
import LinearProgress from "@mui/material/LinearProgress";
import { ScrollerItem } from "@components/ScrollerItem";
import FooterMobile from "@components/Footer/FooterMobile";
import { DrawerHeader, drawerWidth, Main } from "utils/DrawerComponents";
import { Container } from "@mui/material";
import SelectAppModal from "@components/selectAppModal/SelectAppModal";

export default function LandingPage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { isDesktop, isMobile, isTablet } = useScreenSize();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return !isDesktop && !isMobile && !isTablet ? (
    <Box sx={{ width: "100%", marginTop: "50vh" }}>
      <LinearProgress />
      <LinearProgress />
    </Box>
  ) : (
    <>
      {isDesktop ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <NavBarDesktop landing />
          <Main open={open}>
            <DrawerHeader />
            <CoverPage />
            {ROUTES_INFO.map((item, index) => (
              <ScrollerItem
                {...item}
                mainColor={
                  index % 2
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main
                }
                accentColor={
                  index % 2
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main
                }
                key={index}
                routeNumber={index + 1}
                position={index % 2 ? "left" : "right"}
              />
            ))}
            <Footer />
          </Main>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
            BackdropProps={{ invisible: true }}
            variant={isDesktop ? "persistent" : "temporary"}
            anchor="right"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                <CloseIcon fontSize="large" color="primary" />
              </IconButton>
            </DrawerHeader>
            <MenuMobile handleDrawerClose={handleDrawerClose} landing />
          </Drawer>
        </Box>
      ) : (
        <>
          <Box sx={{ display: "flex", padding: 0, marginTop: 4 }}>
            <NavBarMobile open={open} handleDrawerOpen={handleDrawerOpen} />
            <Main open={open}></Main>
            <Container>
              <DrawerHeader />
              <CoverPage />
              {ROUTES_INFO.map((item, index) => (
                <ScrollerItem
                  {...item}
                  mainColor={
                    index % 2
                      ? theme.palette.secondary.main
                      : theme.palette.primary.main
                  }
                  accentColor={
                    index % 2
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main
                  }
                  key={index}
                  routeNumber={index + 1}
                  position={index % 2 ? "left" : "right"}
                />
              ))}
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
              anchor="right"
              open={open}
            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  <CloseIcon fontSize="large" color="primary" />
                </IconButton>
              </DrawerHeader>
              <MenuMobile
                landing={true}
                handleDrawerClose={handleDrawerClose}
              />
            </Drawer>
          </Box>
          <FooterMobile />
          <SelectAppModal />
        </>
      )}
    </>
  );
}
