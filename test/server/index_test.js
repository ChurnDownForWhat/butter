require(TEST_HELPER) // <--- This must be at the top of every test file.

const request = require('supertest-as-promised')
const routes = require(__server + '/index.js')
const db = require(__server + '/config/db.js')



describe('The Server', function () {
  const app = TestHelper.createApp()
  app.use('/', routes)
  app.testReady()
  // it_('serves an example endpoint', function * () {
  //   //
  //   // Notice how we're in a generator function (indicated by the the *)
  //   // See test/test-helper.js for details of why this works.
  //   //
  //   yield request(app)
  //     .get('/api/tags-example')
  //     .expect(200)
  //     .expect(function (response) {
  //       expect(response.body).to.include('node')
  //     })
  // })

  // it_('serves up a user', function * () {
  //   try {
  //     const user = yield request(app)
  //     .get('/user')
  //     .then((response) => response.body )
  //     expect(user.name).to.equal("steve")
  //     expect(user.id).to.be.a('number')
  //     expect(user.id).to.equal(1)
  //   } catch(error) {
  //     throw new Error({message: `Can't retrieve user`})
  //   }
  // })
  it_('stores a user and responds',function * () {
    const user = {firstName: "Darion", lastName: "Freeman", email: "pass@test.com"}
    yield request(app)
      .post('/user')
      .send(user)
      .expect(function(response){
        expect(response.body.id).to.be.a("number")
      })
  })
})
