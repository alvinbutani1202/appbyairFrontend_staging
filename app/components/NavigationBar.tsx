import React from "react";

type Props = { title: string };

export default function NavigationBar({ title }: Props) {
  return (
    <nav className="sticky top-0 z-30 flex items-center justify-center bg-white dark:bg-neutral-800 border-b dark:border-neutral-700 border-neutral-200 dark:text-white h-[44px]">
      <h1 className="font-semibold text-base">{title}</h1>
    </nav>
  );
};


