/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'vastphotos.com',
                protocol: 'https',
            },
            {
                hostname: 'images.k11musea.com',
                protocol: 'https',
            },
            {
                hostname: 'media.k11.com',
                protocol: 'https',
            },
            {
                hostname: 'webmedia.nwd.com.hk',
                protocol: 'https'
            }
        ]
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
