import { Container } from "@mui/system";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Suspense as SuspenseElement } from "../../components/Suspense/Suspense";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          position: "relative",
          height: "calc(100vh - 55px)",
          paddingY: "10px",
        }}
      >
        <Suspense fallback={<SuspenseElement />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
