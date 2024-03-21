import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.div
      initial={{
        width: 0,
        height: 10,
        backgroundColor: "#034694",
        opacity: 1,
      }}
      animate={{
        width: [0, 1440],
        height: [150],
        rotate: [45, 90],
        x: [0, -650],
        backgroundColor: ["#034694", "#DBA111"],
        opacity: [1, 0.3],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    />
  );
};

export default Background;
