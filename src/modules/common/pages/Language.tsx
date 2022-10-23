import dayjs from "dayjs";
import Cookies from "js-cookie";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGE_LIST } from "../../../i18n/constants";
import { ListForm } from "../forms/ListForm";
import { useBackButton } from "../hooks/useBackButton";

export const Language = () => {
  const { i18n } = useTranslation();
  useBackButton(true);

  const onChange = (value: string) => {
    const lang = LANGUAGE_LIST[value as "English" | "Russian"].value;
    Cookies.set("language", lang);
    dayjs.locale(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <ListForm
      list={_.keys(LANGUAGE_LIST)}
      checkList={[
        _.find(LANGUAGE_LIST, (item) => item.value === i18n.language)?.name ||
          "",
      ]}
      description={""}
      onChange={onChange}
    />
  );
};

export default Language;
