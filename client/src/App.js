import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { themeSettings } from "theme.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from 'pages/Dashboard'
import Layout from 'pages/common/Layout'
import Products from 'pages/Products'
import Customers from 'pages/Customers'



function App() {
  const mode = useSelector((state) => state.global.mode);
  //themesetting return an object with pallete and typography with modeSelected
  //useMemo : rerenders App() when mode is changed
  //saving generated theme in cache
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          {/* CssBaseLIne remove default mui css */}
          <CssBaseline />
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />

            </Route>
          </Routes>

        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App