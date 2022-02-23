/// <reference types="cypress" />


var nodemailer = require('nodemailer');
describe("Sample Test",()=>{
    it("first test",()=>{
        cy.visit('https://www.google.com') 
          })
    it("check",()=>{
    cy.task("check",".lnXdpd").should('eq',"true").then(()=>{
      cy.log("true")
    })

  
    })
})

  
    