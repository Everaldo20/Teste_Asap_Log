describe('Avaliacao Asap Log', ()  => {

    //Primeiro passo - Define o que vai acontecer, antes de cada caso de teste.
beforeEach(() => {
cy.visit('https://www.casasbahia.com.br');

})

it.only('digita termo de pesquisa e clica na lupa'
    , () => {
        
         //espera, clica para fechar o popup cookies
        cy.wait(2000);
        cy.get('#btnContinueClose').click()
        
        //digita campo de busca
        cy.get('#txtBuscaProd').type('Televisores');
        
        //espera alguns segundos
        cy.wait(2000);

        //clica lupa de pesquisa e espera segundos
        cy.get('#btnPesquisa').click();
        
        //pesquisa o produto "Smart TV 50" QLED 4K Samsung", clica e espera
        cy.contains('h2', 'Smart TV 50" QLED 4K Samsung').click();
        cy.wait(5000);

        //clica botão de compra
        cy.get('#btnpwrULHHSAU2fCG2w').click();
        cy.wait(5000);

        //clica botão continuar a compra
        cy.get('#btnContinuar').click();
        cy.wait(10000);

        //digita cep e clica no botão de calcular frete
        cy.get('#inputcep').type('13222460');
        cy.wait(2000);
        cy.get('#btnfrete').click()

        //clica botão finaliza compra no site
        cy.wait(2000);
        cy.get('#btn_finaliza_site').click();

        /// digita dados para finalizar compra
        cy.wait(3000);
        cy.get('#txtLogin').type('everaldobarros.face2021.com.br');
        cy.get('.cardsingle__forms--item > :nth-child(3) > .btn').click();

        cy.wait(3000);
        cy.get('#password').type('Elias@3193');
        cy.wait(3000);
        cy.get('#btn_continuar_senha').click();

})

})
