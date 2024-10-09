import React, { useState, useEffect } from "react";
import { useScreenSize } from "@hooks/useScreenSize";
import NavBarDesktop from "@components/Navbar/NavBarDesktop";
import RouteDetails from "@components/RouteDetails/RouteDetails";
import { ROUTES_INFO } from "@const/routes";
import RouteDetailsMobile from "@components/RouteDetails/RouteDetailsMobile";
import { Box, LinearProgress } from "@mui/material";
import FooterMobile from "@components/Footer/FooterMobile";
import { useRouter } from "next/router";
import { Route } from "types";
import SelectAppModal from "@components/selectAppModal/SelectAppModal";

export default function RouteView() {
  const { isDesktop, isMobile, isTablet } = useScreenSize();
  const router = useRouter();
  const dinamicURL = router.asPath;

  const [currentRoute, setCurrentRoute] = useState<Route>();

  useEffect(() => {
    const selectRoute = () => {
      const route = ROUTES_INFO.filter(
        (route) => dinamicURL.split("/")[2] === route.url
      );
      setCurrentRoute(route[0]);
    };
    selectRoute();
  }, [dinamicURL]);

  return (!isDesktop && !isMobile && !isTablet) || !currentRoute ? (
    <Box sx={{ width: "100%", marginTop: "50vh" }}>
      <LinearProgress />
      <LinearProgress />
    </Box>
  ) : isDesktop ? (
    <>
      <NavBarDesktop />
      <RouteDetails
        id={currentRoute.routeId}
        title={currentRoute.title}
        introduction={currentRoute.introduction}
        videoDescription={currentRoute.videoDescription}
        description={currentRoute.description}
        image={currentRoute.imageUrl}
        videoUrl={currentRoute.videoUrl}
        mapUrl={currentRoute.mapUrl}
      />
    </>
  ) : (
    <>
      <RouteDetailsMobile
        id={currentRoute.routeId}
        title={currentRoute.title}
        introduction={currentRoute.introduction}
        videoDescription={currentRoute.videoDescription}
        description={currentRoute.description}
        videoUrl={currentRoute.videoUrl}
        image={currentRoute.imageUrl}
        mapUrl={currentRoute.mapUrl}
      />
      <FooterMobile />
      <SelectAppModal />
    </>
  );
}
