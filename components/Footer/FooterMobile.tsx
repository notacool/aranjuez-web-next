import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { FooterBox, FooterTypography } from "./footerStyles";
import ContactForm from "@components/Contact/ContactForm";
import FooterBottom from "./FooterBottom";
import { useRouter } from "next/router";

export default function FooterMobile() {
  const router = useRouter();
  const [key, setKey] = React.useState(0);
  React.useEffect(() => {
    setKey(1);
  }, []);

  return (
    <FooterBox id="footer">
      <Box className="sectionContainer" key={key}>
        <Container>
          <Grid xs={12}>
            <FooterTypography
              fontWeight="700"
              fontSize="19px"
              lineHeight="29px"
            >
              Contacto
            </FooterTypography>
            <ContactForm />
          </Grid>
        </Container>
      </Box>
      <FooterBottom />
    </FooterBox>
  );
}
