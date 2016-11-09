require(TEST_HELPER)

const request = require('supertest-as-promised')
const routes = require(__server + '/index.js')
const db = require(__server + '/config/db.js')
const app = TestHelper.createApp()

app.use('/', routes)
app.testReady()

describe('getAllDefaultCards', function (){
  it_('should return all the default cards', function * () {
    try {

    } catch(err) {
      throw new Error(err)
    }
    yield request(app)
    .get('/api/default')
    .expect(200)
    .expect(function (res) {
      expect(res.body).to.be.an('array')
    })
  })

  it_('should hold all the default cards', function * () {
    try {

    } catch(err) {
      throw new Error(err)
    }
    yield request(app)
    .get('/api/default')
    .expect(200)
    .expect(function (res) {
      expect(res.body.length).to.equal(25)
    })
  })
})
