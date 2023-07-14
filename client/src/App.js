import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { themeSettings } from "theme";


function App() {
  const mode = useSelector((state) => state.global.mode);
  //themesetting return an object with pallete and typography with modeSelected
  //useMemo : rerenders App() when mode is changed
  //saving generated theme in cache
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        {/* CssBaseLIne remove default mui css */}
        <CssBaseline />
      </ThemeProvider>
    </div>
  )
}

export default App