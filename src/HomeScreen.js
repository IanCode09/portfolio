import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import About from './Components/About'
import Skill from './Components/Skill'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'

const HomeScreen = () => {
    return (
        <>
            <Container>
                <Header />
                <About />
                <Skill />
                <Portfolio />
            </Container>
            <Footer />
        </>
    )
}

export default HomeScreen
