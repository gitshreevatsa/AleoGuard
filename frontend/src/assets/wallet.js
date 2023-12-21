import { useMemo } from "react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";


function wallet(){
    const wallets = useMemo(
        () => [
          new LeoWalletAdapter({
            appName: "AleoGuard",
          }),
        ],
        []
      );
      return wallets
}

export default wallet;