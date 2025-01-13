import { createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette:{
        primary: {
            main: '#090A1A',
            light: '#090A1A',
            dark: '#090A1A',
            contrastText: '#fff',
        }, 
        secondary: {
            main: cyan[500],
            light: cyan[400],
            dark: cyan[300],
            contrastText: '#fff',
        },
        background:{
            default: '#f5f5f5', 
            paper: '#ffffff',
        }
    }
})