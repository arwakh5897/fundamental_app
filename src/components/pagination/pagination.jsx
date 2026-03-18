// import React from "react";

// const Pagination = ({currentPage, totalPages, onPageChange})=>{
//     const handleClick = () => {
//         if (currentPage < totalPages) {
//             onPageChange(currentPage + 1);
//         }
//     };
//     if (currentPage >= totalPages) return null;

//     return (
//      <div className="flex justify-center items-center py-8">
//         <button 
//         onClick={handleClick}
//         className=" flex bg-menu-buttons py-1 px-4 rounded-sm text-sm md:text-lg hover:opacity-90 md:font-semibold hover:cursor-pointer transition">
//             Load More</button>
//      </div>
//     )
// }
// export default Pagination;

















import React from "react";
const Pagination = ({loadMore})=>{
    return (
     <div className="flex justify-center items-center py-8">
        <button 
            onClick={loadMore}
            className=" flex bg-menu-buttons py-1 px-4 rounded-sm text-sm md:text-lg hover:opacity-90 md:font-semibold hover:cursor-pointer transition">
                Load More
        </button>
     </div>
    )
}
export default Pagination;