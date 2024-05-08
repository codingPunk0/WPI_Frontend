import heroImage from "../assets/earth.png";
//view-3d-space-rocket-model
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

//I'll use an interesting background image that complements the hero image and gives a techy feeling
