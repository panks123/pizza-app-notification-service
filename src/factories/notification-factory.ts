import { MailTransport } from "../mail";
import { NotificationTransport } from "../types/notification-types";

const transports: NotificationTransport[] = [];

export const createNotificationTransport = (type: "mail" | "sms"): NotificationTransport => {
    switch (type) {
        case "mail":{
            // Make singleton
            const requiredTransportCache = transports.find((transport) => transport instanceof MailTransport);
            if(requiredTransportCache) return requiredTransportCache;
            const instance = new MailTransport();
            transports.push(instance);
            return instance;
        }
        case "sms":
            // return new SmsTransport(); 
            throw new Error("SMS Notification Not Supported Yet");
        default:
            throw new Error(`${type} Notification provider is not supported`); 
    }
}