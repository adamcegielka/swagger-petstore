[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Playwright.dev](https://img.shields.io/badge/API%20reference-Playwright-D0422C.svg)](https://playwright.dev/docs/api/class-playwright)
[![Postman](https://img.shields.io/badge/Learning%20Center-Postman-f26635.svg?logo=postman)](https://learning.postman.com/)
<br>

# Swagger Petstore API Testing Project

This project includes API tests for [Swagger Petstore](https://petstore.swagger.io/), written using Playwright. In addition, tests in the Postman environment are included with the project.

### Project structure

```bash
/swagger-petstore
  ├── .github
  │   └── workflows
  │       └── playwright-tests.yml
  ├── data
  │   └── login.data.ts
  ├── env
  │   └── .env
  │   └── global.ts
  ├── postman
  │   ├── Swagger-Petstore-Pet.postman_collection.json
  │   ├── Swagger-Petstore-Store.postman_collection.json
  │   ├── Swagger-Petstore-User.postman_collection.json
  │   └── environment
  │       └── Swagger-Petstore.postman_environment.json
  ├── tests
  │   └── api
  │       └── pet-GET-fine-by-status.spec.ts
  ├── .eslintrc.json
  ├── .gitignore
  ├── .prettierignore
  ├── .prettierrc.json
  ├── package-lock.json
  ├── package.json
  ├── playwright.config.ts
  └── README.md
```

### Playwright tests:

1. Clone repository: `git clone https://github.com/adamcegielka/swagger-petstore.git`
2. Install dependencies: `npm install`
3. Run tests: `npm run test`

### Postman tests:

1. Import collections into the Postman:
  - Swagger-Petstore-Pet.postman_collection.json
  - Swagger-Petstore-Store.postman_collection.json
  - Swagger-Petstore-User.postman_collection.json
2. Import the Swagger-Petstore.postman_environment.json environment into Postman.
3. Run the collection in Postman.

### Tutorials

- [Rest API Testing (Automation) with Playwright & TypeScript](https://www.udemy.com/course/rest-api-testing-automation-with-playwright-typescript)
- [Playwright: API Testing](https://www.youtube.com/watch?v=dFLEHJq9iCE)
- [Playwright with Javascript | Rest API Testing | HTTP Requests |Get,Post,Put & Delete](https://www.youtube.com/watch?v=I7qNaLmq6Cg)
- [Postman od podstaw - testowanie REST API - Udemi](https://www.udemy.com/course/postman-od-podstaw-testowanie-rest-api/)
- [Postman - testowanie REST API - Udemi](https://www.udemy.com/course/kurs-postman/)
- [Postman (REST API) - AkademiaQA](https://www.youtube.com/watch?v=Dc4RLZHzP1k&list=PLgfR8BjWJLg8c0d9B7LJoE1-gyKNTM-s1)
- [How to write automated tests with Postman](https://www.youtube.com/watch?v=z0MimkXIvE8&list=RDCMUCTBGXCJHORQjivtgtMsmkAQ&start_radio=1&rv=z0MimkXIvE8&t=853)
- [How to automate API Tests with Postman](https://www.youtube.com/watch?v=o5e7hHeJ17c&list=RDCMUCmWxXicbngdZAk0X2j8ZU9Q&start_radio=1)
- [Learn JavaScript for Postman API testing - Full Course for Beginners](https://www.youtube.com/watch?v=juuhb3W8xT4&list=RDCMUCUUl_HXJjU--iYjUkIgEcTw&start_radio=1&rv=juuhb3W8xT4&t=768)

### Author

Author: [Adam Cegiełka](https://github.com/adamcegielka)  
Happy API testing!