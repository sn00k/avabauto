import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';
import { useCompiler } from '#vue-email';

const config = useRuntimeConfig();
console.log('MailerSend API key:', config.mailerSendApiKey);

const mailerSend = new MailerSend({
  apiKey: config.mailerSendApiKey,
});

const sentFrom = new Sender(
  // 'info@avabauto.se',
  'avab.auto.kontakt@trial-0r83ql3o8zmlzw1j.mlsender.net',
  'avabauto.se kontaktformulär',
);
// const recipients = [new Recipient('avin@avabauto.se', 'Avin Baker')];
const recipients = [new Recipient('robin@robins.nu', 'Robin Nilsson')];

export default defineEventHandler(async (event) => {
  const { name, email, message } = await readBody(event);

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
    return { message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email', error);
    throw error;
  }
});
