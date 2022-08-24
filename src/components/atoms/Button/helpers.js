function getColourClass(colour) {
    switch (colour) {
        case "blue":
            return "bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
        case "grey":
            return "bg-gray-400 hover:bg-gray-500 active:bg-gray-600";
        default:
            throw new Error("Button component must have a colour!");
    }
}

export { getColourClass };
