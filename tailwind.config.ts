import type { Config } from 'tailwindcss';

const config: Config = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}'
        ]
    },
    darkMode: 'class', // Enable dark mode with the 'class' strategy
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                balance: '#70747E',
                token: '#EAECEF'
            },
            boxShadow: {
                neumorphism:
                    ' -10px -10px 20px rgba(57, 66, 83, 0.35), 10px 10px 20px rgba(255, 255, 255, 0.1)',
                'card-neumorphism':
                    '-8px -8px 20px rgba(57, 66, 83, 0.35), 8px 8px 20px rgba(255, 255, 255, 0.1)'
            },

            backgroundColor: {
                ['hover-item']: '#313949'
            },
            backgroundImage: (theme) => ({
                'gradient-orange': 'linear-gradient(#F1A132, #CC772C)',
                'card-gradient-45deg':
                    'linear-gradient(45deg, #2C3341, #313949)',
                'gradient-dark': 'linear-gradient(to right, #2C3341, #313949)',
                'gradient-text-dark':
                    'linear-gradient(to right, #F1A132, #CC772C)'
            })
        }
    },
    variants: {
        extend: {
            backgroundImage: ['dark']
        }
    },
    plugins: [require('daisyui')]
};
export default config;
