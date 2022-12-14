import { Box } from "@mui/material";
import React, { useCallback, useEffect, useRef } from "react";
import { Input } from "../components/Input";
import { InputDate } from "../components/InputFormat";
import { MenuItem } from "../components/MenuItem/MenuItem";
import { MenuItemGroup } from "../components/MenuItem/MenuItemGroup";
import { useBackButton } from "../../../lib/hooks/useBackButton";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { useMainButton } from "../../../lib/hooks/useMainButton";
import { DateType } from "../../../store/filter/filter.types";
import {
  checkFromToValid,
  checkValidDate,
} from "../../../lib/validation/utils";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export interface FromToFormProps {
  date?: DateType;
  onChange: (value?: DateType | undefined) => void;
}

export const FromToForm = ({ date, onChange }: FromToFormProps) => {
  const { t } = useTranslation();

  useBackButton(true);
  const { back } = useRouter();

  const ref = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    getValues,
  } = useForm<DateType>({
    defaultValues: date,
    mode: "onChange",
    shouldUnregister: true,
  });

  const onSubmit = useCallback((data: DateType) => {
    onChange(data);
    back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClean = useCallback(() => {
    reset({
      from: "",
      to: "",
    });
    onChange({} as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { disable, enable } = useMainButton(t("Apply"), handleSubmit(onSubmit));

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
      <Box
        ref={ref}
        display="flex"
        justifyContent="center"
        alignItems="start"
        component="form"
        gap="16px"
      >
        <MenuItemGroup
          title={t("From")}
          error={t(errors.from?.message as string)}
        >
          <Input
            {...register("from", {
              validate: {
                checkValidDate,
                checkFromToValid: (val) =>
                  checkFromToValid(val, getValues("to"), "from"),
              },
            })}
            value={watch("from")}
            sx={{ bgcolor: "var(--tg-theme-bg-color)", textAlign: "center" }}
            inputComponent={InputDate}
            fullWidth={false}
          />
        </MenuItemGroup>
        <MenuItemGroup title={t("To")} error={t(errors.to?.message as string)}>
          <Input
            {...register("to", {
              validate: {
                checkValidDate,
                checkFromToValid: (val) =>
                  checkFromToValid(val, getValues("from"), "to"),
              },
            })}
            value={watch("to")}
            sx={{ bgcolor: "var(--tg-theme-bg-color)" }}
            inputComponent={InputDate}
            fullWidth={false}
          />
        </MenuItemGroup>
      </Box>
      <MenuItemGroup sx={{ mt: "32px" }}>
        <MenuItem
          sx={{ ".MuiTypography-root": { color: "var(--red)" } }}
          onClick={onClean}
        >
          {t("Clean")}
        </MenuItem>
      </MenuItemGroup>
    </Box>
  );
};
