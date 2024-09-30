import config from "config";
import nodemailer, { Transporter } from "nodemailer";
import { Message, NotificationTransport } from "./types/notification-types";
import logger from "./config/logger";

export class MailTransport implements NotificationTransport {
    private transporter: Transporter
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.get("mail.host"),
      port: config.get("mail.port"),
      secure: false, // true for port 465, false for other ports
      auth: {
        user: config.get("mail.auth.user"),
        pass: config.get("mail.auth.pass"),
      },
    });
  }
  async send(message: Message) {
    const info = await this.transporter.sendMail({
        from: config.get("mail.from"),
        to: message.to,
        subject: message.subject,
        text: message.text,
        html: message.html,  
    });

    logger.info("Message sent: ", info.messageId);
  }
}


const mail = new MailTransport();

mail.send({
    to: "daniel.gyan@gmail.com",
    text: "Thanks for using PizzoMoto!",
});