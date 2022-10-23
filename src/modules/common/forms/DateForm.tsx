import { Box, Typography } from "@mui/material";
import React from "react";
import { Input } from "../components/Input";
import { InputDate, InputTime } from "../components/InputFormat";
import { MenuItem } from "../components/Menu/MenuItem";
import { MenuItemGroup } from "../components/Menu/MenuItemGroup";
import { useBackButton } from "../hooks/useBackButton";
import { useMainButton } from "../hooks/useMainButton";

export const DateForm = () => {
  useBackButton(true);
  useMainButton("Apply");

  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Input
          name="date"
          sx={{ bgcolor: "var(--tg-theme-bg-color)", textAlign: "center" }}
          inputComponent={InputDate}
          fullWidth={false}
        />
        <Typography variant="body1" p="0 16px">
          in
        </Typography>
        <Input
          name="time"
          sx={{ bgcolor: "var(--tg-theme-bg-color)" }}
          inputComponent={InputTime}
          fullWidth={false}
        />
      </Box>
      <MenuItemGroup sx={{ mt: "32px" }}>
        <MenuItem sx={{ ".MuiTypography-root": { color: "var(--red)" } }}>
          Delete
        </MenuItem>
      </MenuItemGroup>
    </Box>
  );
};
