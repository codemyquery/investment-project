import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc'
    },
    secondary: {
      main: '#edf2ff',
    },
    info: {
      main: 'rgb(54, 54, 234)'
    },
    success: {
      main: 'rgb(0, 176, 0)'
    },
    warning: {
      main: 'rgb(250, 167, 12)'
    },
    error: {
      main: 'rgb(225, 9, 9)'
    },
    mode: 'light'
  }
});

const darkTheme = createTheme(theme, {
  palette: {
    info: {
      primary: {
        main: '#0052cc'
      },
      secondary: {
        main: '#edf2ff',
      },
      info: {
        main: '#0052cc'
      },
      success: {
        main: '#0052cc'
      },
      warning: {
        main: '#0052cc'
      },
      error: {
        main: '#0052cc'
      },
      mode: 'dark'
    },
  },
});

export { theme, darkTheme };