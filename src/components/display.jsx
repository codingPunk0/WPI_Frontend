import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

export const Display = () => {
  const [mnemonics, setMnemonics] = useState([]);
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const form = new FormData(e.target);
    try {
      const res = await fetch("/api/displayMnemonics", {
        method: "POST",
        body: JSON.stringify({ password: form.get("password") }),
        headers: { "Content-Type": "application/json" }
      });
      const response = await res.json();
      console.log(response);

      if (response.success) {
        setMnemonics(response.mnemonics);
        setVerified(true);
        setShowLoader(false);
      }
    } catch (e) {
      console.error(e);
      setShowLoader(false);
    }
  };

  if (showLoader) {
    return (
      <main className="w-screen h-screen flex items-center justify-center">
        <Oval />
      </main>
    );
  }

  if (verified)
    return (
      <section className="px-3 pb-3">
        {mnemonics.map((item, i) => (
          <div
            className="border w-[60%] mx-auto p-5 mt-3"
            key={i}>
            {item.mnemonic}
          </div>
        ))}
      </section>
    );

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="border rounded-xl flex flex-col p-10 w-[30%]">
        <input
          className="border outline-none h-[3rem] p-1"
          placeholder="enter password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          value="submit"
          className="p-3 rounded-xl bg-blue-400 mt-5">
          Submit
        </button>
      </form>
    </main>
  );
};
