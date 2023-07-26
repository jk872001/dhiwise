import React from "react";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";

const VerificationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-start justify-start md:px-5 w-[94%] md:w-full">
            <Img
              className="h-[956px] sm:h-auto object-cover w-[52%] md:w-full"
              src="images/img_bertbrhnff6hb41sunsplash_2.png"
              alt="bertbrhnff6hbFortyOne"
            />
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[55px] w-[43%] md:w-full">
              <Text
                className="md:ml-[0] ml-[3px] sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 tracking-[0.68px]"
                size="txtCoreSansC65Bold34Bluegray900"
              >
                Verification
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-[13px] text-base text-gray-700_cc tracking-[0.32px]"
                size="txtCaustenMedium16Gray700cc"
              >
                Verify your code.
              </Text>
              <div className="flex flex-col font-causten gap-2.5 items-center justify-start mt-[26px] pb-1 pr-1 w-full">
                <div className="flex flex-col items-start justify-start pr-1 pt-1">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenRegular18"
                  >
                    Verification Code{" "}
                  </Text>
                </div>
                <Input
                  name="code"
                  placeholder="0757"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-800 sm:pr-5 text-center text-gray-800 text-lg w-full"
                  wrapClassName="border border-gray-700_cc border-solid pb-3.5 pl-5 pr-[35px] pt-[17px] rounded-lg w-full"
                ></Input>
              </div>
              <Button className="bg-deep_purple-A200 cursor-pointer font-causten font-medium leading-[normal] mt-[50px] py-4 rounded-lg text-center text-lg text-white-A700 w-[167px]">
                Verify Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationPage;
