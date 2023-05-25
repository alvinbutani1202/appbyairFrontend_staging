import type { NextPage } from "next";
import Head from "next/head";
import appLogo from '../public/static/AppLogo.svg'

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <Head>
        <title>AppByAir</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="w-full lg:w-4/5 flex flex-col  h-screen ">
        <header className="flex-none h-20 sticky w-full bg-white  border-b border-gray-300 ">
          <section className="flex justify-between items-center gap-x-2">
            <img
              src="/static/AppLogo.svg"
              alt=""
              className="h-20 w-40
            "
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              Download
            </button>
          </section>
        </header>
        <main className="grow grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col justify-start gap-6 p-8">
            <h1 className="text-4xl font-bold text-left ">
              Distribute your Development & In-house <br /> Apps over the Air
              Installation
            </h1>
            <h6 className="text-base text-left text-gray-800">
              Mac Application for iOS developers to deploy Development and
              In-house <br /> applications directly to the devices.
            </h6>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="h-40 w-80 drop-shadow-sm bg-slate-50 rounded-lg p-4 ">
                  <img src="/static/upload.svg" alt="" className="w-10 h-10" />
                  <h1 className="font-bold text-lg pt-4">Upload</h1>
                  <h6 className="text-base text-left text-gray-800 pt-1">
                    Select or Drage and Drop your ipa file for iOS{" "}
                  </h6>
                </div>
                <div className="h-40 w-80 drop-shadow-sm bg-slate-50 rounded-lg p-4">
                  <img src="/static/ic_Submit.svg" alt="" className="w-10 h-10" />
                  <h1 className="font-bold text-lg pt-4">Submit</h1>
                  <h6 className="text-base text-left text-gray-800 pt-1">
                    Click on upload to get the installation link.{" "}
                  </h6>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-40 w-80 drop-shadow-sm bg-slate-50 rounded-lg p-4">
                  <img src="/static/share.svg" alt="" className="w-10 h-10" />
                  <h1 className="font-bold text-lg pt-4">Share</h1>
                  <h6 className="text-base text-left text-gray-800 pt-1">
                    Send the link to your testers, clients, friends or even use
                    it yourself.{" "}
                  </h6>
                </div>
                <div className="h-40 w-80 drop-shadow-sm bg-slate-50 rounded-lg p-4">
                  <img src="/static/phone.svg" alt="" className="w-10 h-10" />
                  <h1 className="font-bold text-lg pt-4">Open</h1>
                  <h6 className="text-base text-left text-gray-800 pt-1">
                    Open the link in the browser on the device and click on
                    install.{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <img src="/static/AppByAirUpload.png" alt="" />
          </div>
        </main>
        <footer className="h-12 p-8">
          <div className="flex justify-between items-center">
            <h6 className="text-sm text-gray-400">
              © 2023 AppByAir, version 1.0.0
            </h6>
            <div className="text-sm text-gray-400 flex gap-4 px-8">
              <button>Terms & conditions</button>
              <button>Privacy policy</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
