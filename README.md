# Interview Scheduler

React application that allows users to book and cancel interviews. it combines a concise API with a WebSocket server to build a realtime experience.

## Final Product

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