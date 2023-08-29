import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typewriter from 'typewriter-effect'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hom>
    <div className='Hero'>
    <div className='Hero-heading'>
                    <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome To")
                        .pauseFor(10)
                        .deleteAll()
                        .typeString("InfinteLoop AI")
                        .start();
                }}
            />
    </div>
    <p className='Hero-para'>Pioneering AI-Powered Solutions for Business Excellence </p>
    <Link><Button variant='contained' className='B1'>Book Us</Button></Link>
    <Link to='/aboutus'><Button variant='outlined' className='B2'>About Us</Button></Link>
    </div>
    </Hom>
    <Footer/>
    </div>
  )
}

const Hom  = styled.section`

    .Hero{
        
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
    }

    .Hero-heading{
        font-size: 3rem;
    }
    .Hero-para{
        font-size: 1.5rem;
    }

    .B1{
        background-color: #72d0ff;
        margin-right: 1rem;
    }
    .B2{
        border-color: #72d0ff;
        color: #72d0ff;
        margin-left: 1 rem;
    }
    .B1:hover{
        background-color: #ffff;
        color: #72d0ff;
    }
    .B2:hover{
        background-color: #72d0ff;
        border-color: #72d0ff;
        color: #ffff;
    }
`;
export default Home