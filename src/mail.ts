import config from "config";
import nodemailer, { Transporter } from "nodemailer";
import { Message, NotificationTransport } from "./types/notification-types";
import logger from "./config/logger";

export class MailTransport implements NotificationTransport {
    private transporter: Transporter
  constructor() {
    console.log("MailTransoport creds: ", {host: config.get("mail.host"), port: config.get("mail.port"), user: config.get("mail.auth.user"), pas: config.get("mail.auth.pass")});
    this.transporter = nodemailer.createTransport({
      host: config.get("mail.host"),
      port: config.get("mail.port"),
      // secure: false, // true for port 465, false for other ports
      secure: true, // true for port 465, false for other ports
      auth: {
        user: config.get("mail.auth.user"),
        pass: config.get("mail.auth.pass"),
      },
      debug: true, // include SMTP traffic in the console
    });
    logger.info("Mail transport created" );
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