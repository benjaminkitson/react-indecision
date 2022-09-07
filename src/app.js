import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import Dice from "./pages/Dice";
import Theme from "./components/Theme";
import "./styles/index.css";
import { RandomContextProvider } from "./contexts/Random";

const app = document.getElementById("app");

function Random() {
    return (
        <RandomContextProvider>
            <Theme>
                <Main />
            </Theme>
        </RandomContextProvider>
    );
}

ReactDOM.render(<Random />, app);
