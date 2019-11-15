const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'guilherme@cloudspeed.com.br',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'guilherme@cloudspeed.com.br',
        subject: 'Godbye',
        text: `Obrigado por ter usado o nosso app ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
