import React from "react";

import { Button, Img, Text } from "components";
import Header1 from "components/Header1";

const CheckEmailPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start md:px-5 w-[90%] md:w-full">
            <Img
              className="h-[956px] sm:h-auto object-cover w-[54%] md:w-full"
              src="images/img_bertbrhnff6hb41sunsplash_1.png"
              alt="bertbrhnff6hbFortyOne"
            />
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[55px] w-[41%] md:w-full">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 tracking-[0.68px]"
                size="txtCoreSansC65Bold34Bluegray900"
              >
                Check Email
              </Text>
              <Text
                className="mt-[33px] text-base text-gray-700_cc tracking-[0.32px]"
                size="txtCaustenMedium16Gray700cc"
              >
                <span className="text-gray-700_cc font-causten text-left font-medium">
                  <>
                    Please check your email inbox and click on the provided link
                    to reset your
                    <br />
                    password . If you don’t receive email,{" "}
                  </>
                </span>
                <span className="text-deep_purple-A200 font-causten text-left font-bold">
                  Click here to resend
                </span>
              </Text>
              <div className="flex flex-row font-causten gap-2.5 items-center justify-center mt-[30px] w-auto">
                <Img
                  className="h-[13px] w-[13px]"
                  src="images/img_arrowleft_gray_800.svg"
                  alt="arrowleft"
                />
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtCaustenRegular16Gray600"
                >
                  <span className="text-gray-600 font-causten text-left font-medium">
                    Back to{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-gray-600 font-causten text-left font-medium underline"
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

export default CheckEmailPage;
