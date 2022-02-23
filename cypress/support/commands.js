// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'naaperuram7@gmail.com',
//     pass: 'ramu9398564664'}
// });
// function sendMail(s){
//   const d = new Date()
//   transporter.sendMail({
//     from: 'naaperuram7@gmail.com',
//     to: 'ramu36985@gmail.com',
//     subject: d.toISOString(),
//     text: s
//     // attachments: [
//     //   {   // utf-8 string as an attachment
//     //       filename: 'lat.html',
//     //       path:'cypress/reports/index.html'
//     //   }]
//   });
// }
// Cypress.Commands.add('mail',(email) =>{sendMail(email)})
"import 'cypress-mailosaur'" 
