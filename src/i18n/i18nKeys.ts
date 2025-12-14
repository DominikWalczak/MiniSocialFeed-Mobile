"use client";

// tworzę hook z obiektem zawierającym tłumaczenia aby zapobiec błędom w przyszłości, 
// np. konieczności zmiany nazwy zmiennej tłumaczenia w każdym pliku

import { useTranslation } from "react-i18next";

export function useStringKeys(amount?: number) {
  const { t } = useTranslation();

  return {
    helloWorld: t('helloWorld'),
    userCount: t('userCount', {count: amount}),
    errorOccurred: t('errorOccurred'),
    loading: t('loading'),
  };
}