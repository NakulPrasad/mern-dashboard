import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routePath } from './constants/routes'
function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.categories} element={<CategoryMovies />} />
        <Route path={routePath.invalid} element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App