import { Grid } from "@mui/material";
import styled from "styled-components";
import { Route } from "types";
import { useScreenSize } from "@hooks/useScreenSize";
import RouteTitle from "@components/RouteCardComponents/RouteTitle";
import RouteDescription from "@components/RouteCardComponents/RouteDescription";
import RouteButton from "@components/RouteCardComponents/RouteButton";

export interface IScrollerItemProps extends Route {
  mainColor: string;
  accentColor: string;
  position: "left" | "right";
  routeNumber: number;
  url: string;
}

export const ScrollerItem = (props: IScrollerItemProps) => {
  const { isDesktop } = useScreenSize();
  return isDesktop ? (
    <StyledGrid
      container
      id={`${props.routeNumber}`}
      color={props.mainColor}
      alignItems="center"
    >
      {props.position === "left" && (
        <Grid item xs={12} md={6}>
          <Image src={props.imageUrl} alt="Aranjuez" />
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        <Grid container padding={5}>
          <RouteTitle
            title={props.title}
            accentColor={props.accentColor}
            fontSize="70px"
            lineHeight="90px"
          />
          <RouteDescription
            introduction={props.introduction}
            accentColor={props.accentColor}
            fontSize="24px"
            lineHeight="29px"
          />
          <Grid container justifyContent="flex-end">
            <RouteButton
              accentColor={props.accentColor}
              position={props.position}
              goTo={props.to}
              url={props.url}
            />
          </Grid>
        </Grid>
      </Grid>
      {props.position === "right" && (
        <Grid item xs={12} md={6}>
          <Image src={props.imageUrl} alt="Aranjuez" />
        </Grid>
      )}
    </StyledGrid>
  ) : (
    <StyledGrid id={`${props.routeNumber}`} color={props.mainColor}>
      <Grid item xs={12}>
        <ImageMovil src={props.imageUrl} alt="Aranjuez" />
        <Grid container paddingX={3}>
          <RouteTitle
            title={props.title}
            accentColor={props.accentColor}
            fontSize="24px"
            lineHeight="30px"
          />
          <RouteDescription
            introduction={props.introduction}
            accentColor={props.accentColor}
            fontSize="16px"
            lineHeight="19px"
          />
          <Grid item xs={12}>
            <RouteButton
              fullWidth
              accentColor={props.accentColor}
              position={props.position}
              goTo={props.to}
              url={props.url}
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)<{ color: string }>`
  background-color: ${({ color }) => color};
`;

const Image = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  margin-bottom: -6px;
  padding: 0;
  scroll-snap-align: center;
`;

const ImageMovil = styled.img`
  height: 42vh;
  width: 100%;
  scroll-snap-align: center;
`;
