import heroImage from "../assets/earth-min.png";
import { motion } from "framer-motion";

export const HeroImage = ({ ...props}) => {
  return (
    <motion.div {...props}>
      <motion.img
        className="w-[800px] mx-auto my-[100px] rounded-2xl"
        src={heroImage}
      />
    </motion.div>
  );
};
