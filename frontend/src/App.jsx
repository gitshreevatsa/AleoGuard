import React, { useMemo } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@demox-labs/aleo-wallet-adapter-reactui";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import {
  DecryptPermission,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";

function App() {
  console.log("In the APP")
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "AleoGuard",
      }),
    ],
    []
  );
  console.log(wallets)
  const { publicKey, decrypt } = useWallet();
  console.log(publicKey)
  return (
    <WalletProvider
      wallets={wallets}
      decryptPermission={DecryptPermission.AutoDecrypt}
      network={WalletAdapterNetwork.Testnet}
      autoConnect
    >
      <WalletModalProvider>
        <div className="min-h-screen flex items-center justify-center bg-purple-500">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              AleoGuard
            </h1>
            <div className="space-y-4">
              <Link to="create">
                <button className="bg-purple-700 text-white mx-2 py-2 px-4 rounded">
                  Create Repo
                </button>
              </Link>
              <Link to="view">
                <button className="bg-purple-700 text-white py-2 px-4 rounded">
                  View Repo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </WalletModalProvider>
    </WalletProvider>
  );
}

export default App;
