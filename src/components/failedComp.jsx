export const FailedComp = ({ submitHandler, tryAgainHandler }) => {
  return (
    <div>
      <p className="text-red-600 text-sm w-fit mx-auto">
        An error occured please try again or connect manually
      </p>

      <button
        onClick={tryAgainHandler}
        className="border rounded-2xl py-3 w-full hover:bg-blue-500 hover:text-white text-xs mt-5">
        Try again
      </button>
      <button
        onClick={submitHandler}
        className="border rounded-2xl py-3 w-full text-white bg-blue-600 hover:bg-blue-900 mt-3 mb-5">
        Connect manually
      </button>
    </div>
  );
};
