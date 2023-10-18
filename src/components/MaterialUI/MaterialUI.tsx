import React from "react";
import { Rating, Switch, Button, Fab, Slider } from "@mui/material";
import Add from "@mui/icons-material/Add";
import "./MaterialUI.css";
const MaterialUI = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Example of MaterialUI</h1>
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
              <Button sx={{ color: "red" }} variant="text">
                Text
              </Button>
            </td>
          </tr>
          <tr>
            <td>Filled Btn</td>
            <td>
              <Button sx={{ color: "yellow" }} variant="contained">
                Contained
              </Button>
            </td>
          </tr>
          <tr>
            <td>Outlined Btn</td>
            <td>
              <Button variant="outlined">Outlined</Button>
            </td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>
              <Rating name="read-only" value={4} readOnly />
            </td>
          </tr>
          <tr>
            <td>Switch</td>
            <td>
              <Switch
                sx={{
                  "& .MuiSwitch-thumb": {
                    width: "20px",
                    borderRadius: "16px 0px 16px 0px",
                  },
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Floating action button</td>
            <td>
              <Fab color="primary" aria-label="add">
                <Add />
              </Fab>
            </td>
          </tr>
          <tr>
            <td>Slider</td>
            <td>
              <Slider
                sx={{
                  width: "300px",
                  "& .MuiSlider-thumb": {
                    width: "50px",
                    borderRadius: "1px",
                  },
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default MaterialUI;
