import React from 'react'

import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";


export const Contact = () => {
  return (
    <>
    <div className='contact-list'>

    <h1>Daniel Borrero Desarrollador Full Stack</h1>
    <h6>!Puedes seguir mi trabajo atravez de mis redes!</h6>
        
        <ul >
            <li>
                <AiFillGithub/>
            </li>
            <li>
                <AiFillLinkedin/>
            </li>
            <li>
                <AiFillMail/>
            </li>
        </ul>
        </div>
    </>
  )
}
