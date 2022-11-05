import { Divider } from "@mui/material";
import _ from "lodash";
import React from "react";
import { useTranslation } from "next-i18next";
import { MenuItemCheckmark } from "../components/MenuItem/MenuItemCheckmark";
import { MenuItemGroup } from "../components/MenuItem/MenuItemGroup";

interface ListFormProps {
  list: string[];
  checkList: string[];
  onChange?: (value: string) => void;
  description?: string;
}

export const ListForm = ({
  list,
  checkList,
  onChange,
  description = "To uncheck an option - click on it one more time",
}: ListFormProps) => {
  const { t } = useTranslation();

  return (
    <MenuItemGroup description={t(description)}>
      {_.map(list, (item, index) => (
        <React.Fragment key={item}>
          {index !== 0 && <Divider />}
          <MenuItemCheckmark
            checked={_.includes(checkList, item)}
            onClick={() => onChange && onChange(item)}
          >
            {t(item)}
          </MenuItemCheckmark>
        </React.Fragment>
      ))}
    </MenuItemGroup>
  );
};
