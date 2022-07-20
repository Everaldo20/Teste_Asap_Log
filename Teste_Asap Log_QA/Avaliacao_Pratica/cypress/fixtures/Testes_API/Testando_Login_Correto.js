describe('Login no site Casas Bahia', () => {

    beforeEach(() => {
      cy.visit('https://www.casasbahia.com.br.com')

     })

    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('verifica mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('everaldo');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
     
    })

    it('verifica mensagens de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('Elias@3193');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
     
    })

    it('fazer login de usuario valido', () => {
        cy.login('everaldobarros.face2021.com.br', 'Elias@3193');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuario invalido', () => {
        cy.login('eveveraldobarros.face2021.com.br', 'Elias3192');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })

    })

