import { Providers as RainbowProvider } from '@/providers/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Sora } from 'next/font/google';
import './(home)/globals.css';
// TODO: Update this file based on your need
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
        { media: '(prefers-color-scheme: light)', color: '#E49230' },
        { media: '(prefers-color-scheme: dark)', color: '#E49230' }
    ],
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
};

export const metadata: Metadata = {
    applicationName: 'Dex Aggregator',
    abstract:
        'Dex Aggregator: Experience super fast and fair price trading with our dex.',
    bookmarks:
        'Dex Aggregator: Experience super fast and fair price trading with our dex.',
    classification:
        'Dex Aggregator: Experience super fast and fair price trading with our dex.',
    category:
        'Dex Aggregator: Experience super fast and fair price trading with our dex.',
    robots: { index: true, follow: true },
    referrer: 'origin',
    alternates: { canonical: PublishBaseUrl },
    creator: 'Dex Aggregator',
    title: 'Dex Aggregator',
    description:
        'Dex Aggregator: Experience super fast and fair price trading with our dex.',
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

    icons: [
        { rel: 'apple-touch-icon', url: '/assets/icons/icon-128.png' },
        { rel: 'icon', url: '/assets/icons/icon-128.png' }
    ],
    openGraph: {
        title: 'Dex Aggregator',
        description:
            'Dex Aggregator: Experience super fast and fair price trading with our dex.',
        url: PublishBaseUrl,
        siteName: 'Dex Aggregator',
        images: [
            {
                url: '',
                width: 1200,
                height: 630,
                alt: 'Dex Aggregator: Experience super fast and fair price trading with our dex.'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@Dex_Aggregator',
        creator: '@Dex_Aggregator',
        title: 'Dex Aggregator',
        description:
            'Dex Aggregator',
        images: [
            {
                url: '',
                width: 1200,
                height: 630,
                alt: 'Dex Aggregator: Experience super fast and fair price trading with our dex.'
            }
        ]
    },

    appleWebApp: {
        capable: true,
        title: 'Dex Aggregator',
        statusBarStyle: 'default' // You can use 'default', 'black', or 'black-translucent'
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false
    },
    publisher: 'Dex Aggregator',
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
    assets: ['']
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
