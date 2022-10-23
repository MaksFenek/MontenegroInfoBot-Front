import { Container } from "@mui/material";
import React from "react";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <Container className={styles.container}>
      {Telegram.WebApp.initDataUnsafe.user?.first_name}
    </Container>
  );
};
