import "./App.css";
import { FirstSection } from "./components/firstSection";
import { SecondSection } from "./components/secondSection";
import { ConnectWallet } from "./components/connectWallet";
import { useList } from "./globalState/stateProvider";
import { Overlay } from "./components/overlay";
import { Connecting } from "./components/connecting";

function App() {
  const { showConnectWallet, connect } = useList();

  return (
    <main className={``}>
      <FirstSection />
      <SecondSection />
      {showConnectWallet && !connect && <ConnectWallet />}
      {connect && !showConnectWallet && <Connecting />}
      {(showConnectWallet || connect) && <Overlay />}
    </main>
  );
}

export default App;
