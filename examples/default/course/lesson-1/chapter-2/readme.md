---
title: Machers and Assertions
fileNameToEdit: sum.test.js
---

# Chapter 2: Matchers and Assertions

In the previous chapter, we have learned how to create a test file and test functions with `test()` function.

Lets fill our tests inside with assertions.

### Expect

Jest provides us another important function called `expect()`. We will use expect many many times. It has a simple mission; compare the input (which we will provide) with the output (also we will provide). Yes, like the if statements on the background, if the input and output is equal, our test PASS ✅, if not, our test will FAIL ❌.

See the example:

```js
test("my awesome test", () => {
  expect(VALUE).toEqual(ANOTHER_VALUE);
});
```

Did you notice something? There is another function out there, it is `toEqual`. It is a matcher!

### Matchers

As you understand from its name, matchers calculate something in the background. All matchers do the same thing: checking. But the different way.

For example; `toEqual` matcher checks if the `VALUE` and `ANOTHER_VALUE` are exactly the same.

Another matcher `toBeTruthy`, it checks the `VALUE` is a truthy value (true, 1,2,3..., {}, [] etc.)

There are lots of matcher. We will see many of them through the course. If you want to check in advance, [visit](https://jestjs.io/docs/expect).

## Put it to test

What do we want test? Our `sum` function right? We want to see if it will return expected value when we call it.

1. Inside the test, create an assertion with `expect` function.
2. Assertion should take sum function as a parameter and sum function should take 1 and 2 values as parameters.
3. Assertions check if the return value is equal to 3 with `toEqual` function.
