import type { NextConfig } from "next";

// Ensure dotenv is loaded before accessing environment variables
require("dotenv").config();

const nextConfig: NextConfig = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    FROM_EMAIL: process.env.FROM_EMAIL,
  },
  // Add other configurations as needed
};

export default nextConfig;
