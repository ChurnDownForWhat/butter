require(TEST_HELPER)

const request = require('supertest-as-promised')
const routes = require(__server + '/index.js')
const db = require(__server + '/config/db.js')
const app = TestHelper.createApp()

app.use('/', routes)
app.testReady()

before('truncate db tables', function(){
  db.deleteEverything()
})

describe('save card', function () {
  it_('stores a card and responds with the ID', function * () {
    const card = { name: 'Mariott Rewards',
                    cardType: 'Visa',
                    user_id: 1,
                    balance: 1000,
                    expiration: "2018-12-12",
                    applicationDate: "2016-3-4",
                    spendDeadline: '2016-12-12',
                    monthlyBilldate: 22,
                    expCancelDate: '2017-12-12',
                    rewardsAmt: 500,
                    last4digits: 1211,
                    spendTotal: 5000,
                    annBenefit: 300,
                    annFeeAmt: 50,
                    waivedFees: true,
                    creditLine: 1500,
                    signupBonus: 100,
                    minSpend: 3000 }
    yield request(app)
      .post('/api/cards')
      .send(card)
      .expect(function (response) {
        expect(response.body).to.be.an('number')
      })
  })
})

describe('getAllCards', function () {
  it_('should return all cards in the database', function * () {
    yield request(app)
    .get('/api/users/1/cards')
    .expect(200)
    .expect(function (res) {
      expect(res.body).to.be.an('array')
    })
  })
})

describe('getOneCard', function () {
  it_('should return the card name from the database', function * () {
    yield request(app)
    .get('/api/cards/27')
    .expect(200)
    .expect(function (response) {
      expect(response.body).to.be.an('object')
      expect(response.body.name).to.equal('Mariott Rewards')
      expect(response.body.id).to.equal(27)
    })
  })
})

describe('updateCard', function () {
  it_('should return the updated card info', function * () {
    const card = { name: 'Mariott Rewards' , expCancelDate: '2018-12-12' }
    yield request(app)
    .put('/api/cards/27')
    .send(card)
    .expect(200)
    .expect(function (response) {
      expect(response.body).to.be.an('object')
      expect(response.body.name).to.equal('Mariott Rewards')
      expect(response.body.id).to.equal(27)
    })
  })
})

describe('removeCard', function () {
  it_('should delete a card from the database', function * () {
    yield request(app)
    .delete('/api/cards/1')
    .expect(200)
    .expect(function (response) {
      expect(response.body).to.be.a('number')
    })
  })
})

// describe('getDefaults', function () {
//   it_('should return all default cards', function * () {
//     yield request(app)
//     .get('/api/defaults')
//     .expect(200)
//     .expect(function (response) {
//       expect(response.body).to.be.an('array')
//     })
//   })
// })
