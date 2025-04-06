// popup.tsx - This is the main UI component for your extension's popup
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { main } from "./validator";

// wallet adapter imports
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

const WalletConnector: React.FC = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [Wallets, setWallets] = useState([]);

  // useEffect(() => {
  //   if (!privateKey) {
  //     alert("No private key found");
  //     return;
  //   }
  //   main(privateKey);
  // }, []);

  async function submit() {}

  return (
    <>
      <div style={{width: "400px", height: "600px"}}>
        <ConnectionProvider endpoint="https://api.devnet.solana.com">
          <WalletProvider autoConnect wallets={[]}>
            <WalletModalProvider>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 20,
                }}
              >
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <div>
                <h1>Earn Solana for every Validation!!</h1>
                <div>
                  <h2>Wallets to Connect: </h2>
                  <div></div>
                </div>
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <WalletConnector />
    </React.StrictMode>
  );
}
