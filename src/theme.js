import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2f4156',
            text: '#dcdad1',
        },
        secondary: {
            main: '#567c8d',
            text: '#dcd9d0'
        },
        third: {
            main: '#c8d9e6',
            text: '#557a8d',
            darktext: '#3b5562'
        },
        forth: {
            main: '#f5efeb',
            text: '#587d8d'
        },
        fifth: {
            main: '#ffffff',
            text: '#c8d9e6'
        },
    },

    typography: {
        h1: {
            fontFamily: 'RegardsRegular',
        },
        body1: {
            fontFamily: 'Quasimoda',
        },
        subtitle1: {
            fontFamily: 'CourierPrime'
        }
    }
});

export default theme;