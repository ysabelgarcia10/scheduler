# Interview Scheduler

React application that allows users to book and cancel interviews. it combines a concise API with a WebSocket server to build a realtime experience.

## Final Product
Scheduler Landing Page
![Scheduler Landing Page](https://github.com/ysabelgarcia10/scheduler/blob/master/public/images/form-landing-page.png?raw=true)

Create an Appointment/Edit Interview
![Create an Appointment/Edit Interview](https://github.com/ysabelgarcia10/scheduler/blob/master/public/images/form-test-or-create.png?raw=true)

Delete an Interview
![Delete an Interview](https://github.com/ysabelgarcia10/scheduler/blob/master/public/images/form-delete.png?raw=true)

Validation Message/Status/Error Handling
![Validation Message/Status/Error Handling](https://github.com/ysabelgarcia10/scheduler/blob/master/public/images/messages-validation-status-error-handling.png?raw=true)

Test - Jest
![Test - Jest](https://github.com/ysabelgarcia10/scheduler/blob/master/public/images/test-jest.png?raw=true)

Test - Test Coverage
![Test - Test Coverage](https://github.com/ysabelgarcia10/scheduler/blob/master/public/images/test-coverage.png?raw=true)

Test - Storybook
![Test - Storybook](https://github.com/ysabelgarcia10/scheduler/blob/master/public/images/test-storybook.png?raw=true)

Test - Cypress
![Test - Cypress](https://github.com/ysabelgarcia10/scheduler/blob/master/public/images/test-cypress.png?raw=true)

# Getting Started

## Setup

1. Install dependencies with `npm install`.
2. Install the server [scheduler-api](https://github.com/ysabelgarcia10/scheduler-api) on a separate directory. 
3. Run the server by using the 'npm start'.
4. Run the client scheduler by using the 'npm start'.

## Dependencies
* axios
* classnames
* normalize.css
* react
* react-dom
* react-scripts

## Running Webpack Development Server
Server & Client
```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

Test Coverage
```sh
npm test -- --coverage --watchAll=false
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Cypress

Server/Test API
```sh
npm run test:server
```

Client Side
```sh
npm run cypress
```