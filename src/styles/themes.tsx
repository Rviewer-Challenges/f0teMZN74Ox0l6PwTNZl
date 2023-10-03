import { green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { PaletteOptions, TypeText } from "@mui/material/styles/createPalette";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Roboto_Slab, Arimo } from "next/font/google";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    ms: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

const robotoSlab = Roboto_Slab({
  subsets: ["greek", "latin"],
  weight: ["400", "500", "600", "700"],
});
const arimo = Arimo({
  subsets: ["greek", "latin"],
  weight: ["400", "500", "600", "700"],
});

const fontFamily = arimo.style.fontFamily;
const robotoSlabFontFamily = robotoSlab.style.fontFamily;

const fontSize = 16;
const htmlFontSize = 16;

const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 700;

const typography: TypographyOptions = {
  fontFamily,
  fontSize,
  htmlFontSize,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,
  h1: {
    fontFamily: robotoSlabFontFamily,
    fontWeight: 700,
    fontSize: `${40 / htmlFontSize}rem`,
    lineHeight: 1.167,
    letterSpacing: -1.5,
  },
  h2: {
    fontFamily: robotoSlabFontFamily,
    fontWeight: 700,
    fontSize: `${34 / htmlFontSize}rem`,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  h3: {
    fontFamily: robotoSlabFontFamily,
    fontWeight: 600,
    fontSize: `${28 / htmlFontSize}rem`,
    lineHeight: 1.167,
  },
  h4: {
    fontFamily: robotoSlabFontFamily,
    fontWeight: 600,
    fontSize: `${22 / htmlFontSize}rem`,
    "@media (max-width:650px)": {
      fontSize: `${21 / htmlFontSize}rem`,
    },
    lineHeight: 1.235,
    letterSpacing: 0.1,
  },
  h5: {
    fontFamily: robotoSlabFontFamily,
    fontWeight: 600,
    fontSize: `${20 / htmlFontSize}rem`,
    "@media (max-width:650px)": {
      fontSize: `${19 / htmlFontSize}rem`,
    },
    lineHeight: 1.334,
  },
  h6: {
    fontFamily: robotoSlabFontFamily,
    fontWeight: 600,
    fontSize: `${17 / htmlFontSize}rem`,
    lineHeight: 1.2,
    letterSpacing: 0.05,
    "@media (max-width:650px)": {
      fontSize: `${15 / htmlFontSize}rem`,
    },
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: `${16 / htmlFontSize}rem`,
    lineHeight: 1.45,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: `${14 / htmlFontSize}rem`,
    lineHeight: 1.37,
    letterSpacing: 0.1,
  },
  body1: {
    fontWeight: 400,
    fontSize: `${16 / htmlFontSize}rem`,
    lineHeight: 1.5,
    letterSpacing: 0.15,
  },
  body2: {
    fontWeight: 500,
    fontSize: `${15 / htmlFontSize}rem`,
    lineHeight: 1.33,
    letterSpacing: 0.15,
  },
  caption: {
    fontWeight: fontWeightLight,
    fontSize: `${12 / htmlFontSize}rem`,
    lineHeight: 1.66,
    letterSpacing: 0.4,
  },
  overline: {
    fontWeight: fontWeightRegular,
    fontSize: `${14 / htmlFontSize}rem`,
    textTransform: "uppercase",
    lineHeight: 1.33,
    letterSpacing: 1,
  },
  button: {
    fontWeight: fontWeightBold,
    textTransform: "none",
    fontSize: `${14 / htmlFontSize}rem`,
    lineHeight: 24 / 14,
    letterSpacing: 0.4,
  },
};

const textPalette: TypeText = {
  primary: "#000f0f",
  secondary: "rgba(0, 10, 10,0.7)",
  disabled: "rgba(68,44,46,0.38)",
};

const basePalette: PaletteOptions = {
  primary: {
    main: "#00807D",
    contrastText: "#fff",
  },
  secondary: {
    main: "#feeae6",
  },
  error: {
    main: "#F2584E",
    dark: "#B92025",
    light: "#FF8B7A",
    contrastText: "#FFFFFF",
  },
  success: {
    main: green[800],
    dark: green[900],
    light: green[600],
    contrastText: "#FFFFFF",
  },
  background: {
    paper: "#ffffff",
    default: "#fcfffe",
  },
};

const lightPalette = createTheme({
  palette: {
    mode: "light",
    ...basePalette,
    text: textPalette,
  },
}).palette;

const theme = (palette: PaletteOptions) =>
  createTheme({
    palette,
    typography,
    breakpoints: {
      values: {
        xs: 0,
        sm: 650,
        ms: 800,
        md: 950,
        lg: 1200,
        xl: 1536,
        xxl: 1920,
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: lightPalette.text.primary,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            "&:hover": {
              color: lightPalette.primary.main,
            },
          },
        },
        defaultProps: {
          underline: "none",
          color: "text.primary",
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingRight: "10px",
            paddingLeft: "10px",
            paddingTop: "10px",
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: "16px",
            justifyContent: "center",
            alignItems: "center",
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            fontSize: `${22 / htmlFontSize}rem`,
            fontFamily: "Arimo",
            fontWeight: "normal",
            textAlign: "center",
            "@media (max-width:650px)": {
              fontSize: `${19 / htmlFontSize}rem`,
            },
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            "&:before": {
              display: "none",
            },
            "&:not(:last-child)": {
              borderBottom: 0,
            },
          },
        },
      },
    },
  });

const themes = {
  light: theme(lightPalette),
};

export default themes;
