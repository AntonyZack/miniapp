import { Providers as RainbowProvider } from '@/providers/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic';
import { Sora } from 'next/font/google';
import './(home)/globals.css';
import RightBackground from '../components/ui/background/right-background';
import LeftBackground from '../components/ui/background/left-background';
import Footer from '../components/pages/home/Footer';
import Navbar from '../components/ui/navbar/navbar';
import SwapFirstTokenModal from '../components/ui/modals/swap/swap1';
import SwapSecondTokenModal from '../components/ui/modals/swap/swap2';
import SwapSettings from '../components/ui/modals/swap/settings';

const PublishBaseUrl = process.env.NEXT_PUBLIC_PUBLISH_URL as string;


const sora = Sora({ subsets: ['latin'] });

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#E49230' },
        { media: '(prefers-color-scheme: dark)', color: '#E49230' }
    ],
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    'user-scalable': 'no'
};

export const metadata = {
    applicationName: 'Dex Aggregator',
    abstract: 'Dex Aggregator: Experience super fast and fair price trading with our dex.',
    bookmarks: 'Dex Aggregator: Experience super fast and fair price trading with our dex.',
    classification: 'Dex Aggregator: Experience super fast and fair price trading with our dex.',
    category: 'Dex Aggregator: Experience super fast and fair price trading with our dex.',
    robots: { index: true, follow: true },
    referrer: 'origin',
    alternates: { canonical: PublishBaseUrl },
    creator: 'Dex Aggregator',
    title: 'Dex Aggregator',
    description: 'Dex Aggregator: Experience super fast and fair price trading with our dex.',
    generator: 'Next.js',
    manifest: '/manifest.json',
    keywords: ['nextjs', 'nextjs14', 'next14', 'pwa', 'click-mine', 'coin-marketing', 'shelter', 'not-coin'],
    authors: [
        { name: 'Dex Aggregator' },
        { name: 'Dex Aggregator', url: 'https://github.com/evm-dex-aggregator' }
    ],
    icons: [
        { rel: 'apple-touch-icon', url: '/assets/icons/icon-128.png' },
        { rel: 'icon', url: '/assets/icons/icon-128.png' }
    ],
    openGraph: {
        title: 'Dex Aggregator',
        description: 'Dex Aggregator: Experience super fast and fair price trading with our dex.',
        url: PublishBaseUrl,
        siteName: 'Dex Aggregator',
        images: [
            {
                url: '/assets/images/og-image.png',
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
        description: 'Dex Aggregator',
        images: [
            {
                url: '/assets/images/twitter-image.png',
                width: 1200,
                height: 630,
                alt: 'Dex Aggregator: Experience super fast and fair price trading with our dex.'
            }
        ]
    },
    appleWebApp: {
        capable: true,
        title: 'Dex Aggregator',
        statusBarStyle: 'default'
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false
    },
    publisher: 'Dex Aggregator',
    appLinks: {
        web: {
            url: PublishBaseUrl
        }
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className={`${sora.className} relative bg-[#000B0F] `}>
                <RightBackground />
                <LeftBackground />

                <RainbowProvider>
                    <section className=" relative    ">
                        {/* <Navbar /> */}

                        {children}
                        <Footer />
                    </section>

                    <SwapFirstTokenModal />
                    <SwapSecondTokenModal />
                    <SwapSettings />
                </RainbowProvider>

            </body>
        </html>
    );
}
