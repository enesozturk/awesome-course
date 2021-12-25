---
title: Matchers With Other Data Types
fileNameToEdit: todos.test.js
---

# Chapter 3: Matchers With Other Data Types

### Truthiness

Sometimes need to distinguish between `undefined`, `null`, and `false`, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.

- `toBeNull` matches only `null`
- `toBeUndefined` matches only `undefined`
- `toBeDefined` is the opposite of `toBeUndefined`
- `toBeTruthy` matches anything that an **if** statement treats as `true`
- `toBeFalsy` matches anything that an **if** statement treats as `false`

```js
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
});
```

## .not

You probably noticed the `.not` usage above. It make assertion to expect opposite of the matcher.

### Strings

You can check strings against regular expressions with `toMatch`:

```js
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
```

### Numbers

Most ways of comparing numbers have matcher equivalents.

```js
test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

### Arrays and Iterables

You can check if an array or iterable contains a particular item using toContain:

```js
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
```

## Put it to test

We have a utility function and it have different possibilities to return. Check `todo.js`. It filters todo list with the given filter criteria. I wrote the first test for you. We have a different matcher this time. `toHaveLength`

1. Create a new test below mine. Make an assertion to check if `not-completed` tasks length is expected (6).

What is the benefit of this test? If somebody in your team change the `filterTodos` funtion, lets say he/she used `done` for `completed` and `undone` for `not-completed`. Our test will fail. We will be able to possible errors before our code goes production ✅
