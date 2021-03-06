# Online Board

[![Build Status](https://travis-ci.org/andreasonny83/online-board.svg?branch=master)](https://travis-ci.org/andreasonny83/online-board)
[![CircleCI](https://circleci.com/gh/andreasonny83/online-board/tree/master.svg?style=svg)](https://circleci.com/gh/andreasonny83/online-board/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/andreasonny83/online-board/badge.svg?branch=master)](https://coveralls.io/github/andreasonny83/online-board?branch=master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project is running Live at [onlineboard.sonnywebdesign.com](https://onlineboard.sonnywebdesign.com)

## Note

If you are updating from a version <= 0.1.0, you must reinstall all the
npm dependencies with:

```sh
$ npm cache clean
$ npm install

# Or using Yarn

$ yarn upgrade
```


## Prerequisites

The project has dependencies that require Node 6.9.0 or higher, together
with NPM 3 or higher.

## Development server

Run `npm start` for a dev server.
Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project.
The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Deploying to Firebase

### Prerequisites

1. Create a free Firebase account at https://firebase.google.com
1. Create a project from your [Firebase account console](https://console.firebase.google.com)
1. Configure the authentication providers for your Firebase project from your Firebase account console

### Configure this app with your project-specific details

```javascript
// .firebaserc

{
  "projects": {
    "default": "your-project-id"
  }
}
```

```javascript
// src/firebase/index.ts

const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

### Install firebase-tools

```sh
$ npm install -g firebase-tools
```

### Build and deploy the app

```sh
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```

## Contributing

This package is using the AngularJS commit messages as default way to contribute
with [Commitizen node package](https://github.com/commitizen/cz-cli/blob/master/README.md)
integrated in this repository.

1.  Fork it!
1.  Create your feature branch: `git checkout -b my-new-feature`
1.  Add your changes: `git add .`
1.  Commit your changes: `npm run commit`
1.  Push to the branch: `git push origin my-new-feature`
1.  Submit a pull request :sunglasses:

## Changelog

Changelog available [here](https://github.com/andreasonny83/online-board/releases)

## License


[MIT License](https://github.com/andreasonny83/online-board/blob/master/LICENSE) © Andrea SonnY
