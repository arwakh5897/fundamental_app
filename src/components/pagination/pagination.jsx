import React from "react";
const Pagination = ({loadMore})=>{
    return (
     <div className="flex justify-center items-center py-8">
        <button 
            onClick={loadMore}
            className=" flex bg-buttons hover-bg-buttons py-2 px-4 md:px-6 rounded-sm text-sm font-medium lg:text-lg hover:opacity-90 hover:cursor-pointer transition">
                Load More
        </button>
     </div>
    )
}
export default Pagination;