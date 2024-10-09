import React from "react";
import styled from "styled-components";
import { useScreenSize } from "@hooks/useScreenSize";

export interface ITitleProps {
  title: string;
  accentColor: string;
  fontSize: string;
  lineHeight: string;
}

export default function RouteTitle(props: ITitleProps) {
  const { isDesktop } = useScreenSize();
  return (
    <TitleContainer isDesktop={isDesktop}>
      <Title
        color={props.accentColor}
        fontSize={props.fontSize}
        lineHeight={props.lineHeight}
      >
        {props.title}
      </Title>
    </TitleContainer>
  );
}

const TitleContainer = styled.div<{ isDesktop: boolean }>`
  padding-left: ${(props) => (props.isDesktop ? "4em" : "10px")};
  padding-right: 3em;
`;

const Title = styled.h1<{
  color: string;
  fontSize: string;
  lineHeight: string;
}>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${({ color }) => color};
`;
