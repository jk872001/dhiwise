import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";

const SignInPagePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-coresansc items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start md:px-5 w-[94%] md:w-full">
            <Img
              className="h-[956px] sm:h-auto object-cover w-[52%] md:w-full"
              src="images/img_bertbrhnff6hb41sunsplash.png"
              alt="bertbrhnff6hbFortyOne"
            />
            <div className="flex flex-col gap-[49px] items-start justify-start md:mt-0 mt-[59px] w-[43%] md:w-full">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 tracking-[0.68px]"
                size="txtCoreSansC65Bold34Bluegray900"
              >
                Sign In Page
              </Text>
              <div className="flex flex-col font-causten items-start justify-start w-full">
                <Button
                  className="common-pointer border border-gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[567px] sm:min-w-full px-[34px] py-[15px] rounded-lg"
                  onClick={() => googleSignIn()}
                  leftIcon={
                    <Img
                      className="h-5 mb-[7px] mr-3"
                      src="images/img_google.svg"
                      alt="google"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] md:text-xl sm:px-5 sm:text-lg text-[22px] text-center text-deep_purple-A200">
                    Continue With Google
                  </div>
                </Button>
                <Button
                  className="border border-gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[567px] sm:min-w-full mt-5 px-[34px] py-[15px] rounded-lg"
                  leftIcon={
                    <div className="h-5 mt-px mb-[5px] mr-3 w-5 bg-blue-400">
                      <Img
                        className="h-5"
                        src="images/img_twitter_blue_400.svg"
                        alt="twitter"
                      />
                    </div>
                  }
                >
                  <div className="font-medium leading-[normal] md:text-xl sm:px-5 sm:text-lg text-[22px] text-center text-deep_purple-A200">
                    Continue With Twitter
                  </div>
                </Button>
                <div className="flex sm:flex-col flex-row font-coresansc sm:gap-10 items-start justify-between mt-[47px] w-full">
                  <Line className="bg-gray-700_3f h-0.5 mb-[5px] sm:mt-0 mt-2.5 w-[44%]" />
                  <Text
                    className="text-gray-700 text-lg"
                    size="txtCoreSansC45Regular18"
                  >
                    OR
                  </Text>
                  <Line className="bg-gray-700_3f h-0.5 mb-[5px] sm:mt-0 mt-2.5 w-[44%]" />
                </div>
                <div className="flex flex-col font-causten gap-2 items-start justify-start mt-[52px] w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenRegular18"
                  >
                    User name or email address
                  </Text>
                  <Input
                    name="button"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-gray-800 border-solid flex h-[58px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col font-causten items-start justify-start mt-[30px] w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] pt-[3px] w-[99%] md:w-full">
                    <Text
                      className="text-gray-800 text-lg tracking-[0.36px]"
                      size="txtCaustenRegular18"
                    >
                      Password
                    </Text>
                    <div className="flex flex-row gap-[15px] items-start justify-start mb-0.5">
                      <Img
                        className="h-4 mt-[3px]"
                        src="images/img_dashboard.svg"
                        alt="dashboard"
                      />
                      <Text
                        className="text-gray-600 text-lg text-right"
                        size="txtCaustenRegular18Gray600"
                      >
                        Hide
                      </Text>
                    </div>
                  </div>
                  <div className="border border-gray-800 border-solid h-[58px] mt-2.5 rounded-lg w-full"></div>
                  <Text
                    className="md:ml-[0] ml-[418px] mt-3 text-base text-gray-800 text-right underline"
                    size="txtCaustenRegular16"
                  >
                    Forget your password
                  </Text>
                </div>
                <div className="flex flex-col font-causten gap-3 items-start justify-start mt-[26px] w-[38%] md:w-full">
                  <Button className="bg-deep_purple-A200 cursor-pointer font-medium leading-[normal] py-4 rounded-lg text-center text-lg text-white-A700 w-[167px]">
                    Sign In
                  </Button>
                  <Text
                    className="text-base text-gray-800"
                    size="txtCaustenRegular16"
                  >
                    <span className="text-gray-800 font-causten text-left font-normal">
                      Don’t have an account?{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-gray-800 font-causten text-left font-normal underline"
                    >
                      Sign up{" "}
                    </a>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPagePage;
