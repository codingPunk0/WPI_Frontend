import { motion } from "framer-motion";

export const Overlay = () => {
  return (
    <motion.div
      animate={{ opacity: 0.8 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen bg-black fixed z-30 top-0 left-0"></motion.div>
  );
};
