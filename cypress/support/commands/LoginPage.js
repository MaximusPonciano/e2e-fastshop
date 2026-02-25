import { LOGIN_ELEMENTS } from '../elements/LoginElements'

class LoginPage {
  acessar() {
    cy.visit('https://site.fastshop.com.br/api/io/login')
    cy.wait(5000);
    
  }


  preencherLogin(email) {
  if (email) {
    cy.get(LOGIN_ELEMENTS.inputEmail).type(email)
  } else {
    const emailFinal = Cypress.env("userEmail")

    if (!emailFinal) {
      throw new Error("userEmail não encontrado no cypress.env.json")
    }

    cy.get(LOGIN_ELEMENTS.inputEmail).type(emailFinal)
  }
}

  clicarNoBotao() {
    cy.get(LOGIN_ELEMENTS.btnSubmit).click()
  }
}

export default new LoginPage()