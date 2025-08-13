import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const TiltImage2 = ({ src, alt = '', style = {} }) => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.div
      className="tilt-wrapper"
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94],delay:0.5}}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img ref={imgRef} src={src} alt={alt} className="tilt-img" />
    </motion.div>
  );
};

export default TiltImage2;
