import LoginPage from '../support/commands/LoginPage'

describe('Login FastShop', () => {
  it('Deve logar com sucesso usando variáveis de ambiente', () => {
    LoginPage.acessar()
    LoginPage.preencherLogin() 
    LoginPage.clicarNoBotao()
  
  })
})