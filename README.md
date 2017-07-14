# JSON Generator 

## Run the project
Just open up `public/index.html` on your preferred web browser.

## Setup guide
### Prerequisites
* Environment
    * [Yarn](https://yarnpkg.com/lang/en/docs/install/) (package manager)
    * Download the [source code](https://github.com/quborg/json-gen/archive/master.zip)
    * ! (To contribute) use [Git](https://git-scm.com/) 
* Dependencies
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
├── src
    ├── provider.js  -   -   -   | Entry point.
    ├── JsonGenerator.js -   -   | Main React component.
    ├── fixtures.js  -   -   -   | Basic data shape.
    ..
```
