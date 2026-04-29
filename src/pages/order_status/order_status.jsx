import React from "react";
import MoreShopping from "../../components/user_profile_components/order_details/more_shopping";
import OrderStatusDetails from "../../components/user_profile_components/order_details/order_status_details";

const OrderStatus =()=>{
    return(
        <div className="p-2 lg:p-6">
            <OrderStatusDetails/>
            <MoreShopping/>
        </div>
    )
}
export default OrderStatus;