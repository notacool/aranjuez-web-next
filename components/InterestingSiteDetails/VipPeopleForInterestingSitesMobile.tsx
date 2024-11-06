import { SectionTypography } from "@components/RouteDetails/routeDetailsStyles";
import { ILLUSTRIOUS_PEOPLE } from "@const/illustriousPeople";
import { Grid2 } from "@mui/material";
import styled from "styled-components";

interface IVIpPeopleProps {
  name: string;
}

export default function VipPeopleForInterestingSitesMobile(
  props: IVIpPeopleProps
) {
  const { name } = props;
  return (
    <>
      <SectionTypography>Personajes ilustres</SectionTypography>
      {ILLUSTRIOUS_PEOPLE.map(
        (artist, index) =>
          artist.ubication === name && (
            <CardContainer key={index}>
              <Grid2 container spacing={4}>
                <Grid2 size={{ xs: 12 }}>
                  <TitleTypography>{artist.name}</TitleTypography>
                  <DescriptionTypography
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="22px"
                  >
                    {artist.description}
                  </DescriptionTypography>
                  <AuthorTextContainer>
                    <DescriptionTypography
                      fontWeight="400"
                      fontSize="14px"
                      lineHeight="18px"
                      fontStyle="italic"
                    >
                      {artist.authorText}
                    </DescriptionTypography>
                  </AuthorTextContainer>
                </Grid2>
              </Grid2>
            </CardContainer>
          )
      )}
    </>
  );
}

const CardContainer = styled.div`
  border: 1px solid #5c4835;
  border-radius: 4px;
  margin-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 2em;
`;

const TitleTypography = styled.h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #5c4835;
`;

const AuthorTextContainer = styled.p`
  display: flex;
  padding-left: 2em;
  padding-right: 2em;
`;

const DescriptionTypography = styled.h1<{
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  fontStyle?: string;
}>`
  font-family: Montserrat, sans-serif;
  font-style: ${(props) => props.fontStyle};
  text-align: justify;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: #5c4835;
`;
