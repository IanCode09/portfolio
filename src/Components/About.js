import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Photo from '../images/profil.png'

const About = () => {
    return (
        <div className='about_container' id='about'>
            <Row>
                <Col md={6}>
                    <Image src={Photo} fluid/>
                </Col>

                <Col md={5} style={{ marginLeft: '30px' }}>
                    <h2>Hello, I'm Ian</h2>
                    <h6 className='text-light'>I'm a web developer</h6>

                    <h5>I've learn many things about backend and frontend but currently i'm still studying like ReactJS, NODEJS, Laravel and Python. I graduated from Pakuan University (Computer Science) </h5>
                </Col>
            </Row>
        </div>
    )
}

export default About
