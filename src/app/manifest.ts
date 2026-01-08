import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Norxio',
        short_name: 'Norxio',
        description: 'Global Payments Platform',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3173BD',
        icons: [
            {
                src: '/Icon 64x64.png',
                sizes: '64x64',
                type: 'image/png',
            },
            {
                src: '/Icon 128x128.png',
                sizes: '128x128',
                type: 'image/png',
            },
            {
                src: '/Icon 256x256.png',
                sizes: '256x256',
                type: 'image/png',
            },
            {
                src: '/Icon 512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/Icon 16x16.png',
                sizes: '16x16',
                type: 'image/png'
            }
        ],
    }
}
