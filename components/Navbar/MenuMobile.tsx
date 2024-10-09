import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useTheme } from "@mui/material";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import {
  ListContainer,
  ListItemText,
  ListItemsContainer,
} from "./navBarStyles";
import { ROUTES_INFO } from "@const/routes";

interface MenuProps {
  handleDrawerClose?: () => void;
  landing: boolean;
}

export default function MenuMobile({ handleDrawerClose, landing }: MenuProps) {
  const [checked, setChecked] = useState([""]);
  const theme = useTheme();
  const router = useRouter();
  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const goToInterestPoint = () => {
    handleDrawerClose && handleDrawerClose();
    router.push("/interesting-sites");
  };
  const redirectToRoute = (param: string) => {
    !landing && router.push(`/routes${param}`);
  };
  return (
    <List
      sx={{
        width: "100%",
        height: "600px",
        bgcolor: "background.paper",
        borderRadius: "8px",
      }}
    >
      <ListContainer>
        <ListItemButton>
          <ListItemText
            fontWeight="700"
            fontSize="20px"
            lineHeight="24px"
            color={theme.palette.primary.main}
          >
            Rutas
          </ListItemText>
        </ListItemButton>
        {ROUTES_INFO.map((route, index) => {
          const labelId = `checkbox-list-label-${route.title}`;
          return (
            <ListItemsContainer key={index}>
              <ListItem disablePadding>
                <Link to={route.to} smooth onClick={handleDrawerClose}>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(route.title)}
                    dense
                  >
                    <ListItemText
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="19px"
                      color={theme.palette.primary.main}
                      onClick={() => redirectToRoute(`/${route.url}`)}
                    >
                      {route.title}
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            </ListItemsContainer>
          );
        })}
        <ListItemButton onClick={() => goToInterestPoint()}>
          <ListItemText
            fontWeight="700"
            fontSize="20px"
            lineHeight="24px"
            color={theme.palette.primary.main}
          >
            Puntos de interés
          </ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            fontWeight="700"
            fontSize="20px"
            lineHeight="24px"
            color={theme.palette.primary.main}
          >
            <Link to="footer" smooth onClick={() => handleDrawerClose && handleDrawerClose()}>
              Contacto
            </Link>
          </ListItemText>
        </ListItemButton>
      </ListContainer>
    </List>
  );
}
