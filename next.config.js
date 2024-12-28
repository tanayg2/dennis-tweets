/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nijfuwtqovtcpgvrsdfo.supabase.co",
      },
    ],
  },
}

module.exports = nextConfig
