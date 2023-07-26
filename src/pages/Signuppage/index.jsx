import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, Img, Input, Text } from "components";
import Header1 from "components/Header1";

const SignuppagePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-center justify-start md:px-5 w-[94%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start w-[52%] md:w-full">
              <Img
                className="h-[952px] md:h-auto object-cover w-full"
                src="images/img_andmachinesvq.png"
                alt="andmachinesvq"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[43%] md:w-full">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900"
                size="txtCoreSansC65Bold34Bluegray900"
              >
                Sign Up
              </Text>
              <Text
                className="mt-[11px] text-base text-gray-700_cc"
                size="txtCaustenMedium16Gray700cc"
              >
                Sign up for free to access to in any of our products{" "}
              </Text>
              <div className="flex flex-col font-causten gap-5 items-center justify-start mt-[46px] w-full">
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
                  className="border border-gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[567px] sm:min-w-full px-[34px] py-[15px] rounded-lg"
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
              </div>
              <div className="flex flex-col font-causten gap-1.5 items-start justify-start mt-[50px] pb-0.5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenRegular18"
                  >
                    Email Address
                  </Text>
                  <Input
                    name="email"
                    placeholder="designer@gmail.com"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                    wrapClassName="border border-gray-800 border-solid mb-[3px] pb-[15px] pl-5 pr-[35px] pt-5 rounded-lg w-full"
                    type="email"
                  ></Input>
                </div>
                <Text
                  className="text-base text-pink-500"
                  size="txtCaustenRegular16Pink500"
                >
                  Error Message
                </Text>
              </div>
              <div className="font-causten h-[127px] md:h-[154px] mt-[30px] relative w-full">
                <div className="absolute flex flex-col gap-2.5 h-max inset-[0] items-center justify-center m-auto pb-[3px] pr-[3px] w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between pt-0.5 w-full">
                    <Text
                      className="mt-0.5 text-gray-800 text-lg tracking-[0.36px]"
                      size="txtCaustenRegular18"
                    >
                      Password
                    </Text>
                    <div className="flex flex-row gap-[15px] items-start justify-start mb-[3px]">
                      <Img
                        className="h-4 mt-1"
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
                  <div className="border border-gray-800 border-solid h-[58px] mb-[26px] rounded-lg w-full"></div>
                </div>
                <Text
                  className="absolute bottom-[0] left-[0] text-base text-gray-600 text-right"
                  size="txtCaustenMedium16"
                >
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </Text>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start mt-[26px] w-[66%] md:w-full">
                <CheckBox
                  className="font-poppins leading-[normal] text-gray-600 text-left text-lg"
                  inputClassName="bg-gray-800 h-[18px] mr-[5px] w-[18px]"
                  name="agreetoourterms_One"
                  id="agreetoourterms_One"
                  label="Agree to our Terms of use and Privacy Policy "
                ></CheckBox>
                <CheckBox
                  className="font-causten font-medium leading-[normal] mb-1 text-gray-600 text-left text-lg"
                  inputClassName="bg-gray-800 h-[18px] mr-[5px] w-[18px]"
                  name="subscribetoour"
                  id="subscribetoour"
                  label="Subscribe to our monthly newsletter"
                ></CheckBox>
              </div>
              <div className="flex flex-col font-causten gap-3 items-start justify-start mt-[50px] w-[43%] md:w-full">
                <Button className="bg-deep_purple-A200 cursor-pointer font-medium leading-[normal] py-4 rounded-lg text-center text-lg text-white-A700 w-[167px]">
                  Sign Up
                </Button>
                <Text
                  className="text-base text-gray-800"
                  size="txtCaustenRegular16"
                >
                  <span className="text-gray-800 tracking-[0.32px] font-causten text-left font-normal">
                    Already have an account?{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-gray-800 tracking-[0.32px] font-causten text-left font-normal underline"
                  >
                    Log in
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

export default SignuppagePage;
