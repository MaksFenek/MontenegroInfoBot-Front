import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import _ from "lodash";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { Input } from "../components/Input";
import { InputDate, InputTime } from "../components/InputFormat";
import { MenuItem } from "../components/MenuItem/MenuItem";
import { MenuItemGroup } from "../components/MenuItem/MenuItemGroup";
import { useBackButton } from "../../../lib/hooks/useBackButton";
import { useMainButton } from "../../../lib/hooks/useMainButton";
import {
  checkDateIsAfterNow,
  checkDateIsBeforeOneYear,
  checkValidDate,
  checkValidTime,
} from "../../../lib/validation/utils";

import customParseFormat from "dayjs/plugin/customParseFormat";
import { useRouter } from "next/router";
dayjs.extend(customParseFormat);

interface DateFormProps {
  onChange: (value: string) => void;
  value: string;
}

interface DateFormFormat {
  date: string;
  time: string;
}

export const DateForm = ({ onChange, value }: DateFormProps) => {
  const defaultDate = value ? dayjs(Number(value)) : undefined;
  const { t } = useTranslation();
  const { back } = useRouter();

  useBackButton(true);
  useMainButton(t("Apply"));

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<DateFormFormat>({
    defaultValues: {
      date: defaultDate?.format("DDMMYYYY"),
      time: defaultDate?.format("HHmm"),
    },
    mode: "onChange",
    shouldUnregister: true,
  });

  const onSubmit = useCallback(({ date, time }: DateFormFormat) => {
    const result = dayjs(date + time, "DDMMYYYYHHmm").valueOf();
    onChange(String(result));
    back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClean = useCallback(() => {
    setValue("date", "");
    setValue("time", "");
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
      <Box display="flex" justifyContent="center" alignItems="start">
        <MenuItemGroup
          error={errors.date?.message && t(errors.date?.message)}
          sx={{ mb: 0 }}
        >
          <Input
            value={watch("date")}
            {...register("date", {
              required: t("Field is required"),
              validate: {
                checkValidDate,
                checkDateIsAfterNow,
                checkDateIsBeforeOneYear,
              },
            })}
            name="date"
            sx={{ bgcolor: "var(--tg-theme-bg-color)", textAlign: "center" }}
            inputComponent={InputDate}
            fullWidth={false}
          />
        </MenuItemGroup>
        <Typography variant="body1" p="0 16px" pt="10px">
          {t("in")}
        </Typography>
        <MenuItemGroup
          error={errors.time?.message && t(errors.time?.message)}
          sx={{ mb: 0 }}
        >
          <Input
            value={watch("time")}
            {...register("time", {
              required: t("Field is required"),
              validate: {
                checkValidTime,
              },
            })}
            name="time"
            sx={{ bgcolor: "var(--tg-theme-bg-color)" }}
            inputComponent={InputTime}
            fullWidth={false}
          />
        </MenuItemGroup>
      </Box>
      <MenuItemGroup>
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
