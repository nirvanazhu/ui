/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'avatars0.githubusercontent.com',
      'avatars1.githubusercontent.com',
      'avatars2.githubusercontent.com',
      'avatars3.githubusercontent.com',
      'nirland.net',
      'nir.land',
      'cdn.nir.land',
      'assets.aquanir.cc',
      'image.nirland.net',
      'quickview.aquanir.cc',
    ],
  },
  async redirects() {
    return [
      {
        source: '/posts/index.xml',
        destination: '/feed',
        permanent: false,
      },
      {
        source: '/feed.xml',
        destination: '/feed',
        permanent: false,
      },
      {
        source: '/rip/cc',
        destination: '/aquacc',
        permanent: false,
      },
      {
        source: '/friends',
        destination: 'https://blog.nir.land/friends',
        permanent: false,
      },
      {
        source: '/blog',
        destination: 'https://blog.nir.land',
        permanent: false,
      },
    ]
  },
}