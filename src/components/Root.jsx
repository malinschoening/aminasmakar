import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import FirstPage from '../pages/FirstPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import CateringPage from '../pages/CateringPage'
import PortfolioPage from '../pages/PortfolioPage'
import { Suspense } from "react"

const Root = () => {
    return (
        <>
            <Header />
            <main>
                <FirstPage />
                <ContactPage />
                <CateringPage />
                <PortfolioPage />
                <AboutPage />
            </main>
            <Footer />
        </>
    )
}
export default Root
