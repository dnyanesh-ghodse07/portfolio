import React from 'react'
import "./Main.scss";
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';

const Main = () => {
  return (
    <div className='container'>
        <div className="left">
            <div className="text">
                <div className="title">
                    <h1 className='greet'>Hi! I Am </h1>
                    <h1 className='name'>Dnyanesh Ghodse</h1>
                </div>
                <p className="description">Developing Front End Applications from over 2 years..</p>
            </div>
            <div className="profile_btn">
                <button className='hire_me'>Hire Me</button>
                <button className='projects'>Projects <ArrowOutwardSharpIcon fontSize='small'/></button>
            </div>
            <div className="contact">
                <h4>Contact</h4>
                <p>ghodsednyaneshwar@gmail.com</p>
            </div>
            <div className='footer_left'>
                <div className="label">
                    <h4>
                        Recent Projects
                    </h4>
                    <button>
                        Know More
                    </button> 
                </div>
                <div className="list">
                    <ul>
                        <li>Infinite Scroll</li>
                        <li>Shopper-Ecom</li>
                        <li>Chess-Board</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="right">
            <div className='input'>
                <input type="text" placeholder='Send message' />
            </div>
        </div>
    </div>
  )
}

export default Main