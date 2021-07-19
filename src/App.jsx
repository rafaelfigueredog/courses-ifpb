import React, {useState, useEffect} from 'react'

import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header'
import Grid  from './containers/Grid'




function App() {

  const getPaletteType = () => {
    return JSON.parse( localStorage.getItem('palette') || true ) ;
  }

  const [paletteType, setPaletteType] = useState(getPaletteType()); 

  useEffect(() => {
    localStorage.setItem('palette', paletteType); 
  }, [paletteType])

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#6fbf73', 
        main: '#4caf50',
        dark: '#357a38'
      },
      secondary: {
        light: '#357a38', 
        main: '#4caf50',
        dark: '#6fbf73'
      }, 
      text: {
        primary: '#fafafa', 
      },
      type: paletteType? 'light' : 'dark', 
    },
    typography: {
      fontFamily: 'Poppins', 
      fontWeightLight: 300, 
      fontWeightRegular: 400, 
      fontWeightMedium: 500, 
      fontWeightBold: 600
    }, 
    
  });


  return (
    <div className='App'>
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <Header paletteType={paletteType} setPaletteType={setPaletteType} />
      <Grid />
    </ThemeProvider>
    </div>
  );
}

export default App;
