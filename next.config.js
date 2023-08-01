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
      {
        source: '/playlist/fav2019',
        destination: '/play?server=netease&id=3163516772',
        permanent: false,
      },
      {
        source: '/playlist/fav2020',
        destination: '/play?server=netease&id=5400212526',
        permanent: false,
      },
      {
        source: '/playlist/fav2021',
        destination: '/play?server=netease&id=7189117884',
        permanent: false,
      },
      {
        source: '/playlist/fav2022',
        destination: '/play?server=netease&id=7949411992',
        permanent: false,
      },
      {
        source: '/playlist/chill',
        destination: '/play?server=netease&id=5160315348',
        permanent: false,
      },
      {
        source: '/playlist/ys_v38',
        destination: '/play?server=tencent&id=002LoikR0BEwlv&type=album',
        permanent: false,
      },
      {
        source: '/playlist/sr_v12',
        destination: '/play?server=tencent&id=002DgUWY4AD9zS&type=album',
        permanent: false,
      },
      {
        source: '/playlist/hk3_vocal',
        destination: '/play?server=netease&id=8603616847',
        permanent: false,
      },
    ]
  },
}