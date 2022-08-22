import React from "react";

function Generate({ generate, hasOptions }) {
    return (
        <div>
            <button
                className="m-3 h-20 w-80 cursor-pointer rounded-md bg-blue-800 text-5xl text-white"
                onClick={generate}
                disabled={!hasOptions}
            >
                GENERATE
            </button>
        </div>
    );
}

export default Generate;
