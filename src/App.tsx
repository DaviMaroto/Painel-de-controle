import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from './shared/themes';
import { ThemeProvider } from '@mui/material';

import { Menu } from "./shared/components";
export const App = () => {


  return (
    <ThemeProvider theme={LightTheme}>

      <BrowserRouter>
        <Menu>
          <AppRoutes />
        </Menu>
      </BrowserRouter>

      </ThemeProvider>
  )
}


