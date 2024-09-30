export enum OrderEvent {
    ORDER_CREATE = "ORDER_CREATE",
    PAYMENT_STATUS_UPDATE = "PAYMENT_STATUS_UPDATE",
    ORDER_STATUS_UPDATE = "ORDER_STATUS_UPDATE",
}

export enum OrderStatus {
    RECIEVED = "received",
    CONFIRMED = "confirmed",
    PREPARED = "prepared",
    OUT_FOR_DELIVERY = "out_for_delivery",
    DELIVERED = "delivered",
    CANCELLED = "cancelled",
}

export enum PaymentStatus {
    PENDING = "pending",
    PAID = "paid",
    FAILED = "failed",
}

export enum PaymentMode {
    CASH = "cash",
    CARD = "card",
}