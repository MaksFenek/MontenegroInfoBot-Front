import { Avatar, Stack } from "@mui/material";
import React from "react";
import { MenuItemArrow } from "../components/Menu/MenuItemArrow";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useBackButton } from "../hooks/useBackButton";

export const Contacts = () => {
  useBackButton(true);
  return (
    <Stack>
      <MenuItemArrow
        onClick={() => Telegram.WebApp.openTelegramLink("https://t.me/m_fenek")}
        sx={{ p: "8px 16px" }}
        startIcon={
          <Avatar
            sx={{ bgcolor: "#30A2EB", width: 20, height: 20 }}
            variant="rounded"
          >
            <TelegramIcon sx={{ width: 16, height: 16 }} />
          </Avatar>
        }
      >
        Telegram
      </MenuItemArrow>
      <MenuItemArrow
        onClick={() =>
          Telegram.WebApp.openLink("https://www.linkedin.com/in/arthur-vorokov")
        }
        sx={{ p: "8px 16px" }}
        startIcon={
          <Avatar
            sx={{ bgcolor: "#104FB5", width: 20, height: 20 }}
            variant="rounded"
          >
            <LinkedInIcon sx={{ width: 16, height: 16 }} />
          </Avatar>
        }
      >
        LinkedIn
      </MenuItemArrow>
      <MenuItemArrow
        onClick={() => Telegram.WebApp.openLink("https://github.com/MaksFenek")}
        sx={{ p: "8px 16px" }}
        startIcon={
          <Avatar
            sx={{ bgcolor: "#121519", width: 20, height: 20 }}
            variant="rounded"
          >
            <GitHubIcon sx={{ width: 16, height: 16 }} />
          </Avatar>
        }
      >
        GitHub
      </MenuItemArrow>
    </Stack>
  );
};

export default Contacts;
