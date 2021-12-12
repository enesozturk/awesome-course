---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

### Requirements

- [Node.js](https://nodejs.org/en/) version >= 14 or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed

- [Yarn](https://yarnpkg.com/) version >= 1.5 (which can be checked by running yarn --version). Yarn is a performant package manager for JavaScript and replaces the npm client. It is not strictly necessary but highly encouraged.

### Scaffold project website

The easiest way to use Awesome Course is to use the command line tool that helps you scaffold a skeleton course website. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files.

```js
npx awesome-course [name]
```

Example:

```js
npx awesome-course react-training
```

If you do not specify `name`, it will prompt you for them. Awesome Course provides one template to get started for now. We will be working on new templates to provide soon.

### Project structure

Assuming you named your course as `react-training`, you will see the following files generated under a new directory `my-website/`.

```bash
reac-training
├── course
│   ├── lesson-1
│   ├───── start.md
│   ├───── completed.md
│   ├───── chapter-1
│   ├─────── answer.js
│   ├─────── question.js
│   ├─────── readme.md
│   ├───── chapter-2
│   ├───── chapter-3
│   ├── lesson-2
│   ├───── start.md
│   ├───── completed.md
│   ├───── chapter-1
│   ├───── chapter-2
│   ├───── chapter-3
├── pages
│   ├── lesson
│   ├──── [lessonId]
│   ├────── chapter
│   ├──────── [chapterId].js
│   ├────── completed.js
│   ├──── [lessonId].js
│   ├── _app_.md
│   ├── index.js
│   └── mdx.md
├── public
│   ├── svg
│   └── favicon.ico
├── src
│   ├── components
│   ├── context
│   ├── lib
│   ├── types
│   └── utils
├── styles
├── next.config.js
├── package.json
├── README.md
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

### Project structure rundown

- `/course` - Contains the course content both markdown and code files. Here it is important to follow rules to be able to create your course.
- `/pages` - Contains the custom pages like home page. Also you can add other pages, bacause of it is Next.js based, it would be good to know how Next.js [works](https://nextjs.org/docs/basic-features/pages).
- `/public` - Contains assets that used in project such as favicons, svg icons, background images etc.
- `/src` - Contains custom React Components used in the project.
- `/styles` - Contains style files that used in the project. This project uses [Tailwind](https://tailwindcss.com/). You may want to check it also.

### Running the development server

<Tabs>
  <TabItem value="npm" label="npm" default>

```js
npm run dev
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```js
yarn dev
```

</TabItem>
</Tabs>

### Build

<Tabs>
  <TabItem value="npm" label="npm" default>

```js
npm run build
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```js
yarn build
```

</TabItem>
</Tabs>
