import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const PROJECT_CONFIG = {
  name: "FlyTripVisa",
  description:
    "FlyTripVisa Admin Control Center. Manage visa services, travel applications, customers, payments, AI services and global business operations from one secure workspace.",
  version: packageJson.version,
  copyright: `© ${currentYear} FlyTripVisa. All Rights Reserved.`,
};