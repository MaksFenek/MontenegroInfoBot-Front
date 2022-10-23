import { Box, Divider } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { EVENTS_ADD_PAGE } from "../../../routes/constants";
import { Input } from "../../common/components/Input";
import { MenuItemArrow } from "../../common/components/Menu/MenuItemArrow";
import { MenuItemCheckbox } from "../../common/components/Menu/MenuItemCheckbox";
import { MenuItemGroup } from "../../common/components/Menu/MenuItemGroup";
import { useBackButton } from "../../common/hooks/useBackButton";

export const AddEvent = () => {
  const { t } = useTranslation();

  useBackButton(true);
  return (
    <Box>
      <MenuItemGroup>
        <Input placeholder={t("Title")} />
        <Divider />
        <Input
          placeholder={t("Description")}
          multiline
          maxRows={10}
          sx={{
            ".MuiInputBase-inputMultiline": {
              paddingY: "4px",
            },
          }}
        />
      </MenuItemGroup>
      <MenuItemGroup title={t("Main information")}>
        <MenuItemArrow to={`${EVENTS_ADD_PAGE}/city`}>
          {t("City")}
        </MenuItemArrow>
        <Divider />
        <MenuItemArrow to={`${EVENTS_ADD_PAGE}/date`}>
          {t("Date")}
        </MenuItemArrow>
        <Divider />
        <MenuItemArrow to={`${EVENTS_ADD_PAGE}/address`}>
          {t("Address")}
        </MenuItemArrow>
      </MenuItemGroup>
      <MenuItemGroup
        title={t("Settings")}
        description={t(
          "There would be an opportunity to register on the event and you will see the registered people"
        )}
      >
        <MenuItemCheckbox>{t("With sign up")}</MenuItemCheckbox>
      </MenuItemGroup>
    </Box>
  );
};

export default AddEvent;
