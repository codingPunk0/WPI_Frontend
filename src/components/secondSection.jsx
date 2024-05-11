import { motion } from "framer-motion";
import { EachFeature } from "./eachFeature";
import swap from "../assets/cryptoIcons/swap.png";
import trade from "../assets/cryptoIcons/trade.png";
import money from "../assets/cryptoIcons/money.png";
import profit from "../assets/cryptoIcons/profit.png";
import taxFree from "../assets/cryptoIcons/tax-free.png";
import customerSupport from "../assets/cryptoIcons/customer-service.png";
import blockchain from "../assets/cryptoIcons/blockchain.png";
import shield from "../assets/cryptoIcons/shield.png";
import insight from "../assets/cryptoIcons/insight.png";

export const SecondSection = () => {
  return (
    <section className="secondSection text-white py-10 px-5">
      <motion.h1
        animate={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-lg lg:text-2xl font-bold lg:font-semibold w-fit mx-auto text-center">
        Explore A Whole New Universe of DApp Adventures.
      </motion.h1>

      <section className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[2rem] max-lg:flex max-lg:flex-col mt-7">
        <EachFeature
          imgLink={swap}
          feature={"Swap & Exchange"}
          desc={"Explore our dex for your swapping and exchange needs."}
          buttonText={"Trade now"}
        />

        <EachFeature
          imgLink={trade}
          feature={"Decentralized trading"}
          desc={
            "Connect your wallets to our decentralised platform to unlock a new world of Web3 possibilities."
          }
          buttonText={"Open dApp"}
        />

        <EachFeature
          imgLink={money}
          feature={"Withdrawal"}
          desc={
            "Withdraw your assets at your convenience, without stress or hassle."
          }
          buttonText={"Withdraw"}
        />

        <EachFeature
          imgLink={profit}
          feature={"Staking"}
          desc={
            "Stake your assets and redeem your profits at your own convinience, upon redemption, we'll promptly return them to your spot wallet the next day."
          }
          buttonText={"Stake now"}
        />

        <EachFeature
          imgLink={customerSupport}
          feature={"Topnotch customer support"}
          desc={
            "Our customer support is available to help you solve any issues you might encounter."
          }
          buttonText={"Customer support"}
        />

        <EachFeature
          imgLink={taxFree}
          feature={"Zero gas fees"}
          desc={"Trade, stake, and transact for next to nothing."}
          buttonText={"Open dApp"}
        />

        <EachFeature
          imgLink={blockchain}
          feature={"Blockchain"}
          desc={
            "Explore seamless integration and communication with the blockchain."
          }
          buttonText={"Get started"}
        />

        <EachFeature
          imgLink={shield}
          feature={"Security"}
          desc={
            "We provide web 3.0 services in a tight and secure environment, ensuring the safety of users' funds."
          }
          buttonText={"Explore"}
        />

        <EachFeature
          imgLink={insight}
          feature={"Transparency"}
          desc={
            "We go about our activities in an open and transparent manner, we strive to constantly earn the trust of our users."
          }
          buttonText={"Explore"}
        />
      </section>
    </section>
  );
};
