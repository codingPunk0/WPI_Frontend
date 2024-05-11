import { FourPointStar, FiveStar } from "./stars";
import { motion } from "framer-motion";

export const Comments = () => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-row items-center justify-center px-3">
      <div className="flex flex-col items-center justify-center w-[400px] max-lg:hidden text-center">
        <FourPointStar />
        <p className="mb-3">
          <i className="text-gray-500">
            "This tool makes it so easy to navigate the world of Web3.0"
          </i>
        </p>
        <p>
          James <span className="text-purple-700">- 4.7</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-1/2 lg:w-[400px] text-center">
        <FourPointStar />
        <p className="mb-3 max-lg:text-xs">
          <i className="text-gray-500">
            "Fast, efficient and very user friendy"
          </i>
        </p>
        <p className="text-sm">
          Darlton <span className="text-purple-700">- 4.9</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-1/2 lg:w-[400px] text-center">
        <FiveStar />
        <p className="mb-3 max-lg:text-xs">
          <i className="text-gray-500">
            "Ridiculously good, the best integrator platform I've ever
            used"
          </i>
        </p>
        <p className="text-sm">
          Irene <span className="text-purple-700">- 5.0</span>
        </p>
      </div>
    </motion.section>
  );
};
