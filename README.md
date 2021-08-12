<div align="center">
<h1>js-exec 🧰</h1>

<p> Execute sandboxed JavaScript strings.  </p>
</div>

---

[![dependencies Status](https://david-dm.org/flexdinesh/npm-module-boilerplate/status.svg)](https://david-dm.org/parsasi/js-exec) [![devDependencies Status](https://status.david-dm.org/gh/parsasi/js-exec.svg?type=dev)](https://david-dm.org/parsasi/js-exec?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## The problem

Executing an inputted string, as JS code can be **Extremely** risky. These risks can be reduced, when using `new Function` syntax; however, this can also be limiting, as it would only give you access to the global scope.

## This solution ✨

`js-exec` will sandbox the JavaScript code (passed as a string). It will only give it access to the objects that are given to the sandbox. This way, you will have full control of what the code can or cannot access.

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic](#usage)
  - [Interceptors](#interceptors)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [LICENSE](#license)

## Features

- **0 Dependencies** - no dependencies whatsoever
- **TypeScript** - Everything is TypeScript based
- **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
- **Interceptors** - pass in interceptors to the sandbox, to manipulate the source, before being executed

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which should be installed as one of your project's `dependencies`:

```
npm i --save js-exec
```

## Usage

### Basic

- [Install `js-exec`](#installation)
- Import `exec` from the package
- Pass the source to `exec`.
- Use the sandbox returned to pass dependencies to the code.

```ts
import { exec } from "js-exec";

const source = `console.log("Hello from js-exec 👋");`;

const sandbox = exec(source);

sandbox();
// Error: Cannot read property 'log' of undefined

sandbox({ console });
// Hello from js-exec 👋
```

### Interceptors

Interceptors will help you run functions on the code, before it gets executed.

Each Interceptor receives a `source: string` and returns a transformed `source: string`.

```ts
import { exec, Source } from "js-exec";

const source = `console.log("There are some f***s here!");`;

//Removes bad words inside the source
const removeBadWords = (source: Source): Source => {
  let cleanSource = source;
  const badWordsArray = ["f***"];
  const textToReplace = "🚫BAD WORD🚫";
  badWordsArray.forEach(
    (word) => (cleanSource = cleanSource.replace(word, textToReplace))
  );
  return cleanSource;
};

//Interceptors are run sequentially
const interceptors = [removeBadWords];

//interceptors are passed into the options object
const runCode = exec(source, { interceptors });
runCode({ console });
// There are some 🚫BAD WORD🚫s here!
```

## Contributing

This package is a beginner-friendly package. If you don't know where to start, visit [Make a Pull Request](https://makeapullrequest.com/) to learn how to make pull requests.

Please visit [Contributing](CONTRIBUTING.md) for more info.

## Code of Conduct

Please visit [Code of Conduct](CODE_OF_CONDUCT.md).

---

# License

MIT
