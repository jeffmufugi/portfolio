import res from './assets/res.png'
import Menu from './menu'
import TiltImage2 from './Tiltimage2';
import transition from './transition';
import gsap from 'gsap';
import { useRef,useEffect } from 'react';
import resu from './assets/resume.pdf'

function Resume() {
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
        
    return(
        <>
        <div className='pj3'>
                <div className='opening-theme2'>
                <h1 className='title' ref={textRef}>resume.</h1>
                <div style={{marginTop:"-9vw",display:"flex",justifyContent:"space-evenly",flexDirection:"row",alignItems:"center"}}>
                
                <button onClick={() => window.open(resu, '_blank')} className="btnprev" style={{height:"5vh",width:"10vh",border:"1px solid grey",borderRadius:"2vw"}}>Preview</button>
                {/* <img src={res} alt="" style={{width:"37vw",border:"1px solid grey"}}/> */}
                <TiltImage2 src={res} style={{ width: "37vw",marginTop:"2vw"}} />
                </div>
        
        
        
                </div>
                </div>
                <Menu/>
        </>)

}
  

const WrappedHome = transition(Resume)
export default WrappedHome;