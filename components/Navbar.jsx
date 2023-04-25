import React from 'react'
import image from '../public/react.png'
export default function Navbar(){
    return (
       <nav className='nav'>
        <img src={image} width="40px"/>
        
            <h3>React Facts</h3>
            <h4>React Course - Project 1</h4>
       </nav>
    )
}