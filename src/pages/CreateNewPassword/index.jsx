import React from "react";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";

const CreateNewPasswordPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-causten items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start md:px-5 w-[94%] md:w-full">
            <Img
              className="h-[956px] sm:h-auto object-cover w-[52%] md:w-full"
              src="images/img_bertbrhnff6hb41sunsplash_3.png"
              alt="bertbrhnff6hbFortyOne"
            />
            <div className="flex flex-col gap-[34px] items-start justify-start md:mt-0 mt-[55px] w-[43%] md:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 tracking-[0.68px]"
                  size="txtCoreSansC65Bold34Bluegray900"
                >
                  Create New Password
                </Text>
                <Text
                  className="text-base text-gray-700_cc"
                  size="txtCaustenMedium16Gray700cc"
                >
                  Your new password must be different from previous used
                  passwords.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenRegular18"
                  >
                    Password
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-2 w-full">
                    <Input
                      name="button"
                      placeholder=""
                      className="p-0 sm:pl-5 w-full"
                      wrapClassName="border border-gray-800 border-solid flex pl-[26px] pr-5 py-4 rounded-lg w-[567px] sm:w-full"
                      suffix={
                        <Img
                          className="h-5 ml-[35px] my-auto"
                          src="images/img_dashboard.svg"
                          alt="dashboard"
                        />
                      }
                    ></Input>
                  </div>
                  <Text
                    className="mt-2.5 text-base text-gray-600"
                    size="txtCaustenMedium16"
                  >
                    Must be at least 8 characters.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mt-[29px] w-full">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] pr-1 pt-1">
                    <Text
                      className="text-gray-800 text-lg tracking-[0.36px]"
                      size="txtCaustenRegular18"
                    >
                      Confirm Password
                    </Text>
                  </div>
                  <Input
                    name="frame400"
                    placeholder=""
                    className="p-0 sm:pl-5 w-full"
                    wrapClassName="border border-gray-700_cc border-solid flex h-[58px] mt-2.5 pl-[26px] py-[26px] rounded-lg w-full"
                  ></Input>
                  <Text
                    className="mt-[13px] text-base text-red-A700"
                    size="txtCaustenRegular16RedA700"
                  >
                    New password and comfirm new password do not match
                  </Text>
                </div>
                <Button className="bg-deep_purple-A200 cursor-pointer font-medium leading-[normal] mt-[45px] py-4 rounded-lg text-center text-lg text-white-A700 w-[167px]">
                  Reset Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewPasswordPage;
