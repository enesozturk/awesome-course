---
sidebar_position: 2
label: "Create Lesson"
---

# Create Your First Lesson

In your repository, you see `/course` folder and content in init. Let's see how does this structure works:

1. For every `lesson-[LESSON_ID]` folder, `/lesson/[LESSON_ID]` route will be created.
2. In a lesson folder, there are chapters. For every `chapter-[ID]` folder, `/lesson[LESSON_ID]/chapter/[CHAPTER_ID]` route will be created.
3. In a chapter folder, you will need to create a `readme.md` file and coding files.
4. Beside these, there are start and completed files. If you put `start.md` and `completed.md` files to `lesson-[LESSON_ID]/`, they will be generated as `/lesson/[LESSON_ID]` and `/lesson/[LESSON_ID]/completed` routes.

### Create a Chapter

Lets start by creating our first chapter. In `/course/lesson-3/chapter-3/` (because 1 and 2 are already created 👉🏽👈🏼, of course you can continue by editing them), create `readme.md` file. Here you can put any markdown content to tell your chapter details. Easy peazy.
Also, there are some props to

#### Configure Chapter Details

Awesome Course automatically **creates a sidebar** from the `docs` folder.

At the very beggining of your readme document, add metadata to customize the footer let your code editor works as expected:

```md title="course/lesson-3/chapter-3/readme.md" {1-4}
---
title: Write your first test
fileNameToEdit: Button.test.js
---
```
