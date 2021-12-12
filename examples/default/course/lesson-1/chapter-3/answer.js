import { filterTodos } from "./todos";

const TODOS = [
  { id: 1, text: "Learn JavaScript", completed: true },
  { id: 2, text: "Learn React", completed: false },
  { id: 3, text: "Learn Redux", completed: false },
  { id: 4, text: "Learn GraphQL", completed: false },
  { id: 5, text: "Learn Node.js", completed: false },
  { id: 6, text: "Learn Express", completed: false },
  { id: 7, text: "Learn MongoDB", completed: false },
];

test("completed array length should be 1", () => {
  expect(filterTodos(TODOS, "completed")).toHaveLength(1);
});

test("not-completed array length should be 6", () => {
  expect(filterTodos(TODOS, "not-completed")).toHaveLength(6);
});
