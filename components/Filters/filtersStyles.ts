import styled from "styled-components";

export const ListItemText = styled.h1<{
  color: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
}>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

export const ListItemIcon = styled.div`
  margin-right: 5px;
`;

export const ListItemsContainer = styled.div`
  margin-left: 1em;
  margin-top: -10px;
`;

export const ListContainer = styled.div`
  margin-left: 20px;
`;
