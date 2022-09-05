import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import Dice from "./pages/Dice";
import Theme from "./components/Theme";
import "./styles/index.css";

const app = document.getElementById("app");

function Random() {
    return (
        <Theme>
            <Main />
        </Theme>
    );
}

ReactDOM.render(<Random />, app);
