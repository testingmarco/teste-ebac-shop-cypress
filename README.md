# teste-ebac-shop-cypress
TESTE-SHOP-CYPRESS

Package e2e
01 File Login-com-sucesso.spec.cy.js

CENÁRIOS

- DEVE FAZER LOGIN COM SUCESSO
- DEVE EXIBIR UMA MENSAGEM DE ERRO AO INSERIR USUÁRIO INVÁLIDO
- VALIDAR MENSAGEM SE EMEIL É INVÁLIDO 
- DEVE EXIBIR UMA MENSAGEM DE ERRO AO INSERIR SENHA INVÁLIDA 
- VALIDAR MENSAGEM SENHA INVÁLIDA

Package e2e
02 File pre-cadstro.spec.cy.js

CENÁRIOS

- DEVE COMPLETAR O PRÉ CADSTRO COM SUCESSO
- USAR A BIBLIOTECA FAKER PARA EMAIL E SENHA
- VALIDAR SE DETALHES DA CONTA FORAM MODIFICADOS COM SUCESSO

Package e2e
03 File produtos.spec.cy.js

CENÁRIOS

- DEVE SELECIONAR UM PRODUTO DA LISTA
- DEVE ADICIONAR UM PRODUTO AO CARRINHO
- VALIDAR SE FOI ADICIONADO UM PRODUTO AO CARRINHO
- VALIDAR QUANTIDADE 'Augusta Pullover Jacket” foram adicionados no seu carrinho.'

PASSOS PARA CRIAR UM SCRIPT INICAL NO CYPRESS 10

00 - CRIAR A PASTA login.spec.js na Pasta end2end

---------------------------------------------------------------------------
1 - ///comando para referenciar o cypress e ele entender que eu vou usar os métodos do cypress

	/// <reference types="cypress" />

2 - /// Criar um bloco de funcionalide que é a descrição do seu projeto ou contexto dele
    a /// context( )
    b /// criar uma string com aspas simples
    c /// depois vírgula. abrir e fechar parêntes, e vai criar uma function =>{ }
    d /// e dentro vamos criar nosso cenário de testes
  
	context('Funcinalidade Login', () =>{ 

3 - /// Para criar meu cenário de testes eu vou escerver it( ) e escreva uma string, virgula e a function novamente =>{ }

	    it('Deve fazer login com sucesso' () =>{

4 - // E aqui dentro do bloco vou colocar minhas ações e depois posso até testar se está dando certo
       Crie seus casos de testes primeiro e só depois implemente os cenário e não esquecer de testar
       o site manualmente primeiro para enter o que fazer, entenda toda regra de negócio primeiro.
       
       ///Quando: Eu acessar o site
       ///E: fazer meu login com emeil e senha válido
       ///E: Clicar no botão Login	
      /// Então: me direciona para página Minha conta

5 - Criar minha primeira ação de visitar o site

	    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

6 - Mais o elemento precisa de uma ação então vamos um (cy.ge( )) e um ponto (.type( )) para gigitar
    lembrando que se você pegar o elemento na página e copiar é só colar que ele já vem pronto

	    cy.get('#username').type('aluno_ebac@teste.com')
	    cy.get('#password').type('aluno_ebac@teste.com')

7 - Para clicar no botão e passar para outra página é só usar o método cy.get( ).click( )
	    cy.get('.woocommerce-form > .button').click()

8 - Por ultimo validar ou seja (ter um resultado esperado) para o teste pode ser um texto ou algo que 
    valide que eu fiz o login

	    cy.get('.page-title).should('contain', 'Minha conta')
	    cy.get('.woocommerce-MyAccount-content> :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? sair)') 

	})	

9 - /// Depois posso criar um segundo caso de tetes ou mais e assim por diante

	it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{

	    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
	    cy.get('#username').type('ebac@teste.com')
	    cy.get('#password').type('teste@teste')
	    cy.get('.woocommerce-form > .button').click()
	    
	    cy.get('.woocommerce-error').shold('contain', 'Endereço de e-mail desconhecido.')

		
	})



</p>
<br/><br/>
<p>
    <img align=left margin=10 width=80 src="https://avatars.githubusercontent.com/u/99621895?s=400&u=6fc34c3626dca02a7ffaf540e887dd687fd93159&v=4"/>
    <p>&nbsp&nbsp&nbspMarco Aurelio R Ramos<br>
    &nbsp&nbsp&nbsp<a href="https://twitter.com/testingmarco?t=OoFCoh2Y1wa0oSbkOx1phA&s=08/">twitter</a>&nbsp;|&nbsp;<a href="https://github.com/testingmarco">GitHub</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/in/marcoa100/">LinkedIn</a>

