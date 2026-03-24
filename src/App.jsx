import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Books from './pages/Books'
import BookDetails from './pages/BookDetails'
import About from './pages/About'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>

          <Route path="/books" element={<Books />}>
            <Route path=":id" element={<BookDetails />}></Route>
          </Route>

          <Route path="/about" element={<About />}></Route>

        </Route>

      </Routes>

    </>
  )
}

export default App
