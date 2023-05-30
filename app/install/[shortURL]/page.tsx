import React from "react";
import moment from "moment";
import NavigationBar from "@/app/components/NavigationBar";
import SectionDetail from "@/app/components/SectionDetail";
import HelpDetail from "@/app/components/HelpDetail";
import { Metadata } from "next";


type Params = {
  params:{
    shortURL:String,
  }
};


export async function generateMetadata({params}:Params):Promise<Metadata> {
const response: BaseResponse = await fetch(`http://143.244.136.168:4004/api/application/${params.shortURL}`).then(response => response.json())
 const application = response.data;

  if (!response.success){
    return{
    title: `Application | AppByAir`,
    icons:{
      icon:"./favicon.ico",
    }
  }
  }

  return{
    title: `${application.appInfo.name} | AppByAir`,
  }
}


export default async function ShortURL({ params }: Params) {
  console.log(params.shortURL);
  
 const response: BaseResponse = await fetch(`http://143.244.136.168:4004/api/application/${params.shortURL}`).then(response => response.json())
 const application = response.data;
console.log(application);

//  if (!response.success) {
//   console.log(response.message);
  
//     return (
//       <main
//         className={` bg-neutral-100 dark:bg-black pb-8 min-h-screen `}
//       >
//         <NavigationBar title={`${params.shortURL}`}></NavigationBar>
//         <HelpDetail
//           sectionTitle=""
//           sectionItems={{
//             key: "1",
//             value: `${response.message}`,
//           }}
//         />
//       </main>
//     );
//   }

  return (
    <main
      className={` bg-neutral-100 dark:bg-black pb-8 min-h-screen`}
    >
      <div>AppByAir</div>
      {/* <NavigationBar title={`${application.appInfo.name}`}></NavigationBar>
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
            value: `${params.shortURL}`,
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
      ></SectionDetail> */}
    </main>
  );
 
};

// export default Page;
