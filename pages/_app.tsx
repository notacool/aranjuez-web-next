import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "../styles/theme";
import styled from "@emotion/styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <ComponentContainer>
        <Component {...pageProps} />
      </ComponentContainer>
    </ThemeProvider>
  );
}

export default MyApp;

const ComponentContainer = styled.div`
  // position: relative;
  min-height: 94vh;
`;
