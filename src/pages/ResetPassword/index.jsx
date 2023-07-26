import React from "react";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";

const ResetPasswordPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-causten items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start md:px-5 w-[94%] md:w-full">
            <Img
              className="h-[956px] sm:h-auto object-cover w-[52%] md:w-full"
              src="images/img_bertbrhnff6hb41sunsplash_956x695.png"
              alt="bertbrhnff6hbFortyOne"
            />
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[55px] w-[43%] md:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 tracking-[0.68px]"
                  size="txtCoreSansC65Bold34Bluegray900"
                >
                  Reset Your Password
                </Text>
                <Text
                  className="mt-3.5 text-base text-blue_gray-600"
                  size="txtRobotoRegular16"
                >
                  <>
                    Enter your email and we&#39;ll send you a link to reset your
                    password.
                  </>
                </Text>
                <Text
                  className="mt-1 text-base text-gray-700_cc"
                  size="txtCaustenMedium16Gray700cc"
                >
                  Please check it.
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-7 w-full">
                <Text
                  className="text-gray-800 text-lg tracking-[0.36px]"
                  size="txtCaustenRegular18"
                >
                  Email
                </Text>
                <Input
                  name="email"
                  placeholder="focus001@gmail.com"
                  className="font-medium leading-[normal] p-0 placeholder:text-deep_purple-A200 sm:pr-5 text-center text-deep_purple-A200 text-lg w-full"
                  wrapClassName="bg-deep_purple-600_07 border border-deep_purple-A200 border-solid mb-0.5 pb-[13px] pl-5 pr-[35px] pt-[18px] rounded-lg w-full"
                  type="email"
                ></Input>
              </div>
              <Text
                className="mt-2.5 text-base text-pink-500"
                size="txtCaustenRegular16Pink500"
              >
                We can not find your email.
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start mt-[46px] w-[38%] md:w-full">
                <Button className="bg-deep_purple-A200 cursor-pointer font-medium leading-[normal] py-4 rounded-lg text-center text-lg text-white-A700 w-[167px]">
                  Send
                </Button>
                <Text
                  className="text-base text-gray-800"
                  size="txtCaustenRegular16"
                >
                  <span className="text-gray-800 font-causten text-left font-normal">
                    Back to{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-gray-800 font-causten text-left font-normal underline"
                  >
                    {" "}
                    Login
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
