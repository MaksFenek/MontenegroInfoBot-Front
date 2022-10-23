import React, { useEffect, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const MainLayout = () => {
  useLayoutEffect(() => {
    document.body.setAttribute("data-theme", Telegram.WebApp.colorScheme);
  }, []);

  useEffect(() => {
    Telegram.WebApp.ready();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
