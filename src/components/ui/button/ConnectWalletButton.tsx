'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

const ConnectWalletComponent = () => {
    return (
        <>
            <ConnectButton.Custom>
                {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted
                }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus ||
                            authenticationStatus === 'authenticated');

                    return (
                        <div
                            {...(!ready && {
                                'aria-hidden': true,
                                style: {
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none'
                                }
                            })}
                        >
                            {(() => {
                                if (!connected) {
                                    return (
                                        <button
                                            onClick={openConnectModal}
                                            className="btn"
                                            type="button"
                                        >
                                            Connect Wallet
                                        </button>
                                    );
                                }

                                if (chain.unsupported) {
                                    return (
                                        <button
                                            onClick={openChainModal}
                                            className="btn btn-outline btn-warning"
                                            type="button"
                                        >
                                            Wrong network
                                        </button>
                                    );
                                }

                                return (
                                    <div style={{ display: 'flex', gap: 12 }}>
                                        <button
                                            className="btn btn-outline btn-info"
                                            onClick={openChainModal}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                            type="button"
                                        >
                                            {chain.hasIcon && (
                                                <div
                                                    style={{
                                                        background:
                                                            chain.iconBackground,
                                                        width: 12,
                                                        height: 12,
                                                        borderRadius: 999,
                                                        overflow: 'hidden',
                                                        marginRight: 4
                                                    }}
                                                >
                                                    {chain.iconUrl && (
                                                        <Image
                                                            alt={
                                                                chain.name ??
                                                                'Chain icon'
                                                            }
                                                            src={chain.iconUrl}
                                                            width={12}
                                                            height={12}
                                                        />
                                                    )}
                                                </div>
                                            )}
                                            {chain.name}
                                        </button>

                                        <button
                                            onClick={openAccountModal}
                                            className="btn btn-outline btn-info"
                                            type="button"
                                        >
                                            {account.displayName}
                                            {account.displayBalance
                                                ? ` (${account.displayBalance})`
                                                : ''}
                                        </button>
                                    </div>
                                );
                            })()}
                        </div>
                    );
                }}
            </ConnectButton.Custom>
        </>
    );
};

export default ConnectWalletComponent;
