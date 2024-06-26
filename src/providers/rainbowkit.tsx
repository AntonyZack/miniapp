'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { WagmiProvider } from 'wagmi';

import { config } from '@/config/rainbowkit/wagmi';
import { RainbowDarkTheme, RainbowLightTheme } from '../theme/Rainbow';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    appInfo={{
                        appName: process.env.APP_NAME!,
                        learnMoreUrl: 'https://learnaboutcryptowallets.example'
                    }}
                    theme={{
                        lightMode: RainbowLightTheme,
                        darkMode: RainbowDarkTheme
                    }}
                >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
