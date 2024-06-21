import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { createTheme, MantineColorsTuple, MantineProvider } from "@mantine/core";
import Header from "@/components/Header";

const syphon: MantineColorsTuple = [
  "#8D77FD",
  "#8770FD",
  "#8269FD",
  "#7C62FC",
  "#765BFC",
  "#7154FC",
  "#6B4DFC",
  "#6546FB",
  "#8D77FD",
  "#5A38FB",
];

const theme = createTheme({
  /** Mantine theme override here */
  primaryColor: "syphon",
  colors: {
    syphon,
  },
});

type link = {
  label: string,
  link: string,
}

const links: link[] = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Docs',
    link: '/docs',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/syphon-lang/syphon'
  },
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Header links={links} />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
