import React from "react";
import { useNavigate } from "react-router-dom";
const SignIn=({darkLight})=>{
    const navigate = useNavigate();
    return(
     <div className="md:flex hidden">
             <img 
             onClick={()=>navigate("/login")}
             src={darkLight ? "/assets/icons/light-user.png" : "/assets/icons/user.png"} 
             alt="Cart Icon" className="w-6 h-6"/>

     </div>
    )
}
export default SignIn;