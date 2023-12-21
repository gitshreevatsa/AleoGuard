import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateRepo from "./CreateRepo.jsx";
import ViewRepo from "./ViewRepo.jsx";
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
import wallet from "./assets/wallet.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "create",
    element: <CreateRepo />,
  },
  {
    path: "view",
    element: <ViewRepo />,
  },
]);


// const wallets = useMemo(
//   () => [
//     new LeoWalletAdapter({
//       appName: "AleoGuard",
//     }),
//   ],
//   []
// );


ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
   
);
