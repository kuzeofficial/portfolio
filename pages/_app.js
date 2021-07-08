import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

