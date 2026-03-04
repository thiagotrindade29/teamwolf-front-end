/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'sofascore.com' },
            { protocol: 'https', hostname: 'api.sofascore.app' },
            { protocol: 'https', hostname: 'www.sofascore.com' },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/ma/sl',
                permanent: !true,
            },
        ]
    },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'sofascore.com' },
//       { protocol: 'https', hostname: 'api.sofascore.app' },
//       { protocol: 'https', hostname: 'www.sofascore.com' },
//     ],
//   },
// };
// export default nextConfig;