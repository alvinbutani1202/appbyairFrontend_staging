import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import React from "react";
import moment from "moment";

import localFont from "@next/font/local";
import HeadTags from "../../../components/Install/HeadTags";
import Navigation from "../../../components/Install/Navigation";
import SectionDetail from "../../../components/Install/SectionDetail";

const SFPro = localFont({
  src: "../../../public/font/SFPro-Regular.ttf",
  variable: "--font-SFPro-Regular",
});
type Props = {
  children:React.ReactNode;
  response: BaseResponse<Application>;
};



const ApplicationDetail:React.FC<Props> = ({ response }: Props) => {
  const router = useRouter();
  const { shortURL } = router.query;
  const application = response.data;

  if (!response.success) {
    return (
      <main
        className={`${SFPro.variable} font-sans  bg-neutral-100 dark:bg-black pb-8 min-h-screen `}
      >
        <HeadTags title={"AppByAir"} />
        <Navigation title={`${shortURL}`}></Navigation>
      </main>
    );
  }

  return (
    <main
      className={`${SFPro.variable} font-sans bg-neutral-100 dark:bg-black pb-8 min-h-screen`}
    >
      
      <HeadTags title={`${response.data.appInfo.name} | AppByAir`} />
      <Navigation title={`${application.appInfo.name}`}></Navigation>
      <SectionDetail
        sectionTitle="App Overview"
        sectionItems={[
          {
            id: `${application.appInfo.name}`,
            title: `${application.appInfo.name}`,
            isImage: true,
            image: `${application.appInfo.appIcon}`,
            value: `${application.appInfo.name}`,
          },
          {
            id: `${application.appInfo.name}`,
            title: "Version",
            value: `${application.appInfo.version}`,
          },
          {
            id: `${application.appInfo.name}`,
            title: "Build",
            value: `${application.appInfo.buildVersion}`,
          },
        ]}
      ></SectionDetail>

      <SectionDetail
        sectionTitle="App Overview"
        sectionItems={[
          {
            id: `${application.appInfo.name}`,
            isDownload: true,
            downloadURL: `${application.downloadManifestURL}`,
            title: "Install application",
            value: "",
          },
        ]}
      ></SectionDetail>

      <SectionDetail
        sectionTitle="App Details"
        sectionItems={[
          {
            id: `${application.appInfo.bundleIdentifier}`,
            title: "Bundle identifier",
            value: `${application.appInfo.bundleIdentifier}`,
          },
          {
            id: `${application.appInfo.bundleIdentifier}`,
            title: "Size",
            value: `${application.appInfo.size}`,
          },
          {
            id: `${application.appInfo.minimumOSVersion}`,
            title: "Minimum iOS version",
            value: `${application.appInfo.minimumOSVersion}`,
          },
          {
            id: `${application.appInfo.deviceFamily}`,
            title: "Device family",
            value: `${application.appInfo.deviceFamily}`,
          },
          {
            id: `${application.appInfo.deviceCapabilities}`,
            title: "Required device capabilities",
            value: `${application.appInfo.deviceCapabilities}`,
          },
        ]}
      ></SectionDetail>

      <SectionDetail
        sectionTitle="Provisioning Profile"
        sectionItems={[
          {
            id: `${application.appInfo.mobileProvision.profileExpiration}`,
            title: "Profile expiration",
            value: `${moment(
              `${application.appInfo.mobileProvision.profileExpiration}`
            ).format("yyyy-MM-DD HH:mm:ss")}`,
          },
          {
            id: `${application.appInfo.mobileProvision.profileExpiration}`,
            title: "Provisioned devices",
            isDevices: true,
            isCursorPointer: true,
            devices:
              application.appInfo.mobileProvision.devices[0] === "All"
                ? []
                : application.appInfo.mobileProvision.devices,
            value:
              application.appInfo.mobileProvision.devices[0] === "All"
                ? "All"
                : "",
          },
        ]}
      ></SectionDetail>

      <SectionDetail
        sectionTitle="Other Information"
        sectionItems={[
          {
            id: `${application.appInfo.mobileProvision.profileExpiration}`,
            title: "Uploaded",
            value: `${moment(`${application.createdAt}`).format(
              "yyyy-MM-DD HH:mm:ss"
            )}`,
          },
          {
            id: `${application.appInfo.mobileProvision.profileExpiration}`,
            title: "Link",
            isQRCode: true,
            isCursorPointer: true,
            QRCodeURL: `${application.url}`,
            value: `${shortURL}`,
          },
        ]}
      ></SectionDetail>

      <SectionDetail
        sectionTitle="Help"
        sectionItems={[
          {
            id: `${application.appInfo.mobileProvision.profileExpiration}`,
            title: "Get more help",
            isShowDetailIcon: true,
            isCursorPointer: true,
            isHelp: true,
            value: ``,
          },
        ]}
      ></SectionDetail>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { shortURL } = context.query;
  const jsonData = await fetch(
    `http://143.244.136.168:4004/api/application/${shortURL}`
  );
  const data: BaseResponse<Application> = await jsonData.json();

  return {
    props: {
      response: data,
    },
  };
};

export default ApplicationDetail;
