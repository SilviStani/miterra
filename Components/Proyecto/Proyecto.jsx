"use client";
import { React, useEffect } from "react";
import Mapa from "../Mapa/Mapa.jsx";
import "../Proyecto/Proyecto.scss";
import { data } from "./data.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export const Proyecto = () => {
    useEffect(() => {
        AOS.init({});
        AOS.refresh();
    }, []);
    return (
        <section className="container">
            <div className="grandleft">
                {
                    data.map((items) => (
                        <div className="TextContainer"
                            key={items.id}
                            data-aos="zoom-in-right"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="1000"
                            data-aos-delay="250"
                        >
                            <motion.h2 whileHover={{ color: "orange" }}>{items.Title}</motion.h2>
                            <hr />
                            <motion.p whileHover={{ color: "orange", backgroundColor: "#233b29" }}>{items.desc1}</motion.p>
                            <motion.p whileHover={{ color: "orange", backgroundColor: "#233b29" }}>{items.desc2}</motion.p>
                            <motion.p whileHover={{ color: "orange", backgroundColor: "#233b29" }}>{items.desc3}</motion.p>
                            <motion.p whileHover={{ color: "orange", backgroundColor: "#233b29" }}>{items.desc4}</motion.p>
                            <motion.p whileHover={{ color: "orange", backgroundColor: "#233b29" }}>{items.desc5}</motion.p>
                            <motion.p whileHover={{ color: "orange", backgroundColor: "#233b29" }}>{items.desc6}</motion.p>
                            <motion.p whileHover={{ color: "orange", backgroundColor: "#233b29" }}>{items.desc7}</motion.p>
                        </div>
                    ))
                }
            </div>
            <div
                className="right"
                data-aos="zoom-in-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="1200"
                data-aos-delay="250"
                id="Mapa">
                <Mapa />
            </div>
        </section>
    )
}