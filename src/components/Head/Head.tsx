import React from "react";

import NextHead from "next/head";

export default function Head() {
  return (
    <div>
      <NextHead>
        <title>Awesome Course</title>
        <meta name="og:title" content={"Awesome Course"} />

        {/* Description */}
        <meta
          name="description"
          content={
            "Create awesome courses that lets your audience learn by coding."
          }
        />
        <meta
          name="og:description"
          content={
            "Create awesome courses that lets your audience learn by coding."
          }
        />
        <meta name="og:image" content={"awesome-course-og.png"} />
        <meta name="twitter:image" content={"/awesome-course-og.png"} />

        {/* URL */}
        <meta name="og:url" content="https://ozturkenes.com" />
      </NextHead>
    </div>
  );
}
