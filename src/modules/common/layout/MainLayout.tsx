import { Container } from "@mui/system";
import Cookies from "js-cookie";
import React, { Suspense, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense as SuspenseElement } from "../components/Suspense";

export const MainLayout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.setAttribute("page", pathname);
  }, [pathname]);

  useLayoutEffect(() => {}, []);

  return (
    <>
      <Container
        sx={{
          position: "relative",
          minHeight: "calc(100vh - 55px)",
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
