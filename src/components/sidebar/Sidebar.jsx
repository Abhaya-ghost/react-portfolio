import React, { useState } from 'react'
import './sidebar.scss'
import ToggleButtons from './toggleButtons/ToggleButtons'
import Links from './links/Links'
import { motion } from 'framer-motion'

function Sidebar() {
    const [open, setOpen] = useState(false)

    const variants = {
        open:{
            clipPath : 'circle(1200px at 50px 50px)',
            transition : {
                type:'spring',
                stiffness : 20,
            }
        },
        closed: {
            clipPath : 'circle(25px at 49px 47px)',
            transition: {
                delay:0.2,
                type:'spring',
                stiffness:400,
                damping:40,
            }
        }
    }

    return (
        <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
            <motion.div className='bg' variants={variants}>
                <Links />
            </motion.div>
            <ToggleButtons setOpen={setOpen}/>
        </motion.div>
    )
}

export default Sidebar