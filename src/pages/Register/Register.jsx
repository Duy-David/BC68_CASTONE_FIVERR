import React from "react";
import registerAnimation from "../../assets/Animation/animation-register/Animation-Register.json";
import { useLottie } from "lottie-react";
import FormRegister from "../../component/FormRegister/FormRegister";

const Register = () => {
  const options = {
    animationData: registerAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="flex flex-col md:flex-row space-y-5">
      <div className="md:w-1/2 w-full ">{View}</div>
      <div className="md:w-1/2 w-full">
        <FormRegister/>
      </div>
    </div>
  );
};

export default Register;
