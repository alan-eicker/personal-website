import { createContext, useContext } from 'react';
import type { AppProps } from 'next/app';
import 'styles/base.scss';
import content from '../data/content.json';
import { IAppContext } from '../interfaces/AppContext';

const AppContext = createContext<IAppContext>({
  content: undefined,
});

export const useAppContent = () => useContext(AppContext);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={{ content }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
