---
title: Introduction to Jest
fileNameToEdit: sum.test.js
---

# Chapter 1: Introduction to Jest

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

As we understand from the Jest's description, we can use Jest on any app written with JavaScript. It includes many utility functions to be able to test something.

### How does it work?

The main idea behind Jest is really really simple. There is an `input` and `output`, the only thing a test does is **checking if the input and output is equal**. Simple, right? Don't worry, we are going to do many exercises along the course. (This is the main idea of Awesome Course also. 😙)

### Installing

First of all, we need to install Jest like any other package. It will effect our code quality, not the project itself. Therefore we're going to install it into  `devDependencies`;

```bash
yarn add -D jest
```

In our `package.json`, add a new script and use `jest` as value:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Lets say we have a calculation function in our app. It's job is simple; sum two arguments and return the value:

`sum.js`

```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

And there will be our test file for out `sum` function. There are two concepts to create a test file:

1. Create `sum.test.js` at the same location as `sum.js`
2. Create `__tests__/sum.js` at the same location as `sum.js`

We will continue our example with `sum.test.js`, but the other one is totally fine, Jest will automatically detect test files and run them.

### test

Jest has a simple function called `test` by default. It takes two parameters; title for the test (it will be shown on the console for better developer experience) and a function which test runner call.

See the example:

```js
test("my awesome test title", () => {
  // we will write our test assertions here
});
```

Before digging deeper, lets test our knowledge and continue with the next chapter.

## Put it to the test

1. In `sum.test.js`, create a `test` function and use a title like 'adds 1 + 2 to equal 3'.
2. In our second paramter, the function body should be empty.
