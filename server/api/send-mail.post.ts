import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';
import { useCompiler } from '#vue-email';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || '',
});

const sentFrom = new Sender(
  'kontakt@avabauto.se',
  // 'avab.auto.kontakt@trial-0r83ql3o8zmlzw1j.mlsender.net',
  'AVAB Auto kontaktformulär',
);
const recipients = [new Recipient('robin@robins.nu', 'Robin Nilsson')];

export default defineEventHandler(async (event) => {
  const { name, email, message } = await readBody(event);
  const error = false;

  const template = await useCompiler('contact.vue', {
    props: {
      name,
      email,
      message,
    },
  });

  const options = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject('Nytt meddelande från ' + name)
    .setHtml(template.html);

  try {
    await mailerSend.email.send(options);
  } catch (error: any) {
    console.error('Error sending email', error);
    error = true;
  }
  return { message: 'Email sent', error };
});
