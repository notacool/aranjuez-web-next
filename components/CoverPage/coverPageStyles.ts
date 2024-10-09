import styled from "styled-components";

export const Title = styled.h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11vh;
  line-height: 156px;
  color: #5c4835;
  margin-left: 6vw;
  margin-top: 15vw;
`;

export const DescriptionText = styled.h1`
  font-family: Montserrat, sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #95785c;
  margin-left: 6vw;
  margin-right: 6vw;
`;

export const LinkContainer = styled.div<{ isDesktop?: boolean }>`
  padding: ${(props) => (props.isDesktop ? "1.5em" : "0.5em")};
  margin-top: ${(props) => (props.isDesktop ? "2em" : "0px")};
  margin-bottom: ${(props) => !props.isDesktop && "2em"};
  color: #95785c;
  border: 4px solid #95785c;
  border-radius: 0.5em;
  &:hover {
    cursor: pointer;
  }
  font-style: normal;
  text-align: center;
  cursor: pointer;
`;

export const TitleMobile = styled.h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 58px;
  color: #5c4835;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;
