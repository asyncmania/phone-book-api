# phone-book-api

An expressive API for contact details

1. how to run the project

   Install dependencies 

     a. yarn install

        create an .env from the .env.sample

   Run Migrations

     b. npx sequelize-cli db:migrate   

   Run the tests

     c. yarn test

   Start the app
   
     d. yarn start 


2. a. Use of an IOC container (typedi library) to manage and make dependency injection more convienient.

   b. Used inversion of control, programmed to an interface instead of concrete classes. This allowed me to 
      write mocks and there by testable code.

   c. Added authentication using a middleware, a stateless auth (basic authentication).

   d. decoupled user lookup logic by making basicAuth module a middleware factory.

   e. async error are handle using a higher order fn catchAsync.


3. My Contact

   ilesanmi.josiah@gmail.com    

   