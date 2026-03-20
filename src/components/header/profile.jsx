import React from "react";

const SignIn=({darkLight})=>{
    return(
     <div className="md:flex hidden">
             <img 
             src={darkLight ? "/assets/icons/light-user.png" : "/assets/icons/user.png"} 
             alt="Cart Icon" className="w-6 h-6"/>

     </div>
    )
}
export default SignIn;