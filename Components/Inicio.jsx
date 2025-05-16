"use client";
import React from "react";
import "./Inicio.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const textvariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const slidervariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Inicio = () => {
    const textRef = useRef();

    useEffect(() => {
        if (textRef.current) {
            init(textRef.current, {
                showcursor: true,
                typeSpeed: 150,
                backDelay: 1000,
                backSpeed: 100,
                strings: [
                    " Valle de Calamuchita",
                    " Villa General Belgrano",
                    " Villa Yacanto",
                    "Villa Berna",
                    "Los Reartes",
                    "Villa Ciudad Parque",
                ],
            });
        }
    }, []);
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textvariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textvariants}>Inmobiliaria</motion.h2>
                    <motion.h1 className="text" variants={textvariants}>
                        Mi Terra
                    </motion.h1>
                    <motion.h3 className="text" variants={textvariants}>
                        Cordoba
                    </motion.h3>
                    <motion.h3 className="text" variants={textvariants}>
                        <span ref={textRef} className="span"></span>
                    </motion.h3>
                    <motion.div className="buttons" variants={textvariants}>
                        <motion.a href="/#Mapa">
                            <motion.button variants={textvariants}>
                                Ubicación
                            </motion.button>
                        </motion.a>
                        <motion.a href="/contacto">
                            <motion.button variants={textvariants}>Contacto</motion.button>
                        </motion.a>
                    </motion.div>
                    <motion.img
                        variants={textvariants}
                        animate="scrollButton"
                        src={"/assets/scroll.png"}
                        width={50}
                        height={50}
                        alt="scroll"
                    />
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={slidervariants}
                initial="initial"
                animate="animate"
            >
                Mi Terra
            </motion.div>
            <motion.div
            variants={textvariants}
                    initial="initial"
                    animate="animate"
                className="imageContainer"
            >
                <Image
                    src="/assets/salesman.png"
                    width={300}
                    height={300}
                    id="terra"
                    className="inner_img"
                    alt="vista de una hermosa tierra en venta"
                />
            </motion.div>
        </div>
    );
};

export default Inicio;