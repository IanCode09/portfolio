import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import skills from '../data/skillJson'

const Skill = () => {
    return (
        <div className='skill_container text-center' id='skills'>
            <h3>SKILLS</h3>

            <Row>
                {skills.map((skill) => (
                    <Col>
                        <Image 
                            src={skill.image} 
                            alt={skill.name}
                            style={{ width: '100px', marginTop: '40px' }}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Skill
