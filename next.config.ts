import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // static export configuration:
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
