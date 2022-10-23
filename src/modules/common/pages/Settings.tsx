import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { useBackButton } from "../hooks/useBackButton";
import { MenuItemArrow } from "../components/Menu/MenuItemArrow";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import { useNavigate } from "react-router-dom";
import {
  CONTACT_PAGE,
  SETTINGS_LANGUAGE_PAGE,
  SETTINGS_NOTIFICATION_PAGE,
} from "../../../routes/constants";

export const Settings = () => {
  useBackButton(true);
  const navigate = useNavigate();
  return (
    <>
      <Stack>
        <MenuItemArrow
          onClick={() => navigate(SETTINGS_LANGUAGE_PAGE)}
          sx={{ p: "8px 16px" }}
          startIcon={
            <Avatar
              sx={{ bgcolor: "#C457E0", width: 20, height: 20 }}
              variant="rounded"
            >
              <LanguageIcon sx={{ width: 16, height: 16 }} />
            </Avatar>
          }
        >
          Language
        </MenuItemArrow>
        <MenuItemArrow
          onClick={() => navigate(SETTINGS_NOTIFICATION_PAGE)}
          sx={{ p: "8px 16px" }}
          startIcon={
            <Avatar
              sx={{ bgcolor: "#FC2125", width: 20, height: 20 }}
              variant="rounded"
            >
              <NotificationsIcon sx={{ width: 16, height: 16 }} />
            </Avatar>
          }
        >
          Notification
        </MenuItemArrow>
      </Stack>
      <Stack mt="24px">
        <MenuItemArrow
          onClick={() => navigate(CONTACT_PAGE)}
          sx={{ p: "8px 16px" }}
          startIcon={
            <Avatar
              sx={{ bgcolor: "#7B7B81", width: 20, height: 20 }}
              variant="rounded"
            >
              <TextsmsRoundedIcon sx={{ width: 16, height: 16 }} />
            </Avatar>
          }
        >
          Contact with us
        </MenuItemArrow>
      </Stack>
      <Typography component="p" textAlign="center" variant="caption" mt="24px">
        v0.1.91022b
      </Typography>
    </>
  );
};

export default Settings;
