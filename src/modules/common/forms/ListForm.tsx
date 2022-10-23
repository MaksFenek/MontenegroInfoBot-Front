import { Divider } from "@mui/material";
import _ from "lodash";
import React from "react";
import { MenuItemCheckmark } from "../components/Menu/MenuItemCheckmark";
import { MenuItemGroup } from "../components/Menu/MenuItemGroup";

interface ListFormProps {
  list: string[];
  checkList: string[];
  onChange?: (value: string) => void;
}

export const ListForm = ({ list, checkList, onChange }: ListFormProps) => {
  return (
    <MenuItemGroup description="To uncheck an option - click on it one more time">
      {_.map(list, (item, index) => (
        <React.Fragment key={item}>
          {index !== 0 && <Divider />}
          <MenuItemCheckmark
            checked={_.includes(checkList, item)}
            onClick={() => onChange && onChange(item)}
          >
            {item}
          </MenuItemCheckmark>
        </React.Fragment>
      ))}
    </MenuItemGroup>
  );
};
