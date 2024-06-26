export interface IRoute {
    href: string;
    name: string;
}

export const Routes: IRoute[] = [
    {
        href: '/',
        name: 'swap'
    },
    {
        href: '/stake',
        name: 'stake'
    }
];
