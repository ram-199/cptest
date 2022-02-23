/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)



/**
 * 
 * 
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('task', {
    check(some){
      cy.get("body").then($body => {
        if ($body.find(some).length > 0) {   
            return "true"
        }
        return "false"
    });
    }
});
  require('cypress-mochawesome-reporter/plugin')(on);
};
//   on('task', {
//     sendMail(s){
//       console.log(s)
//       return null
//       // var mailOptions = {
//       //   from: 'naaperuram7@gmail.com',
//       //   to: 'ramu36985@gmail.com',
//       //   subject: 'Report',
//       //   text: s
//       // };
//       // transporter.sendMail(mailOptions, function(error, info){
//       //   if (error) {
//       //     cy.log(error);
//       //   } else {
//       //     cy.log('Email sent: ' + info.response);
//       //   }
//       // });
//     }
// });


  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
// }
