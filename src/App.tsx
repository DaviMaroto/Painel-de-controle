import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppGlobalThemeProvider } from "./shared/contexts"
export const App = () => {
 

  return (
       <AppGlobalThemeProvider>
       <BrowserRouter>
      <AppRoutes/>
      </BrowserRouter> 
      </AppGlobalThemeProvider>
  )
}


