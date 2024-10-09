import styled from "styled-components";

export const FooterBox = styled.footer`
  padding-top: 2vh;
  height: 15vh;
  background-color: neutral;
`;

export const FooterTypography = styled.h1<{
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  link?: boolean;
}>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => (props.color ? props.color : "#5c4835")};
`;
