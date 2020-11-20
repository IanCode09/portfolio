import React from 'react'
import { Image } from 'react-bootstrap'
import portfolios from '../data/portfolioJson'

const Portfolio = () => {
    return (
        <div className='portfolio_container' id='portfolio'>
            <h3 className='text-center'>PORTFOLIO</h3>
                {portfolios.map((item) => (
                    <div className='portfolio_item'>
                        <a href={item.link}>
                            <Image 
                                src={item.image} 
                                alt={item.name}
                                style={{ width: '60%', marginTop: '40px', marginBottom: '30px'}}
                            /> 
                        </a>

                        <h5>Name: {item.name}</h5>
                        <h5>Desription: {item.description}</h5>
                    </div>
                ))}
        </div>
    )
}

export default Portfolio
