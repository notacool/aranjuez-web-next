import React, { useState, useEffect } from "react";
import { useScreenSize } from "@hooks/useScreenSize";
import NavBarDesktop from "@components/Navbar/NavBarDesktop";
import InterestingSitesDetails from "@components/InterestingSiteDetails/InterestingSiteDetails";
import { INTERESTING_SITES } from "@const/interestingSites";
import { Box, LinearProgress } from "@mui/material";
import InterestingSitesDetailsMobile from "@components/InterestingSiteDetails/InterestingSiteDetailsMobile";
import NavBarMobile from "@components/Navbar/NavBarMobile";
import FooterMobile from "@components/Footer/FooterMobile";
import { useRouter } from "next/router";
import { InterestingSites } from "types";
import SelectAppModal from "@components/selectAppModal/SelectAppModal";

export default function InterestingSiteView() {
  const { isDesktop, isMobile, isTablet } = useScreenSize();
  const router = useRouter();
  const dinamicURL = router.asPath;

  const [currentSite, setCurrentSite] = useState<InterestingSites>();

  useEffect(() => {
    const selectSite = () => {
      const site = INTERESTING_SITES.filter(
        (site) => dinamicURL.split("/")[2] === site.url
      );
      setCurrentSite(site[0]);
    };
    selectSite();
  }, [dinamicURL]);

  return (!isDesktop && !isMobile && !isTablet) || !currentSite ? (
    <Box sx={{ width: "100%", marginTop: "50vh" }}>
      <LinearProgress />
      <LinearProgress />
    </Box>
  ) : isDesktop ? (
    <>
      <NavBarDesktop />
      <InterestingSitesDetails url={currentSite.url} />
    </>
  ) : (
    <>
      <NavBarMobile open={false} />
      <InterestingSitesDetailsMobile url={currentSite.url} />
      <FooterMobile />
      <SelectAppModal />
    </>
  );
}
