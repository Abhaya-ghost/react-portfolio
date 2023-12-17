import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './portfolio.scss'

const items = [
    {
        id: 1,
        title: 'Forex Notes',
        img: '/forex.png',
        desc: 'Developed a dynamic Notes website using HTML, Bootstrap, and JavaScript. I have utilized JavaScript to create interactive features, allowing users to add and delete notes effortlessly, enhancing the functionality and usability of the website.',
        url: 'https://abhaya-ghost.github.io/ForexNotes/',
    },
    {
        id: 2,
        title: 'SparX Social',
        img: '/sparx.png',
        desc: 'Designed a fully functional social media app where you can follow and unfollow people, share your photos and videos and have a real time chat with your friends. Frontend is manages using react and css whereas Backend is managed using Node.JS, socket.io and MongoDB',
        url: 'https://github.com/Abhaya-ghost/SparXFrontend',
    },
    {
        id: 3,
        title: 'Covid App',
        img: '/covid.png',
        desc: 'Developed an app describing the number of cases of covid and covid symptoms and its precautions where frontend is manages using Dart and Flutter.',
        url: 'https://github.com/Abhaya-ghost/Covid_project',
    },
    {
        id: 4,
        title: 'gDocs Clone',
        img: '/gDocs.png',
        desc: 'Experience the power of collaboration with our Flutter-powered Google Docs clone. Seamlessly create, edit, and share documents in real-time across devices. Enjoy a familiar interface, robust features, and the flexibility to work on the go. Elevate your document collaboration with our intuitive and efficient Flutter-based solution.',
        url: 'https://github.com/Abhaya-ghost/gDcos_clone',
    }
]

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"  ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer"  style={{ y: y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.url}>See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start']
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{ scaleX: scaleX }}></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio