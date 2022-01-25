

const theme = createTheme({
    components: {
        
        MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
          },
        },
      },
    },
  });

  export default theme;