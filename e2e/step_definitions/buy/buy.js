import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I am on the web page",()=>{
    cy.visit("https://www.demoblaze.com/");
    cy.title().should("eq", "STORE");
})

When("I selct two items",()=>{
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#nava').click();
    cy.get(':nth-child(6) > .card > :nth-child(1) > .card-img-top').click();
    cy.get('.col-sm-12 > .btn').click();
})

And("I fill the purchase form",()=>{
    cy.get('#cartur').click();
    cy.get('.col-lg-1 > .btn').click();
    cy.get('#name').type("Sebastián Donoso").tab();
    cy.get('#country').type("Ecuador").tab();
    cy.get('#city').type("Quito").tab();
    cy.get('#card').type("123-456-7890").tab();
    cy.get('#month').type("Enero").tab();
    cy.get('#year').type("2030");
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
          
})

Then("I have a successful purchase",()=>{
    cy.get('.confirm').click();
})