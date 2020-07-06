import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}