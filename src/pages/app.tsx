import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig, createClient } from 'wagmi';

const client = createClient({
  autoConnect: true,
  provider: () => {
    return new ethers.providers.InfuraProvider('homestead', {
      infuraId: 'YOUR_INFURA_ID',
    });
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;