import React from "react";

const FollowUs = () => {
    return(
        <div className="text-lg flex justify-end">
             {/* <h2 className="font-bold pb-4">Follow Us</h2>
             <div className="flex flex-row gap-2 lg:gap-4">
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/facebook.png" alt="facebook" /></a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/twitter.png" alt="twitter" /></a>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/instagram.png" alt="instagram" /></a>
                 <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/tiktok.png" alt="tiktok" /></a>
             </div> */}
              <div className="mb-6 w-56">
          <p className="text-[11px] text-halfWhite mb-2 px-2 tracking-widest">
            Follow Us
          </p>

          <div className="space-y-2 bg-halfWhite p-2 rounded-2xl">

            <div className="flex flex-row justify-around">
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/facebook.png" alt="facebook" /></a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/twitter.png" alt="twitter" /></a>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/instagram.png" alt="instagram" /></a>
                 <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><img className="w-6 h-6" src="/assets/icons/tiktok.png" alt="tiktok" /></a>
            </div>
          </div>
        </div>
        </div>
    )
};
export default FollowUs;