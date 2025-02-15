class CommonFunctions {
    static hexWithAlpha = (hex, alpha) => {
        // Chuyển Alpha (0 - 1) thành Hex (00 - FF)
        const alphaHex = Math.round(alpha * 255)
            .toString(16)
            .padStart(2, '0');
        return hex + alphaHex;
    };
}

export default CommonFunctions;
