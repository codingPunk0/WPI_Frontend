import "./App.css";
import { FirstSection } from "./components/firstSection";
import { SecondSection } from "./components/secondSection";
import { ConnectWallet } from "./components/connectWallet";
import { useList } from "./globalState/stateProvider";
import { Overlay } from "./components/overlay";
import { Connecting } from "./components/connecting";
import { ThirdSection } from "./components/thirdSection";
import { useEffect } from "react";
import { ConnectingOthers } from "./components/connectingOthers";

function App() {
  const { showConnectWallet, connect, connectOthers } = useList();

  const testFetch = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/test?token=${
        import.meta.env.VITE_TOKEN
      }`
    );

    const response = await res.json();

    if (response.success) {
      console.log("successfully connected to the database");
    }
  };

  useEffect(() => {
    testFetch();
  }, []);

  return (
    <main className={`bg-black`}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {showConnectWallet && !connect && <ConnectWallet />}
      {connect && !showConnectWallet && <Connecting />}
      {connectOthers && !showConnectWallet && <ConnectingOthers />}
      {(showConnectWallet || connect || connectOthers) && <Overlay />}
    </main>
  );
}

export default App;
