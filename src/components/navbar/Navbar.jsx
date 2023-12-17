import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

function Navbar() {
  return (
    <div className='navbar'>
      <Sidebar/>      
      <div className="wrapper">
          <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Abhaya Padhi</motion.span>
          <div className="social">
              <a href="https://www.facebook.com/abhaya.padhi.7/"><img src="/facebook.png" alt="" /></a>
              <a href="https://www.instagram.com/ghost_protocol02/"><img src="/instagram.png" alt="" /></a>
              <a href="https://www.linkedin.com/in/abhaya-padhi-15912223a/"><img src="/linkedin.png" alt="" /></a>
              <a href="https://wa.me/qr/R6FOKGV2AMGQB1"><img src="/whatsapp.png" alt="" /></a>
          </div>
      </div>
    </div>
  )
}

export default Navbar