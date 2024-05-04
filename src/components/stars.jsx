import { IoStarSharp } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";

export const FourPointStar = () => {
  return (
    <div className="flex flex-row mb-3">
      {Array.from({ length: 4 }, (item, i) => (
        <IoStarSharp color="#FFD700" />
      ))}
      <IoStarHalfSharp color="#FFD700" />
    </div>
  );
};

export const FiveStar = () => {
  return (
    <div className="flex flex-row mb-3">
      {Array.from({ length: 5 }, (item, i) => (
        <IoStarSharp color="#FFD700" />
      ))}
    </div>
  );
};
