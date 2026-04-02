import React from "react";
const Pagination = ({loadMore})=>{
    return (
     <div className="flex justify-center items-center py-8">
        <button 
            onClick={loadMore}
            className=" flex bg-buttons hover-bg-buttons py-1.5 px-3 md:px-4 rounded-sm text-xs md:text-sm lg:text-lg hover:opacity-90 lg:font-semibold hover:cursor-pointer transition">
                Load More
        </button>
     </div>
    )
}
export default Pagination;