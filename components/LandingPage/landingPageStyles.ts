
import styled from "styled-components";

export const NavBarTypography = styled.h1<{
    flexGrow?: number;
    marginRight?: string;
  }>`
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #95785c;
    margin-right: 2em;
    flex-grow: ${(props) => props.flexGrow};
    margin-right: ${(props) => props.marginRight};
  `;
