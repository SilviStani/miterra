'use client';
import { useRef } from 'react';
import React from 'react';
import './Parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start start", "end start"]
    }
  );
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  
  return (
    <div className='parallax'
      ref={ref}>
      <motion.h1 style={{ y: yText }}>Proyecto</motion.h1>
      <motion.h1 style={{ y: yText }}>Tierra Serena</motion.h1>
      {/*<motion.div className="mountains"></motion.div>*/}
    </div>
  )
}

export default Parallax;