import React from "react";
import registerAnimation from "../../assets/Animation/animation-register/Animation-Register.json";
import { useLottie } from "lottie-react";
const Register = () => {
  const options = {
    animationData: registerAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="flex">
      <div className="w-1/2">{View}</div>
    </div>
  );
};

export default Register;
