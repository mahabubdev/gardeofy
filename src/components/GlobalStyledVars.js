const textColor = '#282828';
const textColorLight = '#ffffff';
const textColorGray = '#646464';
const textColorTheme = '#009961';


const bgColor = '#fafafa';
const bgColorLight = '#ffffff';
const bgColorLite = '#f8f9fa';
const bgColorTheme = '#459a61';
const bgColorThemeHighlight = '#4ca455';
const bgColorThemeDeep = '#0c291a';
const bgColorThemeRGBA = (alpha) => {
    return `rgba(69, 154, 97, ${parseFloat(alpha)})`
};




// composing exports
export const textColors = {
    normal: textColor,
    light: textColorLight,
    gray: textColorGray,
    theme: textColorTheme
};

export const bgColors = {
    normal: bgColor,
    light: bgColorLight,
    lite: bgColorLite,
    theme: bgColorTheme,
    themeHigh: bgColorThemeHighlight,
    themeDeep: bgColorThemeDeep,
    themeRGBA: bgColorThemeRGBA,
};