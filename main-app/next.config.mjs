/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/proxy/:path*',
                destination: 'https://api.sampleapis.com/:path*',
            },

        ]
    }
};

export default nextConfig;
