import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { useBackButton } from "modules/common/hooks/useBackButton";
import { MenuItemArrow } from "modules/common/components/Menu/MenuItemArrow";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import { CONTACT_PAGE, SETTINGS_LANGUAGE_PAGE } from "routes/constants";
import { LANGUAGE_LIST } from "i18n/constants";
import _ from "lodash";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { MainLayout } from "modules/common/layout/MainLayout";
import { GetServerSidePropsContext } from "next";

export const Settings = () => {
  const { t, i18n } = useTranslation("common");

  useBackButton(true);
  const { push, locale } = useRouter();

  const lang = _.find(LANGUAGE_LIST, (item) => item.value === locale)?.name;
  return (
    <>
      <Stack>
        <MenuItemArrow
          value={lang}
          sx={{ p: "8px 16px" }}
          LinkComponent={Link}
          href={SETTINGS_LANGUAGE_PAGE}
          startIcon={
            <Avatar
              sx={{
                bgcolor: "#C457E0",
                width: 20,
                height: 20,
                fill: "white",
              }}
              variant="rounded"
            >
              <LanguageIcon sx={{ width: 16, height: 16, fill: "#fff" }} />
            </Avatar>
          }
        >
          {t("Language")}
        </MenuItemArrow>
        <MenuItemArrow
          value={t("Coming soon")}
          sx={{ p: "8px 16px" }}
          LinkComponent={Link}
          href={SETTINGS_LANGUAGE_PAGE}
          startIcon={
            <Avatar
              sx={{ bgcolor: "#FC2125", width: 20, height: 20 }}
              variant="rounded"
            >
              <NotificationsIcon sx={{ width: 16, height: 16, fill: "#fff" }} />
            </Avatar>
          }
        >
          {t("Notification")}
        </MenuItemArrow>
      </Stack>
      <Stack mt="24px">
        <MenuItemArrow
          LinkComponent={Link}
          href={CONTACT_PAGE}
          sx={{ p: "8px 16px" }}
          startIcon={
            <Avatar
              sx={{ bgcolor: "#7B7B81", width: 20, height: 20 }}
              variant="rounded"
            >
              <TextsmsRoundedIcon
                sx={{ width: 16, height: 16, fill: "#fff" }}
              />
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
