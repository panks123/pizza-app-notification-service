import { OrderEvent, PaymentMode, PaymentStatus } from "../types";
import config from "config";

export const handleOrderText = (order) => {
    if(order.event_type === OrderEvent.ORDER_CREATE && order.data.paymentMode === PaymentMode.CASH) {
        return `Thank you for ordering from PizzoMoto. \n\n Your order id is: ${order.data._id}`;  
    }
    // Todo : handle proper checks and message structure
    else if(order.event_type === OrderEvent.ORDER_CREATE && order.data.paymentMode === PaymentMode.CARD && order.data.paymentStatus === PaymentStatus.PAID)  {
        return `Thank you for ordering from PizzoMoto. \n\n Your order id is: ${order.data._id}`;
    }
    return "Thank you for your order."
}

export const handleOrderHtml = (order) => {
    if(order.event_type === OrderEvent.ORDER_CREATE && order.data.paymentMode === PaymentMode.CASH) {
        return `<h4>Thank you for ordering from PizzoMoto.</h4>
        <h5>Your order id is: <a href="${config.get("frontend.clientUI")}/orders/${order.data._id}">${order.data._id}</a></h5>`;  
    }
    // Todo : handle proper checks and message structure
    else if(order.event_type === OrderEvent.ORDER_CREATE && order.data.paymentMode === PaymentMode.CARD && order.data.paymentStatus === PaymentStatus.PAID)  {
        return `<h4>Thank you for ordering from PizzoMoto.</h4>
        <h5>Your order id is: <a href="${config.get("frontend.clientUI")}/orders/${order.data._id}">${order.data._id}</a></h5>`; 
    }

    return "Thank for visiting PizzoMoto."
}