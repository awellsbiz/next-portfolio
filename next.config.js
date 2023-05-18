/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    //do not use https://
    domains:['placekitten.com']
  }
}

module.exports = nextConfig
