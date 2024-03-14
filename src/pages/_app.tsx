import { createContext, useContext } from 'react';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import 'styles/base.scss';
import content from '../data/content.json';
import { IAppContext } from '../interfaces/AppContext';

const AppContext = createContext<IAppContext>({
  content: undefined,
});

export const useAppContent = () => useContext(AppContext);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContext.Provider value={{ content }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default App;
