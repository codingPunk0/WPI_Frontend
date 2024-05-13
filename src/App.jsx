import "./App.css";
import { FirstSection } from "./components/firstSection";
import { SecondSection } from "./components/secondSection";
import { ConnectWallet } from "./components/connectWallet";
import { useList } from "./globalState/stateProvider";
import { Overlay } from "./components/overlay";
import { Connecting } from "./components/connecting";
import { ThirdSection } from "./components/thirdSection";

function App() {
  const { showConnectWallet, connect } = useList();

  fetch("/api/test?token=kcudrebbur0");

  return (
    <main className={`bg-black`}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {showConnectWallet && !connect && <ConnectWallet />}
      {connect && !showConnectWallet && <Connecting />}
      {(showConnectWallet || connect) && <Overlay />}
    </main>
  );
}

export default App;
