import styled from "styled-components";

export const TitleTypography = styled.h1<{
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  fontStyle?: string;
}>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: #5c4835;
`;

export const DescriptionTypography = styled.h1<{
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

export const SectionTypography = styled.h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #5c4835;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const LinkContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
