describe('empty spec', () => {
 

    beforeEach(() => {
      cy.visit('minha-conta/')
    });

    afterEach(() => {
      cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_aluno20 (não é teste_aluno20? Sair)')
    
  })

  it('Deve exibir uma mensagem de erro ao insserir usuário inválido', () => {
    cy.get('#username').type('3porcrito@.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Erro: O usuário 3porcrito@.com não está registrado neste site.')
  })

  
  it('Deve exibir uma mensagem de erro ao inspecionar senha inválida', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

  })
    
})