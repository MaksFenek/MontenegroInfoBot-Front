import { Container } from "@mui/system";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useLayoutEffect } from "react";
import { Suspense as SuspenseElement } from "../components/Suspense";
import { useTelegram } from "../hooks/useTelegram";
import { pSBC } from "../utils/pSBC";

export const MainLayout = ({ children }: React.PropsWithChildren<unknown>) => {
  const { pathname } = useRouter();
  const tg = useTelegram();

  useEffect(() => {
    tg?.WebApp.ready();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("page", pathname);
  }, [pathname]);

  useEffect(() => {
    const user = tg?.WebApp.themeParams;
    const dark = tg?.WebApp.colorScheme == "dark";
    const root = document.body;
    // CSS Variables
    if (user && dark) {
      root.style.setProperty(
        "--tg-menu-item-hover-bg-color",
        pSBC(dark ? 0.005 : -0.05, user.bg_color)
      );
      root.style.setProperty(
        "--tg-divider-border-color",
        pSBC(dark ? 0.008 : -0.15, user.bg_color)
      );
      root.style.setProperty(
        "--tg-arrow-color",
        pSBC(dark ? -0.6 : 0.5, user.hint_color)
      );
      root.style.setProperty(
        "--tg-input-bg-color",
        pSBC(dark ? 0.009 : -0.08, user.bg_color)
      );
      root.style.setProperty(
        "--tg-card-bg-color",
        pSBC(dark ? 0.009 : -0.08, user.bg_color)
      );
    }
  }, []);

  return (
    <>
      <Container
        sx={{
          position: "relative",
          minHeight: "calc(100vh - 55px)",
          paddingY: "10px",
        }}
      >
        <Suspense fallback={<SuspenseElement />}>{children}</Suspense>
      </Container>
    </>
  );
};
