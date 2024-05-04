import LogoLink from "../assets/pyramid.png";

export const NavBar = () => {
  return (
    <nav className="flex flex-row w-full h-[5rem] py-3">
      <div className="w-1/2 flex items-start justify-start">
        <img
          className="w-[3rem] ml-[11rem] mt-2"
          src={LogoLink}
          alt="logo"
        />
      </div>

      <div className="w-1/2 flex items-end justify-end mr-[11rem]">
        <button className="p-3 rounded bg-blue-500">Claim Airdrop</button>
      </div>
    </nav>
  );
};
