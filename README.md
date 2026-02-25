# 🚀 E2E FastShop - Automação com Cypress

![Cypress](https://img.shields.io/badge/Cypress-Testing-green?logo=cypress)
![Node](https://img.shields.io/badge/Node.js-16+-brightgreen?logo=node.js)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)

Projeto de automação End-to-End (E2E) desenvolvido com **Cypress**, aplicando boas práticas como **Page Object Model (POM)** e organização modular.

Este repositório faz parte do meu desenvolvimento como QA Automation Engineer para estudo pessoal🚀

---

## 📌 Objetivo

Automatizar o fluxo de login do site da FastShop, garantindo:

- ✔ Validação de carregamento da página
- ✔ Preenchimento de campos via variável de ambiente
- ✔ Execução controlada de ações
- ✔ Validação de redirecionamento
- ✔ Estrutura escalável para novos cenários

---

## 🛠 Tecnologias Utilizadas

- 🟢 Node.js  
- 🌲 Cypress  
- 📜 JavaScript  

---

## 📂 Estrutura do Projeto


cypress/
├── e2e/
│ └── login.cy.js
├── fixtures/
├── support/
│ ├── commands/
│ │ └── LoginPage.js
│ ├── elements/
│ │ ├── LoginElements.js
│ │ └── HomeElements.js
│ └── e2e.js

cypress.config.js
package.json


### 🧩 Padrão Arquitetural

O projeto utiliza:

- ✅ Page Object Model (POM)
- ✅ Separação de responsabilidades
- ✅ Centralização de elementos
- ✅ Uso de variáveis de ambiente

---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/MaximusPonciano/e2e-fastshop.git
2️⃣ Acesse a pasta
cd e2e-fastshop
3️⃣ Instale as dependências
npm install
🔐 Configuração de Variáveis de Ambiente

Crie um arquivo na raiz do projeto chamado:

cypress.env.json

Exemplo:

{
  "userEmail": "seuemail@email.com"
}


▶ Executando os Testes
npx cypress open

Selecione o teste login.cy.js.

⚡ Modo headless (terminal)
npx cypress run
