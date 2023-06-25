import * as React from "react";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    font_20_700: true;
    font_20_600: true;
    font_12_500: true;
    font_12_400: true;
    font_14_400: true;
    font_14_500: true;
    font_16_600: true;
    font_16_500: true;
    font_16_400: true;
    font_14_600: true;
  }
}
interface ExtendedTypographyOptions extends TypographyOptions {
  font_20_700: React.CSSProperties;
  font_20_600: React.CSSProperties;
  font_12_500: React.CSSProperties;
  font_12_400: React.CSSProperties;
  font_14_400: React.CSSProperties;
  font_14_500: React.CSSProperties;
  font_16_600: React.CSSProperties;
  font_16_500: React.CSSProperties;
  font_16_400: React.CSSProperties;
  font_14_600: React.CSSProperties;
}

export const shoplaneTheme = createTheme({
  typography: {
    font_20_600: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      display: "block",
      margin: "8px 0",
    },
    font_20_700: {
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      display: "block",
      margin: "8px 0",
    },
    font_12_500: {
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      display: "block",
      margin: "4px 0",
    },
    font_12_400: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      display: "block",
      margin: "4px 0",
    },
    font_14_400: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      display: "block",
    },
    font_14_500: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.313rem",
      display: "block",
    },
    font_16_600: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      display: "block",
    },
    font_16_500: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      display: "block",
    },
    font_16_400: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      display: "block",
    },
    font_14_600: {
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      display: "block",
    },
  } as ExtendedTypographyOptions,
  palette: {
    action: {
      disabled: "#ffffff",
      disabledBackground: "#C0C9D1",
    },
  },
} as ThemeOptions);

export const font_20_600_Modal = {
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  display: "block",
  margin: "8px 0",
};
export const font_12_500_Modal = {
  fontWeight: 500,
  fontSize: "0.75rem",
  lineHeight: "1rem",
  display: "block",
  margin: "4px 0",
};
export const font_12_400_Modal = {
  fontWeight: 400,
  fontSize: "0.75rem",
  lineHeight: "1rem",
  display: "block",
  margin: "4px 0",
};
export const font_14_400_Modal = {
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  display: "block",
};
export const font_14_500_Modal = {
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: "1.313rem",
  display: "block",
};
export const font_16_600_Modal = {
  fontWeight: 600,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  display: "block",
};
export const font_16_500_Modal = {
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  display: "block",
};
export const font_16_400_Modal = {
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  display: "block",
};
export const font_14_600_Modal = {
  fontWeight: 600,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  display: "block",
};

export const lightgray = "#62778C";
export const borderLightShade = "#CCE3FA";
export const lightSkyBlue = "#F2F8FE";
export const neutral700 = "#3B4854";
export const neutral600 = "#4F6070";
export const neutral500 = "#62778C";
export const neutral900 = "#222A31";
export const neutral100 = "#E0E4E8";
export const neutral300 = "#B8C2CC";
export const neutral400 = '#99A6B2';
export const neutral200 = "#C0C9D1";
export const neutral50 = "#F7F8F9";
export const neutral25 = '#FAFCFD'
export const red600 = "#C0362D";
export const red500 = "#F04438";
export const red100 = "#FAD4D6";
export const red50 = "#FDF0F0";
export const primary500 = "#0073E5";
export const boxShad ="0px 0px 2px rgba(41, 71, 190, 0.06), 0px 3px 8px rgba(41, 71, 190, 0.1)";
export const boxShad2 = `0px 0px 1px rgba(20, 24, 28, 0.06), 0px 1px 2px rgba(20, 24, 28, 0.1)`
export const buttonBoxShad = `0px -0.69px 2.07447px rgba(16, 29, 40, 0.1), 0px -0.69px 1.38298px rgba(16, 29, 40, 0.06)`
export const neutral87 = "#050A19";
export const bgGrey = "#E5E5E5";
export const primary02_500 = "#00BD6D";
export const green500 = "#5BB844";
export const green100 = "#DFF1DA";
export const green50 = "#F7FCF6";
export const primary_25 = "#F9FCFE";
export const primary02_100 = "#CCF2E2";
export const primary02_25 = "#F9FDFB";
export const primary_100 = "#CCE3FA";
export const primary_200 = "#99C7F5";
export const cyan700 = "#04687F";
export const cyan100 = "#CDEEF6";
export const cyan500 = "#06AED4";
export const cyan50 = "#F3FBFD";
export const yellow500 = "#E0AF00";
export const priceGreen = "#009688"
