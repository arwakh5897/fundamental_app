import React from "react";
import RamadanTitle from "../../components/titles/ramadanTitle";
import Ance from "../../components/titles/ance";
import MakeUpTitle from "../../components/titles/makeup";
import Card from "../../components/card/card";
import Banner from "../../components/banners/banner";
import Concern from "../../components/shopByConcern/concern";
import Brands from "../../components/brands/brands";
const Dashboard =()=>{
    return(
    <div>
       <Banner/>
       <div className="pt-0"><RamadanTitle/></div>
     <div className="pt-4"><Ance /></div>

         <MakeUpTitle/>
       <Concern/>
       <Brands/>
    </div>
    )
}
export default Dashboard;