<<<<<<< HEAD
import React from 'react'

import { Routes, Route} from "react-router-dom"
import  { Redirect } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { Dashboard } from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import { Menu } from './components/Menu/Menu'
import { Applications } from './pages/Applications'
import { Login } from './pages/Login'
import { Olvido } from './pages/Olvido'
import {Home } from './pages/Home'


export const App = () => {
    return (
            <Routes>
            <Route path="/" element={<Home />} />      
            <Route path="/login" element={<Login />} />
            <Route path="/olvido" element={<Olvido />} />
            <Route
            path="/app/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <Applications />
              </React.Suspense>
            }
          />  
        </Routes>

        
    )
}


=======
import React from 'react'

import { Routes, Route} from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap'
import { Dashboard } from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import { Menu } from './components/Menu/Menu'
import { Applications } from './pages/Applications'
import { Login } from './pages/Login'
import { Olvido } from './pages/Olvido'

export const App = () => {
    return (
        <Routes>
            <Route path="/app" element={<Applications />} />
            <Route path="/login" element={<Login />} />  
            <Route path="/olvido" element={<Olvido />} />  
        </Routes>

        
    )
}


>>>>>>> c9fc84c6575ea9f9b046ab93b76d2e798dc56c19
