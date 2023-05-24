import Link from "next/link";
import React, { useState } from "react";
import QRCode from "react-qr-code";

type Props = {
  sectionTitle: string;
  sectionItems: ApplicationDetailKeyValuePair[];
};

const SectionDetail = ({ sectionItems, sectionTitle }: Props) => {
  const [isShowQR, setIsShowQR] = useState(false);
  const [isShowDevices, setIsShowDevices] = useState(false);

  const handleIsShowQR = () => {
    setIsShowQR(!isShowQR);
  };

  const handleIsShowDevices = () => {
    setIsShowDevices(!isShowDevices);
  };

  return (
    <div className="flex flex-col gap-2 px-4">
      <div className="pt-6 text-neutral-400 text-sm">{sectionTitle}</div>
      <div className="pl-4 bg-white dark:bg-neutral-950 dark:text-white rounded-md shadow-sm">
        {sectionItems.map((info, index) => {
          if (info.isImage) {
            return (
              <div
                key={index}
                className={`py-2 pr-4 flex flex-row items-center justify-between text-base ${
                  info.isCursorPointer && "cursor-pointer"
                }  ${
                  index != sectionItems.length - 1 &&
                  "border-b dark:border-neutral-900 border-neutral-200"
                } `}
              >
                <h1>{info.title}</h1>
                <img
                  className="rounded-lg bg-transparent"
                  src={`${info.image}`}
                  width={48}
                  height={48}
                  alt="Application Logo Image"
                />
              </div>
            );
          } else if (info.isDownload) {
            return (
              <a
                href={`itms-services://?action=download-manifest&url=${info.downloadURL}`}
              >
                <div
                  key={index}
                  className={`py-2 pr-4 flex flex-row items-center justify-between text-base  ${
                    info.isCursorPointer && "cursor-pointer"
                  } ${
                    index != sectionItems.length - 1 &&
                    "border-b dark:border-neutral-900 border-neutral-200"
                  } `}
                >
                  <h1>{info.title}</h1>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </a>
            );
          } else if (info.isQRCode) {
            return (
              <div>
                <div
                  key={index}
                  onClick={handleIsShowQR}
                  className={`py-2 pr-4 flex flex-row items-center justify-between text-base ${
                    info.isCursorPointer && "cursor-pointer"
                  } ${
                    index != sectionItems.length - 1 &&
                    "border-b dark:border-neutral-900 border-neutral-200"
                  } `}
                >
                  <h1>{info.title}</h1>
                  <div className="flex flex-row items-center gap-0">
                    <h1 className="text-neutral-400 ">{info.value}</h1>
                    <div className={isShowQR ? "rotate-90" : "rotate-0"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    isShowQR
                      ? "flex items-center justify-center pb-4 ease-in-out duration-500 transition-all"
                      : "hidden ease-in-out duration-500 transition-all"
                  }
                >
                  <QRCode value={`${info.QRCodeURL}`} />
                </div>
              </div>
            );
          } else if (info.isDevices) {
            return (
              <div>
                <div
                  key={index}
                  onClick={handleIsShowDevices}
                  className={`py-2 pr-4 flex flex-row items-center justify-between text-base ${
                    info.isCursorPointer && "cursor-pointer"
                  } ${
                    index != sectionItems.length - 1 &&
                    "border-b dark:border-neutral-900 border-neutral-200"
                  } `}
                >
                  <h1>{info.title}</h1>
                  <div className="flex flex-row items-center gap-0">
                    <h1 className="text-neutral-400 ">{info.value}</h1>
                    <div className={isShowQR ? "rotate-90" : "rotate-0"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    isShowDevices
                      ? "flex flex-col justify-start pb-4 ease-in-out duration-500 transition-all"
                      : "hidden ease-in-out duration-500 transition-all"
                  }
                >
                  {info.devices &&
                    info.devices.map((item, index) => (
                      <div className="text-sm text-gray-600" key={index}>
                        <p>{`${item.substring(0, 10)} ...... ${item.slice(
                          -10
                        )}`}</p>
                      </div>
                    ))}
                </div>
              </div>
            );
          } else if (info.isHelp) {
            return (
              <Link href="/help">
                <div
                  key={index}
                  className={`py-2 pr-4 flex flex-row items-center justify-between text-base  ${
                    info.isCursorPointer && "cursor-pointer"
                  } ${
                    index != sectionItems.length - 1 &&
                    "border-b dark:border-neutral-900 border-neutral-200"
                  } `}
                >
                  <h1>{info.title}</h1>
                  <h1 className="text-neutral-400 ">{info.value}</h1>
                  {info.isShowDetailIcon && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  )}
                </div>
              </Link>
            );
          } else {
            return (
              <div
                key={index}
                className={`py-2 pr-4 flex flex-row items-center justify-between text-base  ${
                  info.isCursorPointer && "cursor-pointer"
                } ${
                  index != sectionItems.length - 1 &&
                  "border-b dark:border-neutral-900 border-neutral-200"
                } `}
              >
                <h1>{info.title}</h1>
                <h1 className="text-neutral-400 ">{info.value}</h1>
                {info.isShowDetailIcon && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SectionDetail;
