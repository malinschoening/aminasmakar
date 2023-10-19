import React from "react"
import PathConstants from "./PathConstants"
const AboutPage = React.lazy(() => import("../pages/AboutPage"))
const ContactPage = React.lazy(() => import("../pages/ContactPage"))
const FirstPage = React.lazy(() => import("../pages/FirstPage"))
const PortfolioPage = React.lazy(() => import("../pages/PortfolioPage"))
const CateringPage = React.lazy(() => import("../pages/CateringPage"))

const routes = [
    { 
        path: PathConstants.HOME, 
        element: <FirstPage />
    },
    { 
        path: PathConstants.ABOUT, 
        element: <AboutPage />
    },
    { 
        path: PathConstants.CONTACT, 
        element: <ContactPage />
    },
    { 
        path: PathConstants.PORTFOLIO, 
        element: <PortfolioPage />
    },
    { 
        path: PathConstants.CATERING, 
        element: <CateringPage />
    }
]

export default routes