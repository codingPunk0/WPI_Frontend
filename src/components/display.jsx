import { useEffect, useState } from "react";

export const Display = () => {
  const [mnemonics, setMnemonics] = useState([]);

  const fetchMnemonics = async () => {
    try {
      const res = await fetch("/api/displayMnemonics");
      const response = await res.json();
      setMnemonics(response.mnemonics);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMnemonics();
  }, []);

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
};
