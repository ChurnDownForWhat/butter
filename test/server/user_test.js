// require(TEST_HELPER) // <--- This must be at the top of every test file.

// const request = require('supertest-as-promised')
// const routes = require(__server + '/index.js')
// const db = require(__server + '/config/db.js')
// const app = TestHelper.createApp()
// app.use('/', routes)
// app.testReady()


// describe('The Server', function () {

//   it_('stores a user and responds',function * () {
//     const user = {firstName: "Darion", lastName: "Freeman", email: "lel@test.com"}
//     try {
//       //sets response constant
//       const response = yield request(app)
//       .post('/api/user')
//       .send(user)
//       .expect(201)
//       //the user id should be in the resonse body
//       userId = response.body.id
//       expect(userId).to.be.a("number")
//     } catch(err) {

//       throw new Error(err)

//     }
//   })
// })
