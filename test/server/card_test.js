require(TEST_HELPER)

const request = require('supertest-as-promised')
const routes = require(__server + '/index.js')
const db = require(__server + '/config/db.js')
const app = TestHelper.createApp()

app.use('/', routes)
app.testReady()

describe('createCard', function () {
  it_('stores a card and responds with the card id', function * () {
    const card = { cardName: 'Mariott Rewards' }
    yield request(app)
      .post('/api/cards')
      .send(card)
      .expect(function (response) {
        expect(response.body.id).to.be.a('number')
      })
  })
})

describe('getAllCards', function () {
  it_('should return all cards in the database', function * () {
    yield request(app)
    .get('/api/users/:id/cards')
    .expect(200)
    .expect(function (res) {
      expect(res.body).to.be.an('array')
      expect(res.body[0]).should.include('id')
    })
  })
})

describe('getOneCard', function () {
  it_('should return the card name from the database', function * () {
    yield request(app)
    .get('/api/cards/:id')
    .expect(200)
    .expect(function (response) {
      expect(response.body.id).to.equal(request.body.id)
    })
  })
})

describe('updateCard', function () {
  it_('should return the updated card info', function * () {
    yield request(app)
    .put('/api/cards/:id')
    .expect(200)
  })
})

describe('removeCard', function () {
  it_('should delete a card from the database', function * () {
    yield request(app)
    .delete('api/cards/:id')
    .expect(200)
  })
})

describe('getDefaults', function () {
  it_('should return all default cards', function * () {
    yield request(app)
    .get('api/defaults')
    .expect(200)
  })
})
