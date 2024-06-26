export abstract class Notification {
  recipient: string;
  message: string;

  constructor(recipient: string, message: string) {
    this.recipient = recipient;
    this.message = message;
  }

  abstract send(): void;
}

export class EmailNotification extends Notification {
  constructor(recipient: string, message: string) {
    super(recipient, message);
  }

  send(): void {
    console.log(`Sending email to ${this.recipient}: ${this.message}`);
  }
}

export class SmsNotification extends Notification {
  constructor(recipient: string, message: string) {
    super(recipient, message);
  }

  send(): void {
    console.log(`Sending SMS to ${this.recipient}: ${this.message}`);
  }
}

export class EmailNotificationWithAttachment extends EmailNotification {
  attachment: string | undefined;

  constructor(recipient: string, message: string, attachment?: string) {
    super(recipient, message);
    this.attachment = attachment;
  }

  send(): void {
    if (!this.hasAttachment()) {
      throw new Error("Attachment is missing");
    }
    console.log(
      `Sending email to ${this.recipient} with attachment: ${this.message}, Attachment: ${this.attachment}`
    );
  }

  hasAttachment(): boolean {
    return !!this.attachment;
  }
}

export function sendNotifications(notifications: Notification[]) {
  notifications.forEach((notification) => {
    notification.send();
  });
}

const notifications:Notification[] = [
  new EmailNotification("user@example.com", "Hello!"),
  new SmsNotification("1234567890", "Hello!"),
  new EmailNotificationWithAttachment("user@example.com", "Hello!", "file.pdf"),
  new EmailNotificationWithAttachment("user@example.com", "Hello!"),
];

sendNotifications(notifications);
