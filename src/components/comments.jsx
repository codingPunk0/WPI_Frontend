import { FourPointStar, FiveStar } from "./stars";

export const Comments = () => {
  return (
    <section className="flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[400px]">
        <FourPointStar />
        <p className="mb-3">
          <i className="text-gray-500">
            "The only tool that has the technology to meet our unique and
            complex needs."
          </i>
        </p>
        <p>
          James <span className="text-purple-700">- 4.7</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-[400px]">
        <FourPointStar />
        <p className="mb-3">
          <i className="text-gray-500">
            "Fast, efficient and very user friendy."
          </i>
        </p>
        <p>
          Darlton <span className="text-purple-700">- 4.9</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-[400px]">
        <FiveStar />
        <p className="mb-3">
          <i className="text-gray-500">
            "Ridiculously good, the best web3 integrator I've ever used."
          </i>
        </p>
        <p>
          Irene <span className="text-purple-700">- 5.0</span>
        </p>
      </div>
    </section>
  );
};
