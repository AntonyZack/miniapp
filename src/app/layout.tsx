import { Providers as RainbowProvider } from '@/providers/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Sora } from 'next/font/google';
import './(home)/globals.css';

const PublishBaseUrl = process.env.PUBLISH_URL as string;

const Navbar = dynamic(() => import('@/components/ui/navbar/navbar'), {
    ssr: false,
    loading: () => <p>loading navbar</p>
});
const SwapFirstTokenModal = dynamic(
    () => import('@/components/ui/modals/swap/swap1'),
    {
        ssr: false,
        loading: () => <p>loading swap</p>
    }
);
const SwapSecondTokenModal = dynamic(
    () => import('@/components/ui/modals/swap/swap2'),
    {
        ssr: false,
        loading: () => <p>loading swap</p>
    }
);

const SwapSettingsModal = dynamic(
    () => import('@/components/ui/modals/swap/settings'),
    {
        ssr: false,
        loading: () => <p>loading setting</p>
    }
);
const sora = Sora({ subsets: ['latin'] });

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#96FD65' },
        { media: '(prefers-color-scheme: dark)', color: '#96FD65' }
    ],
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
};

export const metadata: Metadata = {
    applicationName: 'Last Shelter',
    abstract:
        'Last Shelter: Experience the ultimate mobile PWA for building and survival in a post-apocalyptic world. Secure your shelter, gather resources, and thrive against all odds!',
    bookmarks:
        'Last Shelter: Experience the ultimate mobile PWA for building and survival in a post-apocalyptic world. Secure your shelter, gather resources, and thrive against all odds!',
    classification:
        'Last Shelter: Experience the ultimate mobile PWA for building and survival in a post-apocalyptic world. Secure your shelter, gather resources, and thrive against all odds!',
    category:
        'Last Shelter: Experience the ultimate mobile PWA for building and survival in a post-apocalyptic world. Secure your shelter, gather resources, and thrive against all odds!',
    robots: { index: true, follow: true },
    referrer: 'origin',
    alternates: { canonical: PublishBaseUrl },
    creator: 'NILL Developers',
    title: 'Shelter Application',
    description:
        'Last Shelter: Experience the ultimate mobile PWA for building and survival in a post-apocalyptic world. Secure your shelter, gather resources, and thrive against all odds!',
    generator: 'Next.js',
    manifest: '/manifest.json',
    keywords: [
        'nextjs',
        'nextjs14',
        'next14',
        'pwa',
        'click-mine',
        'coin-marketing',
        'shelter',
        'not-coin'
    ],

    authors: [
        { name: 'NILL Developers' },
        {
            name: 'NILL Developers',
            url: 'https://github.com/Nilldevelopers'
        }
    ],

    icons: [
        { rel: 'apple-touch-icon', url: '/assets/icons/icon-128.png' },
        { rel: 'icon', url: '/assets/icons/icon-128.png' }
    ],
    openGraph: {
        title: 'Last Shelter Application',
        description:
            'Last Shelter: Experience the ultimate mobile PWA for building and survival in a post-apocalyptic world. Secure your shelter, gather resources, and thrive against all odds!',
        url: PublishBaseUrl,
        siteName: 'Last Shelter Application',
        images: [
            {
                url: 'https://raw.githubusercontent.com/LAST-SHELTER-AI/brand-assets/main/SocialMedia/Banners/telegram-banner.png',
                width: 1200,
                height: 630,
                alt: 'Last Shelter application banner'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@nilldevelopers',
        creator: '@nilldevelopers',
        title: 'Last Shelter Application',
        description:
            'Last Shelter: Experience the ultimate mobile PWA for building and survival in a post-apocalyptic world. Secure your shelter, gather resources, and thrive against all odds!',
        images: [
            {
                url: 'https://raw.githubusercontent.com/LAST-SHELTER-AI/brand-assets/main/SocialMedia/Banners/telegram-banner.png',
                width: 1200,
                height: 630,
                alt: 'Last Shelter application banner'
            }
        ]
    },

    appleWebApp: {
        capable: true,
        title: 'Last Shelter',
        statusBarStyle: 'default' // You can use 'default', 'black', or 'black-translucent'
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false
    },
    publisher: 'Last Shelter',
    appLinks: {
        // ios: {
        //   app_store_id: 'your_app_store_id', // Replace with your iOS App Store ID
        //   app_name: 'Your App Name', // Replace with your app name
        // },
        // android: {
        //   package: 'com.yourapp.package', // Replace with your Android app package name
        //   app_name: 'Your App Name', // Replace with your app name
        // },
        web: {
            url: PublishBaseUrl // Replace with your website URL
        }
    },
    assets: ['https://raw.githubusercontent.com/LAST-SHELTER-AI/brand-assets']
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={sora.className}>
                <RainbowProvider>
                    <section className="h-dvh overflow-auto bg-gradient-to-b from-[#394253] to-[#181C27]">
                        <Navbar />
                        {children}
                    </section>
                    <SwapFirstTokenModal />
                    <SwapSecondTokenModal />
                    <SwapSettingsModal />
                </RainbowProvider>
            </body>
        </html>
    );
}
