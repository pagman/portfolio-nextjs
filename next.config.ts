import type { NextConfig } from "next";

// Old numeric project URLs -> slugs, keeps already-indexed links working
const legacyProjectIds = [
  ["1", "mcubed-tracker"],
  ["2", "telefarm-tracking"],
  ["3", "camel-study"],
  ["4", "mcubed-manager"],
  ["5", "habit-tracker"],
  ["6", "replog"],
  ["7", "mcubed-dashboard"],
  ["8", "trip-cost-calculator"],
  ["9", "capcap"],
  ["10", "bubble-tea"],
  ["11", "econest"],
  ["12", "golden-smile"],
  ["13", "greek-property-hunters"],
  ["14", "hona-festival"],
  ["15", "ichnos-soap"],
  ["16", "milianjo"],
  ["17", "selene-luxury-rooms"],
  ["18", "velvore-transfers"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyProjectIds.map(([id, slug]) => ({
      source: `/projects/${id}`,
      destination: `/projects/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
