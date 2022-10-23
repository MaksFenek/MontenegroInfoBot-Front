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
} from "../../../routes/constants";
import { useTranslation } from "react-i18next";
import { LANGUAGE_LIST } from "../../../i18n/constants";
import _ from "lodash";

export const Settings = () => {
  const { t, i18n } = useTranslation();

  useBackButton(true);
  const navigate = useNavigate();

  const lang = _.find(
    LANGUAGE_LIST,
    (item) => item.value === i18n.language
  )?.name;
  return (
    <>
      <Stack>
        <MenuItemArrow
          value={lang}
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
          {t("Language")}
        </MenuItemArrow>
        <MenuItemArrow
          value={t("Coming soon")}
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
          {t("Notification")}
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
          {t("Contacts")}
        </MenuItemArrow>
      </Stack>
      <Typography component="p" textAlign="center" variant="caption" mt="24px">
        v0.1.91022b
      </Typography>
    </>
  );
};

export default Settings;
