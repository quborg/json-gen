# JSON Generator with User Interface [![CircleCI Status](https://circleci.com/gh/quborg/json-gen.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/quborg/json-gen)

## Run the project
Just open up `public/index.html` on your preferred web browser.

## To rebuild or development
### Prerequisites
* Environment setup
    * [Yarn](https://yarnpkg.com/lang/en/docs/install/) (package manager)
    * Download the [source code](https://github.com/quborg/json-gen/archive/master.zip)
    * ! (To contribute) use [Git](https://git-scm.com/) 
* Install Dependencies
    * Run command: `yarn` (equivalent to `npm install`)

### Rebuild a new fresh version
This command will recompile `public/bundle.js` from latest source code `src/`:
```
yarn run prod
```

### Debug mode
This mode use Webpack-Dev-Server and React-Hot-Loader: 
```
yarn run dev
```

## Source file structure
Essentials files
```
├── src/
│   ├── assets/
│   │   ├── fixtures.js  -   -   -   -   | Basic data shape.
│   │   └── styles.css
│   ├── containers/
│   │   └── index.js -   -   -   -   -   | Main React container, exported as JsonGenerator.
│   ├── provider.js  -   -   -   -   -   | Application Entry point.
    ..
```
