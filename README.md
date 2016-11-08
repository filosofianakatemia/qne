# Questionnaire Service for Node.js

[![Build Status](https://travis-ci.org/filosofianakatemia/qne.svg?branch=master)](https://travis-ci.org/filosofianakatemia/qne)

This project is split into the following Node.js modules:

1. qne-api in the "api" folder
  * Contains Swagger API definitions for the REST API and Typescript models. This is referenced by all the projects below.
2. qne-core in the "core" folder
  * Contains database scripts and endpoints to JSON API validation, but is server agnostic.
3. qne-respondent in the "respondent" folder
  * Contains lightweight Angular 2 sources compatible with a large number of browsers that implement the respondent's UI
4. qne-admin in the "admin" folder
  * Contains questionnaire admin UI Angular 2 sources, primarily for latest browsers.
5. qne in the "server" folder
  * This contains a standalone implementation of the questionnaire service, using Koa 2 as server and Angular Universal hosting for the qne-respondent module and static hosting for the qne-admin module.

The reason for splitting the project into five separate modules is to make it possible to easily attach qne to your existing server, and to make development of the frontend and backend independent.

## API

See the [API documentation](docs/APIv1.md) for in depth information about the qne API.

## Compilation

Run

```
npm start
```

to build everything and start the server listening at port 3000. Run

```
npm run dev
```

to begin listening to changes and running unit and integration tests.

## Development

### Modifying the API

To make changes to the qne.io API, follow these steps:

1. Edit the `api/api.swagger.yaml` file.
2. Copy/paste the file contents to the [online Swagger Editor](http://editor.swagger.io) and fix errors.
3. Export the `Typescript Angular2` client and unzip the result to a temporary directory.
4. Copy Typescript sources in the `model` directory to `api/src`.
5. Copy relevant parts of the `api` directory to the qne-respondent and qne-admin projects.

### Visual Studio Code

We recommend installing these extensions for [Visual Studio Code](https://code.visualstudio.com/):
* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [TSLint for VS Code](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)