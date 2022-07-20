escribe('Escolher Bandeira', ()=> {

    it('Casas Bahia', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://www.casas.bahia.com.br'
        }).then((res) => {
           expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
           expect(res.body[0]).to.have.property('description')
           expect(res.body[0].description).to.be.equal('Casas Bahia') 
        }

        )
    })

  it('Casas Bahia', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://www.pontofrio.com.br'
        }).then((res) => {
           expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
           expect(res.body[0]).to.have.property('description')
           expect(res.body[0].description).to.be.equal('Ponto') 
        }

        )
    })

    it('Casas Bahia', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://www.extra.com.br'
        }).then((res) => {
           expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
           expect(res.body[0]).to.have.property('description')
           expect(res.body[0].description).to.be.equal('Exta') 
        }

        )
    })
})
