import { Container } from "@mui/system";
import React, { Suspense, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense as SuspenseElement } from "../../components/Suspense/Suspense";

export const MainLayout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.setAttribute("page", pathname);
  }, [pathname]);

  return (
    <>
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
