const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY, MY_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

async function sendEmail(data) {
    const message = {
        ...data,
        from: `${MY_EMAIL}`
    };

    await sgMail.send(message);
}

module.exports = {
    sendEmail
};
