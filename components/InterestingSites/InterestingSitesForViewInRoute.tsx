import { CardContent, CardMedia, Grid2 } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {
  DescriptionTypography,
  LinkContainer,
} from "@components/RouteDetails/routeDetailsStyles";
import { useScreenSize } from "@hooks/useScreenSize";
import { useRouter } from "next/router";

interface ISiteProps {
  id: number;
  siteName: string;
  siteImage: string;
  siteUrl: string;
  siteDescription: Array<string>;
  siteIntroduction: string;
  routeVIP?: boolean;
}

export default function InterestingSitesForViewInRoute(props: ISiteProps) {
  const { isDesktop } = useScreenSize();
  const router = useRouter();
  const handleButtonClick = (param: string) => {
    props.routeVIP
      ? router.push(`/routes/ilustres-visitantes/${param}`)
      : router.push(`/interesting-sites/${param}`);
  };

  return isDesktop ? (
    <CardContainer>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 3 }}>
          <LinkContainer onClick={() => handleButtonClick(props.siteUrl)}>
            <img
              className="interestSitesImg"
              width="100%"
              height="170vh"
              alt="aranjuez"
              src={props.siteImage}
            />
          </LinkContainer>
        </Grid2>
        <Grid2 size={{ xs: 8 }}>
          <TitleTypography onClick={() => handleButtonClick(props.siteUrl)}>
            <LinkContainer>{props.siteName}</LinkContainer>
          </TitleTypography>
          <DescriptionTypography
            fontWeight="400"
            fontSize="18px"
            lineHeight="22px"
          >
            <DescriptionContainer>
              {props.siteIntroduction}
            </DescriptionContainer>
          </DescriptionTypography>
        </Grid2>
      </Grid2>
    </CardContainer>
  ) : (
    <CardContainerMobile>
      <CardMedia
        component="img"
        height="100"
        src={props.siteImage}
        alt="Aranjuez"
        sx={{ background: "#fdfaf8", marginBottom: "1em" }}
        onClick={() => handleButtonClick(props.siteUrl)}
      />
      <CardContent sx={{ padding: "10px" }}>
        {/* <Button style={{ textTransform: "none" }}> */}
        <TitleTypography
          style={{ marginTop: "-0.2em" }}
          onClick={() => handleButtonClick(props.siteUrl)}
        >
          {props.siteName}
        </TitleTypography>
        {/* </Button> */}
      </CardContent>
    </CardContainerMobile>
  );
}

const CardContainer = styled.div`
  border: 1px solid #5c4835;
  border-radius: 4px;
  margin-bottom: 0.5em;
  min-width: 100%;
`;

const CardContainerMobile = styled.div`
  border: 0.5px solid #5c4835;
  border-radius: 4px;
  margin-bottom: 1px;
`;

const TitleTypography = styled.h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #5c4835;
`;

const DescriptionContainer = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
