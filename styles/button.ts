import { ComponentsProps, ComponentsVariants, ComponentsOverrides } from "@mui/material"

interface Button {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    title: true;
  }
  interface ButtonPropsSizeOverrides {
    megagrande: true;
  }
}

export const Button: Button = {
  variants: [
    {
      props: { variant: 'outlined' },
      style: {
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'Montserrat,sans-serif',
        borderWidth: '2px',
        textTransform: 'none'
      },
    },
  ]
}
