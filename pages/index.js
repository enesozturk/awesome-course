import Link from "next/link";

export default function Home() {
  return (
    <div className="app bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <nav>
        <div className="container mx-auto px-4"></div>
      </nav>
      <main className="flex flex-col items-center relative relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className=" font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
          Create awesome courses that let your audience learn by coding.
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">
          We have spent lots of time to both make the video courses and learn
          anything from them. Best way to learn coding is obvious: writing code.
          Awesome Course lets you create your own courses that let your audience
          learn by coding.
        </p>
        <Link href="lesson/1/chapter/13">
          <a className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            go course
          </a>
        </Link>
      </main>
    </div>
  );
}
