import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddToCartSidebar from "../add_to_cart_sidebar/add_to_cart_sidebar";
import AccountBottomSheet from "../user_profile_components/accountSideBar";
import AccountSidebar from "../user_profile_components/accountSideBar";

const SignIn=({darkLight ,className})=>{
    const [active , setActive ] = useState(false);
    const navigate = useNavigate();
    
    return(
        <>
            <div className={`flex ${className}`}
            onClick={()=>setActive(true)}
            >
                    <img 
                    src={darkLight ? "/assets/icons/light-user.png" : "/assets/icons/user.png"} 
                    alt="Cart Icon" className="w-4 h-4 md:w-6 md:h-6 hover:cursor-pointer"/>

            </div>
            <AccountSidebar 
                    active={active}
                    onClose={() => setActive(false)}
                    isLoggedIn={true} />
     </>
    )
}
export default SignIn;