import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {main: "#42a5f5" },
        secondary: {main: "#0d47a1"},
        background: {
            default: "#0a0e17",
            paper: "#121826",
        },
    },

    typography:{
        fontFamily: '"Roboto", "Helvetica", "Arials", sans-serif',
        h4: {fontWeight: 700},
        h5: {fontWeight: 600},
        button: {textTransform:"none"},
    },

    shape: {borderRadius: 12},

    components:{
        MuiButton: {
            styleOverrides: {
                root: {borderRadius: 20},
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {fontWeight: 600},
            },
        },
    },
});

export default theme;