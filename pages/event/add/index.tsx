import { Box } from "@mui/material";
import _ from "lodash";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { MenuItemCheckbox } from "ui/common/components/MenuItem/MenuItemCheckbox";
import { MenuItemGroup } from "ui/common/components/MenuItem/MenuItemGroup";
import { AddEventDataType } from "ui/common/types";
import { useBackButton } from "lib/hooks/useBackButton";
import { useMainButton } from "lib/hooks/useMainButton";
import { MainInformation } from "ui/events/forms/MainInformation";
import { TitleAndDescription } from "ui/events/forms/TitleAndDescription";

export const AddEvent = () => {
  const { t } = useTranslation();

  const form = useFormContext<AddEventDataType>();

  const {
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = (data: AddEventDataType) => console.log(data);

  useBackButton(true);
  const { disable, enable } = useMainButton(
    t("Add Event"),
    handleSubmit(onSubmit)
  );

  useEffect(() => {
    if (!_.isEmpty(errors)) {
      disable();
    } else {
      enable();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_.isEmpty(errors)]);

  return (
    <Box>
      <TitleAndDescription />
      <MainInformation />
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
