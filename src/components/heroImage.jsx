import heroImage from "../assets/earth-min.png";
import { motion } from "framer-motion";

export const HeroImage = ({ ...props }) => {
  return (
    <motion.div
      className="h-[430px] min-[370px]:h-[450px] min-[540px]:h-[559px] md:h-[711px] lg:h-[733px]"
      {...props}>
      <motion.img
        className="min-[912px]:w-[80%] min-[912px]:left-[10%] min-[1180px]:w-[70%] xl:w-[60%] 2xl:w-[50%] 2xl:left-[25%] min-[1180px]:left-[15%] xl:left-[20%] absolute mt-[100px]"
        src={heroImage}
      />
    </motion.div>
  );
};