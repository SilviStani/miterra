"use client";
import { React, useRef, useEffect } from "react";
import { data } from "./data.js";
import { motion, useScroll, useSpring } from "framer-motion";
import "./Fotos.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Fotos = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <motion.div className="progressBar" style={{ scaleX }}></motion.div>
            </div>
            {data.map((e) => (
                <section key={e.id} ref={ref}>
                    <div className="container" 
                    style={e.id != "Loteo_TerraSerena" 
                        ? { backgroundImage: `url(${e.image})`, backgroundSize: "cover", } 
                    : {backgroundColor: "transparent"}}>
                        <div className="wrapper">
                            <div className="imageContainer"
                                data-aos="fade-up"
                                data-aos-duration="1000">
                                <img src={e.image} alt={e.alt} />
                            </div>
                            <div
                                className="textContainer"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <motion.h2 whileHover={{ color: "orange" }}>{e.title}</motion.h2>
                                <p>{e.desc}</p>
                                <a href="/contacto" >
                                    Quiero Info!!
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Fotos;