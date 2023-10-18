import React, { useState } from "react";
import "./LeoUI.css";
import {
  Button,
  Checkbox,
  DatePickerField,
  Icon,
  PasswordInputField,
} from "@surya-digital/leo-reactjs-material-ui";
const LeoUI = () => {
  const [bool, setBool] = useState(true);
  const [pass, setPass] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Example of LeoUI</h1>
      <table>
        <thead>
          <tr>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Component Demo</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Only Text Btn</td>
            <td>
              <Button
                name="login"
                variant="plain-color"
                size="large"
                iconPosition="right"
                icon={<Icon type="chevron-right" color="white" />}
                title="Login"
                isLoading={false}
                isDisabled={false}
                color="primary"
                onClick={(): void => {
                  console.log("logged in");
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Filled Btn</td>
            <td>
              <Button
                name="login"
                variant="filled"
                size="large"
                iconPosition="right"
                icon={<Icon type="chevron-right" color="white" />}
                title="Login"
                isLoading={false}
                isDisabled={false}
                color="primary"
                onClick={(): void => {
                  console.log("logged in");
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Outlined Btn</td>
            <td>
              <Button
                name="login"
                variant="outlined-color"
                size="large"
                iconPosition="right"
                icon={<Icon type="chevron-right" color="white" />}
                title="Login"
                isLoading={false}
                isDisabled={false}
                color="primary"
                onClick={(): void => {
                  console.log("logged in");
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Checkbox</td>
            <td>
              <Checkbox
                checked={bool}
                onChange={(value: boolean): void => setBool((bool) => !bool)}
                isDisabled={false}
                isRequired={false}
                label="label"
              />
            </td>
          </tr>
          <tr>
            <td>Date Picker</td>
            <td>
              <DatePickerField
                label="Date"
                value={new Date()}
                onChange={() => {}}
                isDisabled={false}
                style={{ width: "200px" }}
                onError={() => {}}
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <PasswordInputField
                name="password"
                value={pass}
                onTextChange={(value) => {
                  setPass((pass) => value);
                }}
                placeholder="password"
                label="password"
              />
            </td>
          </tr>
          <tr>
            <td>Icons</td>
            <td>
              <Icon type="calendar" color="black" />
              <Icon type="alert-circle" color="black" />
              <Icon type="arrow-down" color="black" />
              <Icon type="arrow-up" color="black" />
              <Icon type="checkbox-blank" color="black" />
              <Icon type="checkbox-marked" color="black" />
              <Icon type="chevron-down" color="black" />
              <Icon type="chevron-left" color="black" />
              <Icon type="chevron-right" color="black" />
              <Icon type="chevron-up" color="black" />
              <Icon type="clock" color="black" />
              <Icon type="cross" color="black" />
              <Icon type="hide-password" color="black" />
              <Icon type="list-x" color="black" />
              <Icon type="password" color="black" />
              <Icon type="plus" color="black" />
              <Icon type="radio-blank" color="black" />
              <Icon type="radio-marked" color="black" />
              <Icon type="search" color="black" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default LeoUI;
