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
import Transactions from "pages/Transactions";
import Geography from "pages/Geography";
import Overview from "pages/Overview";
import Breakdown from 'pages/Breakdown'
import FAQ from "pages/FAQ";
import Calendar from "pages/Calendar";
import Admin from "pages/Admin";
import Form from "pages/Form";
import EditForm from "pages/EditForm";



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
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path='/overview' element={<Overview />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path="/calender" element={<Calendar />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/users" element={<Form />} />
              <Route path="/management/edit/user/:id" element={<EditForm />} />



            </Route>
          </Routes>

        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App