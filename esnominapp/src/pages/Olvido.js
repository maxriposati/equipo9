import React from 'react'
import { Header } from '../components/Header/Header'
import { Dashboard } from '../components/Dashboard/Dashboard'
<<<<<<< HEAD
//import Footer from '../components/Footer/Footer'
import { Menu } from '../components/Menu/Menu'
import FormLogin from '../components/FormLogin/FormLogin'
import FormOlvidoMail from '../components/FormOlvidoMail/FormOlvidoMail'
//import Footer2 from '../components/Footer/Footer2'
import { HeaderBar2 } from '../components/HeaderBar/HeaderBar2'
import { Form } from 'react-bootstrap'

=======
import Footer from '../components/Footer/Footer'
import { Menu } from '../components/Menu/Menu'
import FormLogin from '../components/FormLogin/FormLogin'
import Footer2 from '../components/Footer/Footer2'
import { HeaderBar2 } from '../components/HeaderBar/HeaderBar2'
import FormOlvido from '../components/FormOlvido/FormOlvido'
>>>>>>> c9fc84c6575ea9f9b046ab93b76d2e798dc56c19

export const Olvido = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark">
<<<<<<< HEAD
             < HeaderBar2 />
            </nav>
            < FormOlvidoMail />

=======
             <  HeaderBar2 />
            </nav>
            <FormOlvido />
            <Footer2/>
>>>>>>> c9fc84c6575ea9f9b046ab93b76d2e798dc56c19
        </div>
    )
}