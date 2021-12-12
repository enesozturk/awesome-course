import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <main className="flex flex-col items-center relative relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 mb-16 px-4">
        <div
          className="h-48 sm:h-96 w-full max-h-96 mb-8 
          bg-keyboard-light
          dark:bg-keyboard-dark
          bg-contain bg-no-repeat bg-center"
        />
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
          Create awesome courses that let your audience learn by coding.
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">
          We have spent lots of time to both make the video courses and learn
          anything from them. Best way to learn coding is obvious: writing code.
          Awesome Course lets you create your own courses that let your audience
          learn by coding.
        </p>
        <div className="mt-8 mb-8 flex flex-col sm:flex-row items-center">
          <Link href="https://github.com/enesozturk/awesome-course">
            <a className="mt-6 text-white bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 hover:dark:bg-gray-500 py-4 px-6 rounded-md mr-2">
              See on Github
            </a>
          </Link>
          <Link href="lesson/1/chapter/1">
            <a className="mt-6 bg-white dark:bg-gray-800 hover:bg-gray-100 hover:dark:bg-gray-700 py-4 px-6 rounded-md border border-gray-600 text-gray-800 dark:text-white">
              Example Course
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
