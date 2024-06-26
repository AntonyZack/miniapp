import { ethers, Network } from 'ethers';

export type NetworkState = Network | null;

export async function checkNetwork(): Promise<NetworkState> {
    try {
        // Connect to the injected Ethereum provider (e.g., MetaMask)
        const provider = new ethers.AlchemyProvider('mainnet', 'demo');
        return await provider.getNetwork();
    } catch (error) {
        console.error('Error checking network:', error);
        return null;
    }
}
