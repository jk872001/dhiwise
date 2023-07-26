import React from "react";

import { Button, Img, Text } from "components";

const WishlistRowarrowright = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_arrowright_gray_800_22x22.svg"
          alt="arrowright"
        />
        <Img
          className="h-[110px] md:h-auto object-cover rounded w-[110px]"
          alt="rectangle754"
          src="props?.userrectangle754"
        />
        <div className="flex flex-col items-start justify-start pt-[3px] w-[78%] md:w-full">
          <Text
            className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
            size="txtCaustenBold22"
          >
            {props?.userlanguage}
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start pr-[7px] w-full">
            {props?.usercoloryellow}
            <Text
              className="sm:ml-[0] ml-[295px] sm:mt-0 mt-[13px] text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[0.44px]"
              size="txtCaustenBold22Gray600"
            >
              {props?.userprice}
            </Text>
            <Button className="bg-deep_purple-A200 cursor-pointer font-causten font-medium leading-[normal] min-w-[143px] sm:ml-[0] ml-[50px] py-3.5 rounded-lg text-center text-lg text-white-A700">
              {props?.useraddtocart}
            </Button>
          </div>
          {props?.userquantityone}
        </div>
      </div>
    </>
  );
};

WishlistRowarrowright.defaultProps = {
  userrectangle754: "images/img_rectangle754.png",
  userlanguage: "Blue Flower Print Crop Top ",
  usercoloryellow: (
    <Text
      className="sm:mt-0 mt-[13px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
      size="txtCaustenBold22"
    >
      <span className="text-gray-800 font-causten text-left font-bold">
        Color :{" "}
      </span>
      <span className="text-gray-600 font-causten text-left font-medium">
        Yellow
      </span>
    </Text>
  ),
  userprice: "$29.00",
  useraddtocart: "Add to cart",
  userquantityone: (
    <Text
      className="mt-[3px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
      size="txtCaustenBold22"
    >
      <span className="text-gray-800 font-causten text-left font-bold">
        Quantity
      </span>
      <span className="text-gray-800 font-causten text-left font-bold">
        {" "}
        :{" "}
      </span>
      <span className="text-gray-600 font-causten text-left font-medium">
        1
      </span>
    </Text>
  ),
};

export default WishlistRowarrowright;
