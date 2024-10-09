import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Filters from "./Filters";
import FilterListIcon from "@mui/icons-material/FilterList";
import { InterestingSites } from "types";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface IFilterProps {
  sites: InterestingSites[];
  setSites: (param: InterestingSites[]) => void;
  setSearchResult: (param: InterestingSites[]) => void;
  checked: any;
  setChecked: any;
  handleDrawerClose?: () => void;
}
export default function FiltersMobile(props: IFilterProps) {
  const {
    sites,
    setSites,
    setSearchResult
  } = props;
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: "none" }) }}
        style={{
          border: "1px solid #d5d5d5",
          borderRadius: "5px",
          padding: "5px",
          backgroundColor: "#fff",
          color: "#5c4835",
        }}
      >
        <FilterListIcon />
      </IconButton>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        BackdropProps={{ invisible: true }}
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon fontSize="large" color="primary" />
          </IconButton>
        </DrawerHeader>
        <Filters
          sites={sites}
          setSites={setSites}
          setSearchResult={setSearchResult}
          handleDrawerClose={handleDrawerClose}
        />
      </Drawer>
    </>
  );
}
