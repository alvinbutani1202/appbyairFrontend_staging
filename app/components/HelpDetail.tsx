import React from "react";

type Props = {
  sectionTitle: string;
  sectionItems: HelpDetailKeyValuePair;
};

export default function HelpDetail({ sectionItems, sectionTitle }: Props) {
  return (
    <div className="flex flex-col gap-2 px-4">
      <div className="pt-6 text-neutral-400 text-base">{sectionTitle}</div>
      <div className="pl-4 bg-white dark:bg-neutral-950 dark:text-white rounded-md shadow-sm">
        <div
          className={`py-2 pr-4 flex flex-col items-start justify-between text-sm`}
        >
          {sectionItems.value.split("\n").map((line, index) => (
            <div key={index}>
              <p>{line}</p>
              {sectionItems.value.split("\n").length - 1 != index && <br />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


