import React from "react";
import Options from "../components/molecules/Options";
import { MainContextProvider } from "../contexts/Main";

export default function Main() {
    return (
        <MainContextProvider>
            <Options />
        </MainContextProvider>
    );
}
