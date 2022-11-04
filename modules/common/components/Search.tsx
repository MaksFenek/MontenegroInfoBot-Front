import { Input } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTranslation } from "next-i18next";

export const Search = () => {
  const { t } = useTranslation();
  return (
    <Input
      fullWidth
      startAdornment={
        <SearchIcon
          sx={{
            height: "16px",
            width: "16px",
            color: "var(--tg-theme-hint-color)",
            marginRight: "4px",
          }}
        />
      }
      endAdornment={
        <CancelIcon
          sx={{
            opacity: "0",
            height: "16px",
            width: "16px",
            color: "var(--tg-theme-hint-color)",
            transition: "0.2s opacity",
          }}
        />
      }
      sx={{
        display: "flex",
        justifyContent: "center",
        color: "var(--tg-theme-hint-color)",
        fontSize: "14px",
        p: "0px 8px",
        borderRadius: "8px",
        bgcolor: "var(--tg-input-bg-color)",
        alignItems: "center",
        "::after, ::before": {
          border: "none !important",
        },
        ":hover": {
          "::before": {
            border: "none !important",
          },
        },
        ".MuiInputBase-input": {
          transition: "0.2s ease padding",
          paddingLeft: "calc(50% - 46px)",
          ":not(:placeholder-shown), :focus": {
            paddingLeft: "0%",
          },
        },
        ".MuiInputBase-input:not(:placeholder-shown) + .MuiSvgIcon-root": {
          cursor: "pointer",
          opacity: "1",
        },
      }}
      placeholder={t("Search")}
    ></Input>
  );
};
