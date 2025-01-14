import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Light } from './shared/themes';
import { ThemeProvider } from '@mui/material';

import { Menu } from "./shared/components";
import { DrawerProvider } from "./shared/contexts";
export const App = () => {


  return (
    <ThemeProvider theme={Light}>
        <DrawerProvider>
      <BrowserRouter>
        <Menu>
          <AppRoutes />
        </Menu>
      </BrowserRouter>
      </DrawerProvider>
      </ThemeProvider>
  )
  
}


