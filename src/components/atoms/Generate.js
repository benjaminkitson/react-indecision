import React, { useContext } from "react";
import RandomContext from "../../contexts/random";

function Generate() {
    const { generate, hasOptions } = useContext(RandomContext);

    return (
        <div>
            <button
                className="m-3 h-20 w-80 rounded-md bg-blue-800 text-5xl text-white"
                onClick={generate}
                disabled={!hasOptions}
            >
                GENERATE
            </button>
        </div>
    );
}

export default Generate;
