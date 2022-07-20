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
        
    })
})
