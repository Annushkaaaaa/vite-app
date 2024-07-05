import { ClickerPage } from './ClickerPage'

describe("Render testing", () => {
  it("Rendering button and label", ()=> {
    cy.mount(<ClickerPage />)

    cy.get('[data-cy="clicker-counter-window"]').should('contains.text', '0')
    cy.get('[data-cy="clicker-button"]').should('contains.text', 'Click on me!')
  })
})

describe("Processing testing", () => {
  it("Clicking on button should increase counter value", ()=> {
    cy.mount(<ClickerPage />)

    cy.get('[data-cy="clicker-button"]').click()
    cy.get('[data-cy="clicker-counter-window"]').should('contains.text', '1')
  })
})