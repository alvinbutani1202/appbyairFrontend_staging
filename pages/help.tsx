import React from "react";

import localFont from "@next/font/local";
import Navigation from "../components/Install/Navigation";
import HelpDetail from "../components/help/HelpDetail";
import Head from "next/head";

const SFPro = localFont({
  src: "../public/font/SFPro-Regular.ttf",
  variable: "--font-SFPro-Regular",
});

type Props = {
  applicationName: string;
};

const Help = ({ applicationName }: Props) => {
  return (
    <>
      <Head>
        <title>Help</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main
        className={`${SFPro.variable} font-sans bg-neutral-100 dark:bg-black pb-8 min-h-screen`}
      >
        <Navigation title="Help"></Navigation>
        <HelpDetail
          sectionTitle="iOS install popup did not appear"
          sectionItems={{
            key: "1",
            value: `If the iOS popup "app.appbyair.com would like to install" did not appear, check that you don't already have the same app installed from the AppStore. \n If an app with the same bundle identifier is already installed on the device from the AppStore, nothing will happen. \n Delete the app installed from the AppStore to be able to install this one.`,
          }}
        />
        <HelpDetail
          sectionTitle="Developer Mode"
          sectionItems={{
            key: "2",
            value: `On iOS 16, Apple added Developer Mode, a new level of security around development apps installed from Xcode or third-party apps.
          To be able to run an ad-hoc or development app on a device, we need to enable the Developer Mode.
          To enable Developer Mode go in the "Settings app" > "Privacy and Security" > Enable "Developer Mode" (at the bottom of the list) > "Restart the device"
          Now we can run the apps. This applies only to apps with ad-hoc and development profiles, and does not apply to In-house profile apps (from an Apple Enterprise account).`,
          }}
        />
        <HelpDetail
          sectionTitle="Untrusted Enterprise Developer"
          sectionItems={{
            key: "3",
            value: `Starting from iOS 9, the developer has to be trusted by the device, otherwise a popup will appear and prevent using the app.
          On iOS 9.0/9.1, go to Settings > General > Profiles > tap on the developer's profile, and tap on Trust.
          On iOS 9.2+, go to Settings > General > Device Management > tap on the developer's profile, and tap on Trust.`,
          }}
        />
        <HelpDetail
          sectionTitle="Otherwise…"
          sectionItems={{
            key: "4",
            value: `Contact your app developer, so they can double-check the app and provide you with support.`,
          }}
        />
      </main>
    </>
  );
};

export default Help;
