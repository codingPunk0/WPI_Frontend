import LogoLink from "../assets/pyramid.png";

export const NavBar = () => {
  return (
    <nav className="flex flex-row w-full h-[5rem] border py-3">
      <div className="w-1/2 flex items-start justify-start">
        <img
          className="w-[3rem] ml-[4rem]"
          src={LogoLink}
          alt="logo"
        />
      </div>

      <div className="w-1/2 flex items-end justify-end mr-[4rem]">
        <button className="p-2 border rounded-xl">Claim Airdrop</button>
      </div>
    </nav>
  );
};
