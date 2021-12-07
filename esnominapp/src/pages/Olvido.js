import React from 'react'
import { Header } from '../components/Header/Header'
import { Dashboard } from '../components/Dashboard/Dashboard'
import Footer from '../components/Footer/Footer'
import { Menu } from '../components/Menu/Menu'
import FormLogin from '../components/FormLogin/FormLogin'
import Footer2 from '../components/Footer/Footer2'
import { HeaderBar2 } from '../components/HeaderBar/HeaderBar2'
import FormOlvido from '../components/FormOlvido/FormOlvido'

export const Olvido = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark">
             <  HeaderBar2 />
            </nav>
            <FormOlvido />
            <Footer2/>
        </div>
    )
}