import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppGlobalThemeProvider } from "./shared/contexts"
import { Menu } from "./shared/components";
export const App = () => {
 

  return (
       <AppGlobalThemeProvider>
       
       <BrowserRouter>
       <Menu>
      <AppRoutes/>
      </Menu>
      </BrowserRouter> 
      </AppGlobalThemeProvider>
  )
}


