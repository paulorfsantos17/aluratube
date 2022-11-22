import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: "light",
  setMode : () => alert('me configure primeiro'),
  toggloMode : () => alert('me configure primeiro')
});

export function ColorModeProvide(props) {
  const [mode, setMode] = useState(props.initialMode)
  function toggloMode() {
    if (mode === "dark") setMode("light");

    if (mode === "light") setMode("dark");
  }
  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode : setMode, toggloMode: toggloMode}}>
      {props.children}
    </ColorModeContext.Provider>
  );
}
