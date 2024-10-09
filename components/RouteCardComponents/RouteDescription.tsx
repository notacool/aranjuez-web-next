import React from "react";
import styled from "styled-components";
import { useScreenSize } from "@hooks/useScreenSize";

export interface IDescriptionProps {
  introduction?: Array<string>;
  accentColor: string;
  fontSize: string;
  lineHeight: string;
  marginBottom?: string;
}

export default function RouteDescription(props: IDescriptionProps) {
  const { isDesktop } = useScreenSize();
  return (
    <DescriptionContainer isDesktop={isDesktop}>
      <Description
        color={props.accentColor}
        fontSize={props.fontSize}
        lineHeight={props.lineHeight}
        marginBottom={props.marginBottom}
      >
        <DescriptionText>{props.introduction}</DescriptionText>
      </Description>
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.div<{ isDesktop: boolean }>`
  padding-left: ${(props) => (props.isDesktop ? "4em" : "10px")};
  padding-right: ${(props) => (props.isDesktop ? "4em" : "10px")};
`;
const Description = styled.h1<{
  color: string;
  fontSize: string;
  lineHeight: string;
  marginBottom?: string;
}>`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${({ color }) => color};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const DescriptionText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
