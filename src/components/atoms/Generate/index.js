import React from "react";
import { useContext } from "react";
import Button from "../Button";
import MainContext from "../../../contexts/Main";

function Generate() {
    // const { generate, options } = useContext(MainContext);
    // const hasOptions = !!options.length;
    return (
        <div>
            <Button
                // onClick={generate}
                className="m-3 h-20 w-80 text-5xl text-white"
                colour="blue"
                // disabled={!hasOptions}
            >
                GENERATE
            </Button>
        </div>
    );
}

export default Generate;
