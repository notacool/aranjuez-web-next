import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { SectionTypography } from "@components/RouteDetails/routeDetailsStyles";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { isAndroid, isIOS } from "react-device-detect";
import {
  DEFAULT_URL,
  ANDROID_APP,
  IOS_APP,
  IOS_APP_STORE,
  ANDROID_APP_STORE,
} from "@const/constants";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SelectAppModal() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateShowModal = () => {
    setShowModal(!showModal);
  };

  const checkApp = () => {
    const checkFirstTime = localStorage.getItem("askApp");
    if (!checkFirstTime) {
      handleOpen();
    }
  };

  // useEffect(() => {
  //   checkApp();
  // }, []);

  const closeModal = () => {
    if (showModal) {
      localStorage.setItem("askApp", "true");
    }
    handleClose();
  };

  const redirectToApp = () => {
    if (showModal) {
      localStorage.setItem("askApp", "true");
    }
    if (isAndroid) {
      window.location.replace(ANDROID_APP);
      setTimeout(() => {
        window.location.replace(ANDROID_APP_STORE);
      }, 5000);
    } else if (isIOS) {
      window.location.replace(IOS_APP);
      setTimeout(() => {
        window.location.replace(IOS_APP_STORE);
      }, 5000);
    } else {
      window.location.replace(DEFAULT_URL);
    }
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <SectionTypography>¿Abrir en la APP?</SectionTypography>
        <ButtonContainer>
          <Button
            variant="outlined"
            onClick={() => {
              closeModal();
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              redirectToApp();
            }}
          >
            Abrir
          </Button>
        </ButtonContainer>
        <FormGroup sx={{ marginTop: 3 }}>
          <FormControlLabel
            control={<Checkbox id="dont-ask-again" name="dontAskAgain" />}
            onChange={updateShowModal}
            label="No volver a preguntar"
          />
        </FormGroup>
      </Box>
    </Modal>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
`;
