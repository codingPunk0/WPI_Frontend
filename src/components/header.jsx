import { NavBar } from "./navBar";
import { useList } from "../globalState/stateProvider";

export const Header = () => {
  const { setConnect } = useList();

  return (
    <div>
      <center>
        <NavBar />

        <section className="mt-[6rem]">
          <h1 className="text-2xl font-bold">
            The Communication Protocol For Dapp
          </h1>
          <p className="text-lg mt-5 text-gray-500">
            Ecosystem that enables wallets and apps to securely connect and
            interact.
          </p>
          <div className="flex flex-row gap-x-5 mt-5 w-fit mx-auto">
            <button
              onClick={() => {
                setConnect(true);
              }}
              className="bg-blue-500 py-3 px-4 rounded">
              Connect wallet
            </button>
            <button
              onClick={() => {
                setConnect(true);
              }}
              className="bg-gray-700 py-3 px-4 rounded">
              Migrate token
            </button>
          </div>
        </section>
      </center>
    </div>
  );
};
