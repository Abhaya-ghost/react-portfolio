import React, { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

function Services() {
    const ref=useRef();
    const variants = {
        initial: {
            x: -50,
            y: 10,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
    };

    const isInView = useInView(ref,{margin:'-100px'})

    return (
        <motion.div className='services' variants={variants} initial='initial' ref={ref} animate={isInView && 'animate'}>
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on improving my skills <br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:'orange'}}>Crafting</motion.b> Digital Experiences</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color:'orange'}}>Seamless  </motion.b>Mobile Excellence</h1>
                    <a href="https://github.com/Abhaya-ghost"><button>Github</button></a>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
                    <h2>Programming</h2>
                    <p>I am fluent in <b>C/C++ and Python</b>, I optimize code for efficiency and scalability. I design algorithmic solutions, implement data structures, and solve complex problems, ensuring robust and high-performance software. </p>
                </motion.div>
                <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
                    <h2>Web Developer</h2>
                    <p>My expertise lies in translating ideas into dynamic and user-friendly websites. I specialize in front-end using <b>HTML,CSS,Bootstrap,Tailwind,JS,React,Next</b> and back-end development using <b>Node.JS, Express.js, MongoDB, MySQL</b>, ensuring seamless functionality and an immersive user experience.</p>
                </motion.div>
                <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
                    <h2>Flutter Developer</h2>
                    <p>I specialize in creating cross-platform mobile applications with a single codebase using <b>Flutter and Dart</b>. I design and implement visually appealing, responsive UIs, ensuring a seamless user experience. My expertise lies in leveraging Flutter's framework to build efficient, feature-rich apps.</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services