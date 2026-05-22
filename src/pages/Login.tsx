import { useState } from "react";
import LoginFormStep1 from "../components/LoginFormStep1";
import LoginFormStep2 from "../components/LoginFormStep2";
import LoginFormStep3 from "../components/LoginFormStep3";

const sigupImage = "./SignupImageCropped.png";
const sigupImage2 = "./SignupImage2(1).png";
const SignUp = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <section className="flex gap-16 h-screen overflow-hidden">
      {/* left */}
      <div className="hidden relative md:flex flex-1 h-screen overflow-hidden">
        <div className="absolute flex flex-col gap-2 bottom-12 left-1/2 -translate-x-1/2">
          <h2 className="text-[24px] font-sf text-white font-medium text-center">
            No Hazzles
          </h2>
          <p className="text-[24px] font-sf text-white tracking-[-0.58px] text-center leading-[36px] signin-img-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <p className="flex gap-[24px] items-center justify-center">
            <span
              className="boost-btn active cursor-pointer relative"
              aria-label="Boost active"
            ></span>
            <span
              className="boost-btn cursor-pointer relative"
              aria-label="Boost inactive"
            ></span>
          </p>
        </div>
        <img
          className="h-full w-full object-cover object-left"
          src={step === 2 || step === 3 ? sigupImage2 : sigupImage}
          alt="signUp Image"
        />
      </div>

      {/* Right */}
      <div className="flex flex-1 px-6 py-4">
        <div className="space-y-4 w-full">
          <h2 className="text-[34px] text-[#013C61] font-sf font-medium">
            Create your free account
          </h2>
          <p className="text-[#013C61] text-[18px] font-sf font-normal">
            Already registered?{" "}
            <a href="#" className="text-[#2BDA53]">
              Sign in
            </a>
          </p>

          <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-sm">
            <form action="">
              {/* step1 */}
              <LoginFormStep1 step={step} setStep={setStep} />

              {/* step 2 */}
              <LoginFormStep2 step={step} setStep={setStep} />
            </form>
            {/* step 3 */}
            <LoginFormStep3 step={step} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
