import fyp from './assets/bfyp.png'
import dl from './assets/dl.png'
import ct from './assets/ct.png'
import Menu from './menu'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRef, useEffect,useState } from 'react';
import TiltImage2 from './Tiltimage2';
import transition from './transition';
import gsap from 'gsap';
import dl1 from './assets/dl.pdf'
import bfyp from './assets/bfyp.pdf'

function Certs() {


  const [showPDF, setShowPDF] = useState(false);

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
    return(
        <>
        <div ref={scrollRef} data-scroll-section className='jp2'>
         <div className='opening-theme2' data-scroll-section>
                  <h1 ref={textRef} className='title'>awards.</h1>
                  <div style={{marginTop:"10vw"}}>
                  <ul>
                    <li                 onMouseEnter={() => handleMouseEnter(dl)}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    ref={textRef1}
                                    onClick={scrollToSection}
                                    >Deans List Award</li>
                    <li                 onMouseEnter={() => handleMouseEnter(ct)}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    ref={textRef2}
                                    onClick={scrollToSection2}
                                    >Best Final Year Project (2nd)</li>
                  </ul>
                  {hoveredImage && (
              <img
                src={hoveredImage}
                ref={previewRef}
                alt="Preview"
                style={{
                  position: "fixed",
                  top: coords.y - 400,
                  left: coords.x + 300,
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
                  <h1 className='title' style={{fontSize:"12vw"}}>Deans List Award</h1>
                  <div style={{marginTop:"1vw",display:"flex",justifyContent:"space-evenly",flexDirection:"row",alignItems:"center"}}>
                  
                  <button className="btnprev" onClick={() => window.open(dl1, '_blank')} style={{height:"5vh",width:"10vh",border:"1px solid grey",borderRadius:"2vw"}}>Preview</button>
                  {/* <img src={dl} alt="" style={{width:"50vw",border:"1px solid grey"}}/> */}
                  <TiltImage2 src={dl} style={{ width: "50vw"}} />
                  </div>
                </div>
        
                <div className='opening-theme2' data-scroll-section id="third-section">
                  <h1 className='title' style={{fontSize:"12vw"}}>Best Final Year Project (2nd)</h1>
                  <div style={{marginTop:"1vw",display:"flex",justifyContent:"space-evenly",flexDirection:"row",alignItems:"center"}}>
                  
                  <button className="btnprev" 
                  onClick={() => window.open(bfyp, '_blank')}
                  style={{height:"5vh",width:"10vh",border:"1px solid grey",borderRadius:"2vw"}}
                  >Preview
                  </button>

                  {/* <img src={fyp} alt="" style={{width:"30vw",border:"1px solid grey"}}/> */}
                  <TiltImage2 src={fyp} style={{ width: "30vw"}} />
                  </div>
                  
                </div>
            </div>
        <Menu/>
        </>)

}
  

const WrappedCerts = transition(Certs)

export default WrappedCerts;