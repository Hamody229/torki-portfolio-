import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ProfilePic from '../../assets/images/profile.jpg'

const NAME_ARRAY = [' ', 'M', 'u', 'h', 'a', 'm', 'm', 'a', 'd', ' ', 'T', 'o', 'r', 'k', 'i']
const JOB_ARRAY = [
    'D', 'i', 'g', 'i', 't', 'a', 'l', ' ',
    'I', 'C', ' ',
    'D', 'e', 's', 'i', 'g', 'n', ' ',
    'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'
]

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const id = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(id)
    }, [])

    return (
        <div className="container home-page">

            <div className="bg-decor">
                <span className="code-bit">process(clk)</span>
                <span className="code-bit">std_logic_vector</span>
                <span className="code-bit">rising_edge</span>
                <span className="code-bit">0110101</span>
                <span className="code-bit">end behavior;</span>
            </div>

            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={NAME_ARRAY}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={JOB_ARRAY}
                        idx={22}
                    />
                </h1>

                <h2>VHDL / Verilog / FPGA</h2>

                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>

            <div className="logo-container">
                <img src={ProfilePic} alt="Muhammad Torki" />
            </div>
        </div>
    )
}

export default Home