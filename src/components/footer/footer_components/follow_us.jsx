import React from "react";

const FollowUs = () => {
    return(
        <div className="text-lg">
             <h2 className="font-bold pb-4">Follow Us</h2>
             <div className="flex flex-row gap-2 md:gap-4">
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/facebook.png" alt="facebook" /></a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/twitter.png" alt="twitter" /></a>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/instagram.png" alt="instagram" /></a>
                 <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/tiktok.png" alt="tiktok" /></a>
             </div>
        </div>
    )
};
export default FollowUs;