import dayjs from "dayjs";
import Cookies from "js-cookie";
import _ from "lodash";
import React from "react";
import { useTranslation } from "next-i18next";
import { LANGUAGE_LIST } from "i18n/constants";
import { ListForm } from "modules/common/forms/ListForm";
import { useBackButton } from "modules/common/hooks/useBackButton";
import { useRouter } from "next/router";

export const Language = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  useBackButton(true);

  const onChange = (value: string) => {
    const { pathname, asPath, query } = router;
    const lang = LANGUAGE_LIST[value as "English" | "Russian"].value;
    dayjs.locale(lang);
    Cookies.set("language", lang);
    router.replace({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <ListForm
      list={_.keys(LANGUAGE_LIST)}
      checkList={[
        _.find(LANGUAGE_LIST, (item) => item.value === router.locale)?.name ||
          "",
      ]}
      description={""}
      onChange={onChange}
    />
  );
};

export default Language;
