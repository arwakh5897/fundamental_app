import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddToCartSidebar from "../add_to_cart_sidebar/add_to_cart_sidebar";
import AccountBottomSheet from "../user_profile_components/accountSideBar";
import AccountSidebar from "../user_profile_components/accountSideBar";
import { User } from "lucide-react";

const Profile=()=>{
    const [active , setActive ] = useState(false);
    const navigate = useNavigate();
    
    return(
        <>
        <div className="flex items-center gap-1 cursor-pointer"
            onClick={()=>setActive(true)}
            >
                <User size={18} />
                <span className="text-sm hidden lg:flex">Account</span>

            </div>
            <AccountSidebar 
                    active={active}
                    onClose={() => setActive(false)}
                    isLoggedIn={true} />
     </>
    )
}
export default Profile;