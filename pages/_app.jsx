import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CssReset/CssReset.jsx";
import RegisterVideo from "../src/components/RegisterVideo/RegisterVideo.jsx";
import { ColorModeProvide, ColorModeContext } from "../src/contexts/ColorMode.jsx";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

function ProviderWrapper (props) {
  return (
    <ColorModeProvide initialMode='dark'>
      {props.children}
    </ColorModeProvide>
  )
}

function MyApp({ Component, pageProps }) {
  const contextModeColor = useContext(ColorModeContext)
  return (
      <ThemeProvider theme={theme[contextModeColor.mode]}>
        <CSSReset />
        <Component {...pageProps} />
        <RegisterVideo />
      </ThemeProvider>
    
  );
}


export default function _App(props) {
  return (
    <ProviderWrapper >
      <MyApp {...props} />
    </ProviderWrapper>
  )
}