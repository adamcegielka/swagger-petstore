[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Playwright.dev](https://img.shields.io/badge/API%20reference-Playwright-D0422C.svg)](https://playwright.dev/docs/api/class-playwright)
[![Support badge](https://img.shields.io/badge/stackoverflow-Playwright-45ba4b.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/playwright)
<br>

# Swagger Petstore API Testing Project

This project includes API tests for [Swagger Petstore](https://petstore.swagger.io/), written using Playwright. In addition, tests in the Postman environment are included with the project.

### Project structure

```bash
/swagger-petstore
  ├── .github
  │   └── workflows
  ├── data
  │   └── login.data.ts
  ├── env
  │   └── .env
  │   └── global.ts
  ├── postman
  │   ├── SwaggerPetstore.postman_collection.json
  │   └── environment
  │       └── SwaggerPetstore.postman_environment.json
  ├── tests
  │   └── api
  │       └── GET.spec.ts
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

1. Import the SwaggerPetstore.postman_collection.json into Postman.
2. Import the SwaggerPetstore.postman_environment.json environment into Postman.
3. Run the collection in Postman.