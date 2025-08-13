import { useNavigate, useLocation } from "react-router-dom";
export default function Menu(){
    const navigate = useNavigate();
    const location = useLocation();
    const handleclick1=()=>{
        navigate(`/`);
    }
    const handleclick2=()=>{
        navigate(`/projects`);
    }
    const handleclick3=()=>{
        navigate(`/certifications`);
    }
    const handleclick4=()=>{
        navigate(`/about`);
    }
    const handleclick5=()=>{
        navigate(`/resume`);
    }




    return(<>
    
    
        <div className="menu-bar" style={{ display: "inline-flex", marginBottom:"1.5vw", marginTop:"0.5vw",borderRadius:"5vw",backgroundColor:"#e2e2e2",justifyContent:"center"}}>
          <p className="menu-item" onClick={() => handleclick1()}>Home</p>
          <p className="menu-item" onClick={() => handleclick2()}>Projects</p>
          <p className="menu-item" onClick={() => handleclick3()}>Awards</p>
          {/*className="menu-item"  <p onClick={() => handleclick4()}>About</p> */}
          <p className="menu-item" onClick={() => handleclick5()}>Resume</p>
          </div>
      
    </>)
}



