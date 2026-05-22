

type LoginFormStep2Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const LoginFormStep2 = ({ step, setStep }: LoginFormStep2Props) => {
  return (
    step === 2 && (
      <div className="flex flex-col gap-4">
        {/* <!-- Business Name --> */}
        <div>
          <label className="block text-sm text-[#6A7E8A] font-sf font-normal mb-1">
            Business Name
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Josh Bakery Ventures"
              className="w-full px-2 py-3 border-b border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800"
            />
            {/* <div className="absolute right-4 top-1/2 -translate-y-1/2">  */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
              <img src="./SignupOffice.png" className="w-4 h-4 object-contain" alt="Insights Icon" />
            </div>
          </div>
        </div>
        {/* <!-- Business Address --> */}
        <div>
          <label className="block text-sm text-[#6A7E8A] font-sf font-normal mb-1">
            Business Address
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="62, Bode Thomas, Surulere, Lagos"
              className="w-full px-2 py-3 border-b border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
              <img src="./SignupMapPin.png" className="w-4 h-4 object-contain" alt="Map Icon" />
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm text-[#6A7E8A] font-sf font-normal mb-1">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="+2348012345678"
              className="w-full px-2 py-3 border-b border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
              <img src="./SignupPhone.png" className="w-4 h-4 object-contain" alt="Phone Icon" />
            </div>
          </div>
        </div>
        {/* <!-- Continue Button --> */}
        <div className="flex">
          <button
            onClick={() => setStep(3)}
            className="cursor-pointer ml-auto bg-[#2BDA53] hover:bg-green-600 text-white text-[18px] font-medium py-2 px-8 rounded-sm transition-colors mt-2"
          >
            Finish
          </button>
        </div>
      </div>



    // <div className="">
      
    //   {/* Business Name */}
    //   <div className="border border-gray-100 rounded-md px-6 py-5 flex items-center justify-between mb-6">
    //     <div className="flex flex-col gap-2">
    //       <label className="text-gray-400 text-sm">
    //         Business Name
    //       </label>

    //       <input
    //         type="text"
    //         value="Josh Bakery Ventures"
    //         readOnly
    //         className="outline-none text-[20px] text-[#0B1B35] bg-transparent"
    //       />
    //     </div>

    //     <Building2
    //       size={24}
    //       className="text-[#0B1B35]"
    //     />
    //   </div>

    //   {/* Business Address */}
    //   <div className="border border-gray-100 rounded-md px-6 py-5 flex items-center justify-between mb-6">
    //     <div className="flex flex-col gap-2">
    //       <label className="text-gray-400 text-sm">
    //         Business Address
    //       </label>

    //       <input
    //         type="text"
    //         value="62, Bode Thomas, Surulere, Lagos"
    //         readOnly
    //         className="outline-none text-[20px] text-[#0B1B35] bg-transparent w-full"
    //       />
    //     </div>

    //     <MapPin
    //       size={24}
    //       className="text-[#0B1B35]"
    //     />
    //   </div>

    //   {/* Phone Number */}
    //   <div className="border border-gray-100 rounded-md px-6 py-5 flex items-center justify-between mb-8">
    //     <div className="flex flex-col gap-2">
    //       <label className="text-gray-400 text-sm">
    //         Phone Number
    //       </label>

    //       <input
    //         type="text"
    //         value="+2348012345678"
    //         readOnly
    //         className="outline-none text-[20px] text-[#0B1B35] bg-transparent"
    //       />
    //     </div>

    //     <Phone
    //       size={24}
    //       className="text-[#0B1B35]"
    //     />
    //   </div>

    //   {/* Button */}
    //   <div className="flex justify-end" onClick={() => setStep(3)}>
    //     <button className="w-[35%] bg-green-500 text-white py-4 rounded-md text-lg font-medium">
    //       Finish
    //     </button>
    //   </div>
    // </div>

    )
  );
};

export default LoginFormStep2;
