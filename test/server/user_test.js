require(TEST_HELPER) // <--- This must be at the top of every test file.

const request = require('supertest-as-promised')
const routes = require(__server + '/index.js')
const db = require(__server + '/config/db.js')



describe('The Server', function () {
  const app = TestHelper.createApp()
  app.use('/', routes)
  app.testReady()

  it_('stores a user and responds',function * () {
    const user = {firstName: "Darion", lastName: "Freeman", email: "fail@test.com"}
    yield request(app)
      .post('/api/user')
      .send(user)
      .expect(function(response){
        expect(response.body.id).to.be.a("number")
      })
  })
})
