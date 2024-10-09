import React from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useScreenSize } from "@hooks/useScreenSize";

export interface IButtonProps {
  accentColor?: string;
  goTo?: string;
  position: "left" | "right";
  fullWidth?: boolean;
  url: string;
}

export default function RouteButton(props: IButtonProps) {
  const router = useRouter();
  const { isDesktop } = useScreenSize();

  const handleButtonClick = () => {
    router.push(`/routes/${props.url}`);
  };

  return (
    <ButtonContainer isDesktop={isDesktop}>
      <Button
        fullWidth={props.fullWidth}
        onClick={handleButtonClick}
        variant="outlined"
        color={props.position === "left" ? "primary" : "secondary"}
      >
        Ver más
      </Button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div<{ isDesktop: boolean }>`
  margin-bottom: 2em;
  margin-right: ${(props) => (props.isDesktop ? "4em" : "10px")};
  margin-left: ${(props) => (props.isDesktop ? "4em" : "10px")};
`;
