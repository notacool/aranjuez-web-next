import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useScreenSize } from "@hooks/useScreenSize";
import { useValidator } from "@hooks/useValidators";
import { mailValidator, notEmptyValidator } from "validators";
import { useInputState } from "@mantine/hooks";

export default function ContactForm() {
  const { isDesktop } = useScreenSize();
  const [subject, setSubject] = useInputState("");
  const [name, setName] = useInputState("");
  const [message, setMessage] = useInputState("");
  const [email, setEmail] = useInputState("");
  const [messageSendSuccessfully, setMessageSendSuccessfully] = useState(false);

  const [nameDirty, nameError, nameMessage, nameValidate] = useValidator(name, [
    notEmptyValidator,
  ]);
  const [subjectDirty, subjectError, subjectMessage, subjectValidate] =
    useValidator(subject, [notEmptyValidator]);

  const [messageDirty, messageError, messageMessage, messageValidate] =
    useValidator(message, [notEmptyValidator]);

  const [emailDirty, emailError, emailMessage, emailValidate] = useValidator(
    email,
    [mailValidator]
  );

  const sendNewMessage = () => {
    setEmail("");
    setName("");
    setMessage("");
    setSubject("");
    setMessageSendSuccessfully(false);
  };

  const sendMessage = async (): Promise<void> => {
    const nameValid = nameValidate();
    const emailValid = emailValidate();
    const messageValid = messageValidate();
    const subjectValid = subjectValidate();
    if (nameValid && emailValid && subjectValid && messageValid) {
      try {
        const res = await fetch("https://mail-relay.notacool.com/api/message", {
          method: "POST",
          headers: {
            "X-API-KEY":
              "skzMhwPjraGYBw9RBRGFUg4mSc5Ht9WvoQdEYFBDzvZKA2rukeZ9CufTRYjGKVKQ",
          },
          body: JSON.stringify({
            from: email,
            to: ["infoturismo@aranjuez.es"],
            subject: subject,
            message: message,
            name: name,
          }),
        });
        if (res.ok) {
          setMessageSendSuccessfully(true);
        }
        if (!res.ok) {
          throw new Error(res.statusText);
        }
      } catch (e) {
        throw e;
      }
    }
  };

  const buttonDisabled =
    (nameDirty && nameError) ||
    (messageDirty && messageError) ||
    (subjectDirty && subjectError) ||
    (emailDirty && emailError);

  return (
    <Grid container spacing={2} sx={{ paddingRight: isDesktop ? "3em" : 0 }}>
      <Grid item xs={isDesktop ? 6 : 12}>
        <TextField
          value={name}
          sx={{ background: "#fff" }}
          id="outlined-basic"
          label="Nombre"
          fullWidth
          variant="outlined"
          color="primary"
          onChange={(e) => setName(e.target.value)}
          error={nameDirty && nameError}
          helperText={
            nameDirty && nameError ? "El campo no puede estar vacío" : ""
          }
        />
      </Grid>

      <Grid item xs={isDesktop ? 6 : 12}>
        <TextField
          value={email}
          sx={{ background: "#fff" }}
          id="outlined-basic"
          fullWidth
          label="Email"
          variant="outlined"
          color="primary"
          onChange={(e) => setEmail(e.target.value)}
          error={emailDirty && emailError}
          helperText={emailDirty && emailError ? "El email es incorrecto" : ""}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={subject}
          sx={{ background: "#fff" }}
          id="outlined-basic"
          label="Asunto"
          fullWidth
          variant="outlined"
          color="primary"
          onChange={(e) => setSubject(e.target.value)}
          error={subjectDirty && subjectError}
          helperText={
            subjectDirty && subjectError ? "El campo no puede estar vacío" : ""
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={message}
          sx={{ background: "#fff" }}
          fullWidth
          id="outlined-basic"
          label="Mensaje"
          multiline
          variant="outlined"
          color="primary"
          onChange={(e) => setMessage(e.target.value)}
          error={messageDirty && messageError}
          helperText={
            messageDirty && messageError ? "El campo no puede estar vacío" : ""
          }
        />
      </Grid>
      <Grid
        container
        justifyContent="flex-end"
        marginTop="20px"
        marginBottom="20px"
      >
        {messageSendSuccessfully ? (
          <>
            <h4>Mensaje enviado con éxito</h4>
            <Button
              sx={{ marginLeft: 5 }}
              variant="outlined"
              onClick={sendNewMessage}
            >
              Nuevo mensaje
            </Button>
          </>
        ) : (
          <Button
            variant="outlined"
            disabled={buttonDisabled}
            onClick={sendMessage}
          >
            {!buttonDisabled && <TelegramIcon color="primary" />} Enviar
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
