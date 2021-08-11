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
- [Interceptors](#interceptors)
- [Contributing](#Contributing)
- [Code of Conduct](#Contributing)
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

- [Install `js-exec`](#installation)
- Import `exec` from the package

```ts
import { exec } from "../exec";

const source = `console.log("Hello from js-exec 👋");`;

const runCode = exec({
  source,
});
runCode({ console });
```

# Installation

Just clone this repo and remove `.git` folder.

# License

MIT © Dinesh Pandiyan
