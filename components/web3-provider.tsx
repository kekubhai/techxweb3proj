"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export default function Web3Provider({ children }: { children: React.ReactNode }) {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);

  // Coinbase Wallet Configuration
  const COINBASE_APP_NAME = "MyDApp";
  const COINBASE_APP_LOGO_URL = "https://example.com/logo.png"; // Optional: Replace with your logo
  const DEFAULT_ETH_JSONRPC_URL = "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID"; // Replace with your Infura URL
  const DEFAULT_CHAIN_ID = 5; // Goerli Testnet

  const connectWallet = async () => {
    try {
      
      const coinbaseWallet = new CoinbaseWalletSDK({
        appName: COINBASE_APP_NAME,
        appLogoUrl: COINBASE_APP_LOGO_URL,
        darkMode: false,
      });

      
      const ethereum = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID);
      const ethProvider = new ethers.providers.Web3Provider(ethereum);
      const signer = ethProvider.getSigner();
      const userAccount = await signer.getAddress();
      const network = await ethProvider.getNetwork();

      setProvider(ethProvider);
      setAccount(userAccount);
      setChainId(network.chainId);

      console.log("Connected to Coinbase Wallet:", userAccount);
      console.log("Network:", network);

     
      ethereum.on("accountsChanged", (accounts: string[]) => {
        setAccount(accounts[0] || null);
      });

      
      ethereum.on("chainChanged", (newChainId: string) => {
        setChainId(parseInt(newChainId, 16));
      });
    } catch (error) {
      console.error("Failed to connect to Coinbase Wallet:", error);
    }
  };

  
  const displayAccountInfo = () => {
    if (!account) {
      return <button onClick={connectWallet}>Connect Coinbase Wallet</button>;
    }
    return (
      <div>
        <p>Connected Account: {account}</p>
        <p>Chain ID: {chainId}</p>
      </div>
    );
  };

  return (
    <div>
      <header style={{ padding: "10px", textAlign: "center", backgroundColor: "#f3f4f6" }}>
        <h1>Welcome to Coinbase Wallet DApp</h1>
        {displayAccountInfo()}
      </header>
      <main>{children}</main>
    </div>
  );
}
