import { EachWallet } from "./eachWallet";
import { motion } from "framer-motion";
import metamask from "../assets/cryptoIcons/walletIcons/metamask-icon.png";
import trustWallet from "../assets/cryptoIcons/walletIcons/trustwallet.png";
import cryptodotcom from "../assets/cryptoIcons/walletIcons/cryptodotcom.png";
import ledger from "../assets/cryptoIcons/walletIcons/ledger.png";
import coinbase from "../assets/cryptoIcons/walletIcons/coinbase.png";
import walletConnect from "../assets/cryptoIcons/walletIcons/walletConnect.png";
import binanceWallet from "../assets/cryptoIcons/walletIcons/binance.png";
import trezor from "../assets/cryptoIcons/walletIcons/trezor.png";

export const AllWallets = () => {
  return (
    <motion.div
      
      className="flex flex-col gap-y-2">
      <EachWallet
        walletName={"Metamask"}
        iconLink={metamask}
      />

      <EachWallet
        walletName={"Trust Wallet"}
        iconLink={trustWallet}
      />

      <EachWallet
        walletName={"Crypto.com"}
        iconLink={cryptodotcom}
      />

      <EachWallet
        walletName={"Ledger"}
        iconLink={ledger}
      />

      <EachWallet
        walletName={"Coinbase"}
        iconLink={coinbase}
      />

      <EachWallet
        walletName={"Binance Chain Wallet"}
        iconLink={binanceWallet}
      />

      <EachWallet
        walletName={"Trezor"}
        iconLink={trezor}
      />

      <EachWallet
        walletName={"WalletConnect"}
        iconLink={walletConnect}
      />
    </motion.div>
  );
};
