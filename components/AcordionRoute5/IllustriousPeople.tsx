import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ILLUSTRIOUS_PEOPLE } from "@const/illustriousPeople";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { DescriptionTypography } from "@components/RouteDetails/routeDetailsStyles";

interface IIllustriousPeopleProps {
  id: string;
}

export default function IllustriousPeople(props: IIllustriousPeopleProps) {
  const { id } = props;
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {ILLUSTRIOUS_PEOPLE.map(
        (artist, index) =>
          artist.id === id && (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  variant="subtitle1"
                  sx={{ width: "50%", flexShrink: 0, color: "#5c4835" }}
                >
                  {artist.name}
                </Typography>
                <Typography
                  sx={{ color: "text.secondary", fontStyle: "normal" }}
                >
                  {artist.ubication}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <DescriptionTypography
                  fontWeight="400"
                  fontSize="18px"
                  lineHeight="22px"
                >
                  {artist.description}
                </DescriptionTypography>
              </AccordionDetails>
              <AccordionDetails>
                <AuthorTextContainer>
                  <DescriptionTypography
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="22px"
                    fontStyle="italic"
                  >
                    {artist.authorText}
                  </DescriptionTypography>
                </AuthorTextContainer>
              </AccordionDetails>
            </Accordion>
          )
      )}
    </div>
  );
}

const AuthorTextContainer = styled.p`
  display: flex;
  padding-left: 10vw;
  padding-right: 10vw;
`;
