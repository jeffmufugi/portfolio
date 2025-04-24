import pic from './assets/vid.mp4';
import Menu from './menu';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import TiltImage from './Tiltimage';
import transition from './transition';
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function Homepage() {
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const boxRef = useRef(null);
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  const textRef4 = useRef(null);
  const textRef5 = useRef(null);

  const [showMainContent, setShowMainContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(textRef.current, 
      { x: 80, opacity: 0 }, 
      { x: 0, duration: 1, ease: "power2.out", opacity: 1 }
    )
    .fromTo(textRef1.current, 
      { x: 80, opacity: 0 }, 
      { x: 0, duration: 1, ease: "power2.out", opacity: 1 }, "<0.5"
    )
    .fromTo(textRef2.current, 
      { x: 80, opacity: 0 }, 
      { x: 0, duration: 1, ease: "power2.out", opacity: 1 }, "<0.5"
    )
    .to(".opening-theme", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      onComplete: () => setShowMainContent(true) // Show main content
    });
  }, []);


  useEffect(() => {
    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        direction: 'vertical',
        multiplier: 0.4,
      });

      return () => {
        scrollInstance.current?.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (showMainContent) {
      gsap.fromTo(boxRef.current, {
        x: -100,
       
      },
    {x:0,duration: 0.5,
      ease: 'back.out(1.5)'
    });

      gsap.fromTo(
        textRef4.current,
        {  x: 40,opacity:0  }, // from values
        {  x: 0, duration: 1,delay:0, ease: "power2.out",opacity:1} // to values
      );
      gsap.fromTo(
        textRef5.current,
        {  x: 40,opacity:0  }, // from values
        {  x: 0, duration: 1,delay:0.5, ease: "power2.out",opacity:1} // to values
      );
    }
  }, [showMainContent]);

  const handleclick1 = () => navigate(`/projects`);
  const handleclick2 = () => navigate(`/resume`);

  return (
    <>
      <div ref={scrollRef} data-scroll-container className='pj1'>
        
        {/* Opening theme */}
        {!showMainContent && (
          <div className='opening-theme' data-scroll-section>
            <p ref={textRef}>michelo</p>
            <p ref={textRef1}>jeff</p>
            <p ref={textRef2}>mufugi</p>
          </div>
        )}

        {/* Main content */}
        {showMainContent && (
          <div className='opening-theme1' data-scroll-section  >
            <div className='name-heading' style={{alignSelf:"center"}}>
              <p ref={textRef4} >
                <span>MICHELO</span> JEFF MUFUGI
              </p>
            </div>

            <div className='mid-heading' style={{ display: "flex", flex: 1, flexDirection: "row",height: "100%"  }}>
              <div className='summary' style={{
                flex: 0.5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom:"5vw"
              }}>
              
                  <p>Hi, I’m Jeff, a recent computer science graduate passionate about software development, 
                    with experience in designing, building, testing and deploying full-stack web applications, feel free to explore.</p>
                
                <div style={{ flexDirection: "row" }}>
                  <button ref={boxRef} className='btn1' onClick={handleclick1}>See my projects</button>
                  <button className='btn2' onClick={handleclick2}>Quick Overview</button>
                </div>
              </div>

              <div className='video' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                <TiltImage ref={textRef5}  src={pic} style={{ width: "60vw", height: "auto",marginTop:"3vw" }} />
              </div>
            </div>
          </div>
        )}
      </div>
      <Menu />
    </>
  );
}

const WrappedHome = transition(Homepage);
export default WrappedHome;

