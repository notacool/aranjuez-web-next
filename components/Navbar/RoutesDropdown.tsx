import React, { useState, MouseEvent } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material";
import { Link } from "react-scroll";
import { LinkContainer, NavBarTypography } from "./navBarStyles";
import { useRouter } from "next/router";
import { ROUTES_INFO } from "@const/routes";

interface Props {
  landing?: boolean;
}

export default function RoutesDropdown({ landing }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const redirectToRoute = (param: string) => {
    router.push(`/routes${param}`);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <div>
      <LinkContainer>
        <NavBarTypography onClick={handleClick}>Rutas</NavBarTypography>
      </LinkContainer>
      {landing ? (
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          color={theme.palette.secondary.main}
        >
          {ROUTES_INFO.map((route, index) => (
            <MenuItem key={index}>
              <Link to={route.to} smooth onClick={handleClose}>
                <NavBarTypography>{route.title}</NavBarTypography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      ) : (
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          color={theme.palette.secondary.main}
        >
          {ROUTES_INFO.map((route, index) => (
            <MenuItem key={index}>
              <NavBarTypography
                onClick={() => redirectToRoute(`/${route.url}`)}
              >
                {route.title}
              </NavBarTypography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
}
