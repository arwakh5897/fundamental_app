// import React, { useRef, useState } from "react";
// import LeftArrow from "../buttons/leftArrow";
// import RightArrow from "../buttons/rightArrow";
// import ApiMappingCard from "../card/api_mapping_card";

// const ScrollingProducts =({allItems})=>{

//   const scrollReference = useRef(null);
//     return(
//         <div className="relative flex w-full items-center p-4">
//         <LeftArrow scrollRef={scrollReference} />
//           <div ref={scrollReference} 
//           className="flex flex-row scrollbar-hide overflow-x-auto scroll-smooth lg:gap-8 gap-4 py-4">
//                <ApiMappingCard products={allItems}/>
//           </div>
//        <RightArrow scrollRef={scrollReference} />
//        </div>            
//     )
// }
// export default ScrollingProducts;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Card from "../card/card";

const ScrollingProducts = ({ allItems }) => {
  return (
    <div className="w-full p-4">

      <Swiper
        modules={[Navigation , Pagination]}
        navigation
        centeredSlides={false}
        centerInsufficientSlides={true}
        slidesOffsetBefore={20}
        grabCursor={true}
        speed={600}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
          1680: {
            slidesPerView: 5,
          },
          2200: {
            slidesPerView: 6,
          },
        }}
      >
        {allItems?.map((item) => (
          <SwiperSlide 
          className="py-6"
          key={item.id}>
            <Card
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating || "4.5"}
              reviews={item.reviews || ""}
              avarage_rating={item.avarage_rating || "5"}
              total_reviews={item.total_reviews || "1"}
              count={item.count}
              stock={item.stock}
              category={item.category}
              image={item.images?.[0] || ""}
              hoverImage={
                item.images?.[1] || item.images?.[0] || ""
              }
              subImages={item.images || []}
              sizes={item.sizes}
              colors={item.colors}
              discount={Number(item.discount).toFixed(0)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default ScrollingProducts;