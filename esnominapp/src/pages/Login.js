import React from 'react'
import { Header } from '../components/Header/Header'
import { Dashboard } from '../components/Dashboard/Dashboard'
<<<<<<< HEAD
//import Footer from '../components/Footer/Footer'
import { Menu } from '../components/Menu/Menu'
import FormLogin from '../components/FormLogin/FormLogin'
//import Footer2 from '../components/Footer/Footer2'
=======
import Footer from '../components/Footer/Footer'
import { Menu } from '../components/Menu/Menu'
import FormLogin from '../components/FormLogin/FormLogin'
import Footer2 from '../components/Footer/Footer2'
>>>>>>> c9fc84c6575ea9f9b046ab93b76d2e798dc56c19
import { HeaderBar2 } from '../components/HeaderBar/HeaderBar2'

export const Login = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark">
             <  HeaderBar2 />
            </nav>
            <FormLogin />
<<<<<<< HEAD

=======
            <Footer2/>
>>>>>>> c9fc84c6575ea9f9b046ab93b76d2e798dc56c19
        </div>
    )
}