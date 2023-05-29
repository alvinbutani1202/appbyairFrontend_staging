type BaseResponse<T> = {
  success: Boolean;
  message: String;
  data: T;
};

type Application = {
  createdAt: String;
  downloadManifestURL: String;
  url: String;
  appInfo: {
    name: String;
    size: String;
    userGeneratedTitle: String;
    bundleIdentifier: String;
    version: String;
    minimumOSVersion: String;
    buildVersion: String;
    appIcon: String;
    appIPA: String;
    buildType: String;
    deviceCapabilities: [String];
    deviceFamily: String;
    mobileProvision: {
      name: String;
      teamName: String;
      teamIdentifier: [String];
      applicationIdentifier: String;
      profileExpiration: String;
      devices: [String];
      platform: [String];
    };
  };
};

type ApplicationDetailKeyValuePair = {
  id: String;
  isImage?: boolean = false;
  isDownload?: boolean = false;
  isQRCode?: boolean = false;
  isDevices?: boolean = false;
  isHelp?: boolean = false;
  devices?: String[];
  QRCodeURL?: String;
  downloadURL?: String;
  isShowDetailIcon?: boolean = false;
  isCursorPointer?: boolean = false;
  image?: String;
  title: String;
  value: String;
};

type HelpDetailKeyValuePair = {
  key: String;
  value: String;
};
