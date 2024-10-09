import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { useScreenSize } from "@hooks/useScreenSize";
import { useTheme } from "@mui/material";
import {
  ListItemText,
  ListItemIcon,
  ListContainer,
  ListItemsContainer,
} from "./filtersStyles";
import { ROUTES_INFO } from "@const/routes";
import { INTERESTING_SITES } from "@const/interestingSites";
import { InterestingSites } from "types";

interface IFilterProps {
  sites: InterestingSites[];
  setSites: (param: InterestingSites[]) => void;
  setSearchResult: (param: InterestingSites[]) => void;
  handleDrawerClose?: () => void;
}

export default function Filters(props: IFilterProps) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(1);
  }, []);

  const [checked, setChecked] = useState([""]);
  const { isDesktop } = useScreenSize();
  const theme = useTheme();

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value.title);

    const newChecked = [...checked];
    checked.map(
      (item: any) => item !== value.title && newChecked.splice(item, 1)
    );

    if (currentIndex === -1) {
      newChecked.push(value.title);

      const sitesToShow = INTERESTING_SITES.filter((site) =>
        site.routeId.includes(value.routeId)
      );
      props.setSites(sitesToShow);
      props.setSearchResult([]);
      !isDesktop && props.handleDrawerClose && props.handleDrawerClose();
    } else {
      newChecked.splice(currentIndex, 1);
      props.setSites(INTERESTING_SITES);
    }
    setChecked(newChecked);
  };

  return (
    <List
      key={key}
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: "8px",
        height: "fit-content",
        border: isDesktop ? `2px solid ${theme.palette.secondary.main}` : "",
      }}
    >
      <ListContainer>
        <ListItemButton>
          {isDesktop && (
            <ListItemIcon>
              <AppsRoundedIcon color="primary" />
            </ListItemIcon>
          )}
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
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(route)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(route.title) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="19px"
                    color={theme.palette.primary.main}
                  >
                    {route.title}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </ListItemsContainer>
          );
        })}
      </ListContainer>
    </List>
  );
}
