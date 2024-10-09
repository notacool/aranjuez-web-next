import {
  ComponentsProps,
  ComponentsVariants,
  ComponentsOverrides,
} from "@mui/material";

interface Typography {
  defaultProps?: ComponentsProps["MuiTypography"];
  styleOverrides?: ComponentsOverrides["MuiTypography"];
  variants?: ComponentsVariants["MuiTypography"];
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    coverTitle: true;
    coverDescription:true;
    navBarLinks:true;
    routeTitle:true;
    routeDescription:true;
    filterTitle:true;
    filterItem:true;
    interestPointTitle:true;
    interestPointDescription:true;
  }
}

export const Typography: Typography = {
  variants: [
    {
      props: { variant: "h1" },
      style: {
        fontSize: "4.5rem",
        fontWeight: 700,
        fontFamily: "Montserrat, sans-serif",
      },
    },
    {
      props: { variant: "body1" },
      style: {
        fontSize: "1.125rem",
        fontWeight: 400,
        fontFamily: "Montserrat, sans-serif",
        fontStyle: "italic",
      },
    },
    {
      props: { variant: "coverTitle" },
      style: {
        fontFamily: "Montserrat, sans-serif",
        fontStyle:"normal",
        fontWeight: 700,
        fontSize: "120px",
        lineHeight:"156px",
        color:"primary"
      },
    },
    {
      props: { variant: "coverDescription" },
      style: {
        fontFamily: "Montserrat, sans-serif",
        fontStyle:"italic",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight:"22px",
        color:""
      },
    },
  ],
};
