import sc from './assets/sc.png';
import ts from './assets/ts.png';
import sc1 from './assets/sc1.png';
import cc1 from './assets/cc1.png';
import cc2 from './assets/cc.mp4';
import cc3 from './assets/cc3.mp4';
import Menu from './menu';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRef, useEffect, useState } from 'react';
import TiltImage from './Tiltimage';
import transition from './transition';
import gsap from 'gsap';

function Projects() {

  const scrollToSection2 = (event) => {
    event.preventDefault();
    if (scrollInstance.current) {
      scrollInstance.current.scrollTo(document.querySelector("#third-section"));
    }
  };
  
  const scrollToSection = (event) => {
    event.preventDefault();
    if (scrollInstance.current) {
      scrollInstance.current.scrollTo(document.querySelector("#second-section"));
    }
  };


  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(textRef.current, 
      { x: 80, opacity: 0 }, 
      { x: 0, duration: 1, ease: "power3.out", opacity: 1,delay:0.4 }
    )
    gsap.fromTo(textRef1.current, 
      { x: 80, opacity: 0 }, 
      { x: 0, duration: 1, ease: "power3.out", opacity: 1,delay:0.6 }
    )
    gsap.fromTo(textRef2.current, 
      { x: 80, opacity: 0 }, 
      { x: 0, duration: 1, ease: "power3.out", opacity: 1,delay:0.8 }
    )
  }, []);



  const previewRef = useRef(null);

  const [hoveredImage, setHoveredImage] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (img) => {
    setHoveredImage(img);
   
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleMouseMove = (e) => {
    if (!previewRef.current) return;
    const damp = 1.2
    const targetX = e.clientX * damp + 150;
    const targetY = e.clientY * damp - 500;
    // animate to the new cursor position with a slight delay
    gsap.to(previewRef.current, {
      left: targetX,
      top: targetY,
      duration: 1,            // tweak for more/less lag
      ease:     "power4.out",   // smooth ease
      overwrite: true           // cancel any in-flight tween
    });
  };

  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        direction: 'vertical',
        multiplier: 0.4,
      });

      return () => {
        if (scrollInstance.current) {
          scrollInstance.current.destroy();
        }
      };
    }
  }, []);

  return (
    <>
      <div ref={scrollRef} data-scroll-section className='pj'>
        <div className='opening-theme2' data-scroll-section>
          <h1 className='title' ref={textRef}>projects.</h1>
          <div style={{ marginTop: "10vw" }}>
            <ul>
              <li
              ref={textRef1}
                onMouseEnter={() => handleMouseEnter(cc1)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={scrollToSection}
              >
                Career Compass
              </li>

              <li
              ref={textRef2}
                onMouseEnter={() => handleMouseEnter(sc1)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={scrollToSection2}
              >
                Stream Count
              </li>
            </ul>

            {hoveredImage && (
              <img
                src={hoveredImage}
                ref={previewRef}
                alt="Preview"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  transform: "translate(-50%, 0)",
                  pointerEvents: "none",
                  width: "30vw",
                  zIndex: 1000,
                  border:"0.1px solid grey"
                }}
              />
            )}
          </div>
        </div>

        <div className='opening-theme2' data-scroll-section id="second-section">
          <h1 className='title' style={{ fontSize: "12vw" }} >Career Compass</h1>
          <div style={{ marginTop: "1vw", display: "flex", justifyContent: "space-evenly", flexDirection: "row", alignItems: "center" }}>
            <button className="btnprev" style={{ height: "5vh", border: "1px solid grey", borderRadius: "2vw" }}
            onClick={() => window.open("https://careercampus.vercel.app", "_blank")}
            >Live Website</button>
            <TiltImage src={cc2} style={{width: "67vw",paddingTop:"2vw"}} />
          </div>
        </div>

        <div className='opening-theme2' data-scroll-section id="third-section">
          <h1 className='title' style={{ fontSize: "12vw" }} >Stream Count</h1>
          <div style={{ marginTop: "1vw", display: "flex", justifyContent: "space-evenly", flexDirection: "row", alignItems: "center" }}>
            <button className="btnprev" style={{ height: "5vh", border: "1px solid grey", borderRadius: "2vw" }}
            onClick={() => window.open("https://streamcount.xyz", "_blank")}
            >Live Website</button>
            <TiltImage src={cc3} style={{ width: "67vw",paddingTop:"2vw",height:"auto" }} />
          </div>
        </div>
      </div>

      <Menu />
    </>
  );
}


const WrappedHome = transition(Projects)
export default WrappedHome;