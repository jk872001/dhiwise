import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ErrorPagePage = () => {
  const [buttonvalue, setButtonvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-coresansc items-center justify-start mx-auto w-full">
        <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-[13px] items-center justify-start mt-[82px] md:px-5 w-[459px] md:w-full">
          <div className="md:h-[257px] h-[273px] pb-[3px] relative w-[87%] sm:w-full">
            <Img
              className="absolute h-[257px] left-[24%] object-cover top-[0] w-[46%]"
              src="images/img_rectangle747.png"
              alt="rectangle747"
            />
            <div className="absolute bottom-[1%] flex flex-col inset-x-[0] justify-start mx-auto pb-8 w-full">
              <Text
                className="mr-[156px] md:text-5xl text-[198.16px] text-black-900 text-center"
                size="txtCoreSansC65Bold19816"
              >
                <span className="text-blue_gray-900_01 font-coresansc font-semibold">
                  4
                </span>
                <span className="text-white-A700 font-coresansc font-semibold">
                  0
                </span>
              </Text>
              <Text
                className="md:ml-[0] ml-[215px] rotate-[-28deg] md:text-5xl text-[198.16px] text-blue_gray-900_01 text-center"
                size="txtCoreSansC65Bold19816Bluegray90001"
              >
                4
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start sm:px-5 px-[22px] w-full">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-black-900"
              size="txtCoreSansC65Bold34Black900"
            >
              Oops! Page not found
            </Text>
            <Text
              className="leading-[124.70%] mt-[9px] text-base text-center text-gray-600 tracking-[0.32px]"
              size="txtCaustenMedium16"
            >
              <>
                The page you are looking for might have been removed or
                <br />
                temporarily unavailable.
              </>
            </Text>
            <Button className="bg-deep_purple-A200 cursor-pointer font-causten font-semibold leading-[normal] min-w-[244px] mt-[42px] py-3 rounded-lg text-center text-lg text-white-A700">
              Back to HomePage
            </Button>
          </div>
        </div>
        <Footer className="bg-gray-800 flex font-causten items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ErrorPagePage;
