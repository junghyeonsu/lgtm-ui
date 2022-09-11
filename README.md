# LGTM-UI

## Installation

```bash
$ yarn add lgtm-ui
$ npm i lgtm-ui
```

## Usage

```tsx
// Only imported ones are included in the bundle
import { Alert } from 'lgtm-ui/react/alert';
import { Checkbox } from 'lgtm-ui/react/checkbox';

const App = () => (
  <>
    <Alert />
    <Checkbox />
  </>
);

export default App;
```

## Contribution

```bash
# 1. clone repository
$ git clone junghyeonsu/lgtm-ui

# 2. install dependencies
$ yarn install

# 3. start developement
# it will start at localhost:3000
$ yarn dev
```

If you want to add components, Add `exports`, `typesVersions` fields in `package.json`

```json
{
  "exports": {
    ".": {
      "source": "./src/index.ts",
      "require": "./dist/index.js",
      "import": "./dist/index.mjs"
    },
    "./react/alert": {
      "source": "./src/react/alert/index.tsx",
      "require": "./dist/react/alert/index.js",
      "import": "./dist/react/alert/index.mjs"
    },
    "./react/checkbox": {
      "source": "./src/react/checkbox/index.tsx",
      "require": "./dist/react/checkbox/index.js",
      "import": "./dist/react/checkbox/index.mjs"
    }
  },
  "typesVersions": {
    "*": {
      "react/alert": [
        "./dist/react/alert/index.d.ts"
      ],
      "react/checkbox": [
        "./dist/react/checkbox/index.d.ts"
      ]
    }
  },
```

## Components

### React

- [Alert (WIP)](./src/react/alert/README.md)
- [Checkbox (WIP)](./src/react/checkbox/README.md)
