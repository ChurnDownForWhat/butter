# Butter

A butter solution to churning.  We've created a single portal to track and help meet you're churning goals.  See a card's information you need to at a glance, and use the rewards page to view pertinent information about your points in different award programs.  Need to meet minimum spend for a card with only a few days left?  Buy what you need, be it Amazon credit cards(which never expire!) or your favorite book from our Amazon page so you can get that sign-up bonus and go on that trip you've been dreaming about or pocket that cash.  

## Getting Started

```
$ yarn        # installs dependencies
$ yarn start  # starts the development server

```

Now visit [localhost:4000](http://localhost:4000/)

### Running the Tests
There is a basic test framework in your `test/` folder. Here's how to use it:

```bash
$ npm test                 # runs all tests
$ npm test server/index.js # runs tests in a single file
```

### Built With
- React with Redux
- Node with Express
- D3
- Passport
- PostgreSQL

### WebPack

##Everything Else WebPack

##Hot Module Reloading
Butter uses webpack's hot module reloading to update packages and refresh pages without having to restart the server or reload the page manually, making it quicker and easier to see your changes in real time. This feature is a part of our webpack setup, so all you need to do is start the server.  

### PostgreSQL
We initially deployed our database on a website called ElephantSQL.  The free tier of this website is severly restricted and we were running with 'too many connections' issues fairly regularly with 5 developers consistently logging in and testing the application.  

### Deployment

### React & Redux

### Passport
Butter uses PassportJs for Google authentication and is located in directory location '/server/config'

Application id and secrets for Google are stored in environment variables CONKEY (for id) and CONSECRET (for secret).

Remember to store .env file in the root of the application and utilize dotenv node module.

- User info
  A logged in users info has reference in the request body server-side within the request.user attribute.

-Emails
  A user must allow access to their google email address for the app to log them in.

### Passport
Butter uses PassportJs for Google authentication and is located in directory location '/server/config'

Application id and secrets for Google are stored in environment variables CONKEY (for id) and CONSECRET (for secret).

Remember to store .env file in the root of the application and utilize dotenv node module.

- User info
  A logged in users info has reference in the request body server-side within the request.user attribute.

-Emails
  A user must allow access to their google email address for the app to log them in.

## Built With
- ReactJS with Redux
- NodeJS with Express
- D3
- Passport
- PostgreSQL
>>>>>>> Modifies layout for card form and adds passport info to the readme

### Express & Node

### D3

### PassPort

###  APIs Used
We are using the Amazon Product Advertising API for our amazon page.  This allows a user to search for an Amazon product on our website and then click on that item to take them to the Amazon page where they can purchase it.  When a user clicks our application's ID is associated with that click, which means we'd get the referral fees.  As with any API key, don't upload yours online by writing it into your server file and then pushing that up.  Store it and any other user specific information as an environment variable in a .env file.




## Contributors
- Joey Steinberger - Product Owner - @Josamuel on Github
- Darion Freeman - Scrum Master - @Darionfman on Github
- Jason Barnett - Team Member - @jhbarnett on Github
- Calvin Kniffin - Team Member - @calkniffin on Github
- Robert Guajardo - Team Member - @Robalexg on Github

## License

Copyright (C) 2016  ChurnDownForWhat

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
