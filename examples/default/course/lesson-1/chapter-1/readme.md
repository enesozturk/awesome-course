---
title: Introduction to Jest
fileNameToEdit: sum.test.js
---

# Chapter 1: Introduction to Jest

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

As we understand from the Jest's description, we can use Jest on any app written with JavaScript. It includes many utility functions to be able to test something.

### How does it work?

Main idea behind the Jest is really really simple. There is `input` and `output`, only thing a test does is **checking if the input and output is equal**. Simple right? Don't worry, we are going to do many exercises along the course. (This is the main idea of Awesome Course also. 😙)

### Installing

First of all, we need to install Jest like any other package. It will be effect our code quality, not the project itself. That is why it would be good to put it to `devDependencies`;

```bash
yarn add -D jest
```

In our `package.json`, add a new script and give jest as a value:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Lets say we have an calculation function in our app. It's job is simple, sum two arguments and return the value:

`sum.js`

```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

And there will be our test file for `sum` function. There are two concept to create a test file:

1. Create `sum.test.js` with the same location of `sum.js`
2. Create `__tests__/sum.js` with the same location of `sum.js`

We will continue our example with `sum.test.js` but the other one is totally ok, Jest will automaticly detect test files and run.

### test

Jest has a simple function called `test` by defualt. It takes two parameters; title for the test (it will be show on the console for better developer experience) and a function which test runner call.

See the example:

```js
test("my awesome test title", () => {
  // here, there will be our test assersions.
});
```

Before getting deeper, lets test our knowladge and go to the next chapter.

## Put it to test

1. In `sum.test.js`, create and `test` function and give a title as 'adds 1 + 2 to equal 3'.
2. In second paramter, leave function body should be empty.
