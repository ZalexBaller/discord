/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    i18n: {
        locales: ['en', 'fr', 'ar', 'es', 'de', 'it', 'pt', 'ru', 'tr', 'id', 'ph'],
        defaultLocale: 'en',
    },
}

module.exports = nextConfig
