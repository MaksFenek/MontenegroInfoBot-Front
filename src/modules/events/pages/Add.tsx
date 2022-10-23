import { Box, Divider } from "@mui/material";
import React from "react";
import { Input } from "../../common/components/Input";
import { MenuItem } from "../../common/components/Menu/MenuItem";
import { MenuItemCheckbox } from "../../common/components/Menu/MenuItemCheckbox";
import { MenuItemGroup } from "../../common/components/Menu/MenuItemGroup";
import { useBackButton } from "../../common/hooks/useBackButton";

export const AddEvent = () => {
  useBackButton(true);
  return (
    <Box>
      <MenuItemGroup>
        <Input placeholder="Title" />
        <Divider />
        <Input
          placeholder="Description"
          multiline
          maxRows={10}
          sx={{
            ".MuiInputBase-inputMultiline": {
              paddingY: "4px",
            },
          }}
        />
      </MenuItemGroup>
      <MenuItemGroup title="Main Information">
        <MenuItem>City</MenuItem>
        <Divider />
        <MenuItem>Date</MenuItem>
        <Divider />
        <MenuItem>Categories</MenuItem>
        <Divider />
        <MenuItem>Address</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup
        title="Settings"
        description="There would be an opportunity to register on the event and you will see the registered people"
      >
        <MenuItemCheckbox>With sign up</MenuItemCheckbox>
      </MenuItemGroup>
    </Box>
  );
};

export default AddEvent;
