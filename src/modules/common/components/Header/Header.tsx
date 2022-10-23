import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";
import _ from "lodash";
import { getColorFromText } from "../../utils/getColorFromText";

export const Header = () => {
  const user = Telegram.WebApp.initDataUnsafe.user;

  return (
    <>
      <Box
        component="header"
        sx={{
          p: "6px 6px 4px 16px",
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
          </Typography>
          <Typography variant="caption">@{user?.username}</Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
