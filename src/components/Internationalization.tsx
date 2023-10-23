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

  const arr = t("arrayJoin", { returnObjects: true });

  console.log(arr);

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
            margin: "8px",
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
            margin: "8px",
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
            margin: "8px",
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
            margin: "8px",
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
            margin: "8px",
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
            margin: "8px",
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
        <Card
          style={{
            padding: "16px",
            margin: "8px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          Nesting: '{t("nesting1")}'
        </Card>
        <Card
          style={{
            padding: "16px",
            margin: "8px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          Context:
          <div>{t("friend")}</div>
          <div>{t("friend", { context: "male" })}</div>
          <div>{t("friend", { context: "female" })}</div>
        </Card>
        <Card
          style={{
            padding: "16px",
            margin: "8px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          Array joining:'{t("arrayJoin", { joinArrays: "+" })}'
        </Card>
        <Card
          style={{
            padding: "16px",
            margin: "8px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          Currency Formatting:
          <div>
            {t("intlCurrencyWithOptions", {
              val: 20000000,
              currency: "INR",
              locale: "en-In",
            })}{" "}
            in INR
          </div>
          <div>
            {t("intlCurrencyWithOptions", {
              val: 20000000,
              currency: "USD",
              locale: "en-us",
            })}{" "}
            in USD
          </div>
          <div>
            {t("intlCurrencyWithOptions", {
              val: 20000000,
              currency: "CAD",
              locale: "fr-CA",
              //de-DE for german
              //ar-EG for arabic
              //zh-Hans-CN-u-nu-hanidec for chinnese
            })}{" "}
            in CAD
          </div>
        </Card>
        <Card
          style={{
            padding: "16px",
            margin: "8px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          Date Formatting:
          <div>
            {t("intlDateTime", {
              val: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
              formatParams: {
                val: {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              },
            })}
          </div>
          <div>
            {t("intlDateTime", {
              val: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
              locale: "en-GB",
            })}
          </div>
        </Card>
        <Card
          style={{
            padding: "16px",
            margin: "8px",
            borderRadius: "10px",
            fontSize: "16px",
            width: "50%",
          }}
        >
          Time Formatting:'
          {t("intlRelativeTimeWithOptions", { val: 20 })}'
        </Card>
      </div>
      <hr />
    </div>
  );
};

export default Internationalization;
