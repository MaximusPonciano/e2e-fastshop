import LoginPage from '../support/commands/loginCommands'

describe('Login FastShop', () => {
  it('Deve logar com sucesso usando variáveis de ambiente', () => {
    LoginPage.acessar()
    LoginPage.preencherLogin() 
    LoginPage.clicarNoBotao()
  
  })
})