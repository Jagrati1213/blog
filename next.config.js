/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        // Define your environment variables here
        My_USERNAME: process.env.My_USERNAME,
        PASSWORD: process.env.PASSWORD,
    },
}

module.exports = nextConfig
