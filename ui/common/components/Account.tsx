import { Avatar, Box, Typography } from "@mui/material";
import _ from "lodash";
import React from "react";
import { TelegramWebApps } from "../../../global";
import { getColorFromText } from "../../../lib/utils.ts/getColorFromText";
import VerifiedIcon from "@mui/icons-material/Verified";

export interface AccountProps {
  user: TelegramWebApps.WebAppUser;
}

export const Account = ({ user }: AccountProps) => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        gap: "12px",
      }}
    >
      <Avatar
        src={user?.photo_url}
        sx={{ bgcolor: getColorFromText(user?.username || "unauthorized") }}
      >
        {_.first(user?.first_name)}
        {_.first(user?.last_name)}
      </Avatar>
      <Box>
        <Typography variant="body2">
          {user?.first_name} {user?.last_name}
          {user?.is_premium && (
            <VerifiedIcon
              sx={{ height: 16, width: 16, mb: "-3px", color: "#2893FF" }}
            />
          )}
        </Typography>
        <Typography variant="caption">@{user?.username}</Typography>
      </Box>
    </Box>
  );
};
