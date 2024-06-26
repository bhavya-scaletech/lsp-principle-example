export abstract class NotificationService {
  recipient: string;
  message: string;

  constructor(recipient: string, message: string) {
    this.recipient = recipient;
    this.message = message;
  }

  abstract send(): void;
}

export class EmailNotification extends NotificationService {
  constructor(recipient: string, message: string) {
    super(recipient, message);
  }

  send(): void {
    console.log(`Sending email to ${this.recipient}: ${this.message}`);
  }
}

export class SmsNotification extends NotificationService {
  constructor(recipient: string, message: string) {
    super(recipient, message);
  }

  send(): void {
    console.log(`Sending SMS to ${this.recipient}: ${this.message}`);
  }
}

export class EmailNotificationWithAttachment extends EmailNotification {
  attachment: string | null;

  constructor(
    recipient: string,
    message: string,
    attachment: string | null = null
  ) {
    super(recipient, message);
    this.attachment = attachment;
  }

  send(): void {
    if (this.hasAttachment()) {
      console.log(
        `Sending email to ${this.recipient} with attachment: ${this.message}, Attachment: ${this.attachment}`
      );
    } else {
      super.send();
    }
  }

  hasAttachment(): boolean {
    return !!this.attachment;
  }
}

const notifications: NotificationService[] = [
  new EmailNotification("user@example.com", "Hello!"),
  new SmsNotification("1234567890", "Hello!"),
  new EmailNotificationWithAttachment("user@example.com", "Hello!", "file.pdf"),
  new EmailNotificationWithAttachment("user@example.com", "Hello!"),
];

notifications.forEach((notification) => {
  notification.send();
});
