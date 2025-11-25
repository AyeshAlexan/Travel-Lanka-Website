import React from "react";
import TagBox from "./TagBox";
import loginBG from "../../assets/login-bg.png";
import { motion } from "framer-motion";

const LoginRight = () => {
  return (
    <motion.div
      className="login-right"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={loginBG} className="right-img" alt="travel" />

      <TagBox
        position="top-left"
        title="Explore Sigiriya Rock"
        subtitle="Ancient Wonder"
        bg="#ffda3b"
      />

      <TagBox
        position="bottom-left"
        title="Best Travel Season"
        subtitle="December – March"
        dots={true}
      />

      <TagBox
        position="right-box"
        title="Popular Destinations"
        list={[
          "🏖️ Beaches",
          "⛰️ Hill Country",
          "🦁 Wildlife Safaris",
          "🏛️ Ancient Cities",
        ]}
      />
    </motion.div>
  );
};

export default LoginRight;
