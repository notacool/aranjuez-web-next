import * as React from "react";
import Box from "@mui/material/Box";
import { Grid2 } from "@mui/material";
import { FooterBox, FooterTypography } from "./footerStyles";
import { ROUTES_INFO } from "@const/routes";
import ContactForm from "@components/Contact/ContactForm";
import FooterBottom from "./FooterBottom";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const [key, setKey] = React.useState(0);
  React.useEffect(() => {
    setKey(1);
  }, []);
  const redirectToRoute = (url: string) => {
    router.push(url);
  };

  return (
    <FooterBox id="footer">
      <Box className="sectionContainer" key={key}>
        <Grid2 container>
          <Grid2 size={{ xs: 4 }} sx={{ paddingLeft: "3em" }}>
            <FooterTypography
              fontWeight="700"
              fontSize="24px"
              lineHeight="29px"
            >
              Rutas
            </FooterTypography>
            {ROUTES_INFO.map((route, index) => (
              <FooterTypography
                onClick={() => redirectToRoute(`/routes/${route.url}`)}
                key={index}
                fontWeight="400"
                fontSize="16px"
                lineHeight="20px"
                link
              >
                {route.title}
              </FooterTypography>
            ))}
          </Grid2>

          <Grid2 size={{ xs: 8 }} sx={{ paddingLeft: "4em" }}>
            <FooterTypography
              fontWeight="700"
              fontSize="24px"
              lineHeight="29px"
            >
              Contacto
            </FooterTypography>
            <ContactForm />
          </Grid2>
        </Grid2>
      </Box>
      <FooterBottom />
    </FooterBox>
  );
}
