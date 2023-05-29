import Head from "next/head";
import React from "react";

type Props = {
  title: String;
};

export default function HeadTags({ title }: Props) {
  return (
    <Head>
      <title>{`${title}`}</title>
      <link rel="icon" href="../favicon.svg" />
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      ></meta>
      <meta name="apple-mobile-web-app-title" content="AppByAir"></meta>
    </Head>
  );
};

