import React from "react";

import NextHead from "next/head";

export default function Head() {
  return (
    <div>
      <NextHead>
        <title>Awesome Course</title>
        <meta name="og:title" content={"Awesome Course"} />
        <meta name="og:url" content="https://awesomecourse.dev" />
        <meta
          name="description"
          content="Create awesome courses that let your audience learn by coding."
        />
        <meta
          name="og:description"
          content="Create awesome courses that let your audience learn by coding."
        />
        <meta name="og:image" content="/awesome-course-og.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Awesome Course" />
        <meta
          name="twitter:description"
          content="Create awesome courses that let your audience learn by coding."
        />
        <meta name="twitter:image" content="/awesome-course-og.png" />
        <meta name="twitter:site" content="@enesozt_" />
      </NextHead>
    </div>
  );
}
