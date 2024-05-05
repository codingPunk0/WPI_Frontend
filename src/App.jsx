import "./App.css";
import { FirstSection } from "./components/firstSection";
import { SecondSection } from "./components/secondSection";
import { ConnectWallet } from "./components/connectWallet";
import { useList } from "./globalState/stateProvider";
import { Overlay } from "./components/overlay";

function App() {
  const { connect } = useList();

  return (
    <main className={``}>
      <FirstSection />
      <SecondSection />
      {connect && <ConnectWallet />}
      {connect && <Overlay />}
    </main>
  );
}

export default App;
