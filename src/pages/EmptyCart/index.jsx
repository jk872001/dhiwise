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

const EmptyCartPage = () => {
  const [buttonvalue, setButtonvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-causten items-center justify-start mx-auto w-full">
        <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-gray-100 flex flex-col items-center justify-start p-[105px] md:px-10 sm:px-5 w-full">
          <Img
            className="h-[327px]"
            src="images/img_frame376.svg"
            alt="frame376"
          />
          <div className="flex flex-col font-coresansc gap-1.5 items-center justify-start mt-[41px]">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-black-900"
              size="txtCoreSansC65Bold34Black900"
            >
              Your cart is empty and sad :(
            </Text>
            <Text
              className="text-base text-gray-600"
              size="txtCoreSansC45Regular16"
            >
              Add something to make it happy!
            </Text>
          </div>
          <Button className="bg-deep_purple-A200 cursor-pointer font-semibold leading-[normal] min-w-[246px] mt-[50px] py-3 rounded-lg text-center text-lg text-white-A700">
            Continue Shopping
          </Button>
        </div>
        <Footer className="bg-gray-800 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default EmptyCartPage;
