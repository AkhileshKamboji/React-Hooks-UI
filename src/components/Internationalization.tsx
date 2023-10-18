import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownInputField,
  Card,
} from "@surya-digital/leo-reactjs-material-ui";

const languages = [
  { name: "English", value: "en" },
  { name: "Hindi", value: "hi" },
  { name: "Kannada", value: "ka" },
  { name: "Telugu", value: "te" },
];

const Internationalization = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("en");

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Internationalization</h1>
        <div style={{ display: "flex", padding: "16px" }}>
          <div style={{ whiteSpace: "nowrap", margin: "auto" }}>
            Change the language &nbsp;
          </div>
          <DropdownInputField
            name="language"
            value={language}
            onSelect={(e) => {
              console.log(e.value);
              i18n.changeLanguage(e.value);
              setLanguage(e.value);
            }}
            label="Language"
            options={languages}
          />
        </div>

        <Card
          style={{
            padding: "16px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          {t("Article")}
        </Card>
        <Card
          style={{
            padding: "16px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          No key existing so :'
          {t("sample", "default value to show")}'
        </Card>
        <Card
          style={{
            padding: "16px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          Using interpolation: '{t("name", { name: "Akhilesh" })}'
        </Card>
        <Card
          style={{
            padding: "16px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          Language Override: '{t("override", { lng: "ka" })}'
        </Card>
        <Card
          style={{
            padding: "16px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          Formatting: '{t("count", { count: 1.343 })}'
        </Card>
        <Card
          style={{
            padding: "16px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          Plurals:
          <div>0:{t("key", { count: 0 })}</div>
          <div>1:{t("key", { count: 1 })}</div>
          <div>2:{t("key", { count: 2 })}</div>
        </Card>
      </div>
      <hr />
    </div>
  );
};

export default Internationalization;
