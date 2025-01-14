import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const Drawer = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(Drawer);
};

export const DrawerProvider: React.FC = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  return (
    <Drawer.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </Drawer.Provider>
  );
};