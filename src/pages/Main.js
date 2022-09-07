import React from "react";
import Randomise from "../components/atoms/Randomise";
import Options from "../components/molecules/Options";
import { MainContextProvider } from "../contexts/Main";

export default function Main() {
    // useEffect(() => {
    //     const stored = JSON.parse(localStorage.getItem("options"));
    //     console.log(stored);
    //     if (stored) setOptions(stored);
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("options", JSON.stringify(options));
    // });

    return (
        <MainContextProvider>
            <Options />
        </MainContextProvider>
    );
}
