import React from "react";

import { Img, Text } from "components";

const CheckoutRowrectangle741 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[63px] md:h-auto object-cover rounded w-[63px]"
          alt="rectangle741"
          src="props?.productimage"
        />
        <div className="flex flex-row gap-[39px] items-center justify-between w-[78%]">
          <div className="flex flex-col items-start justify-end">
            {props?.productname}
            {props?.productcolor}
          </div>
          <Text
            className="text-gray-600 text-sm tracking-[0.28px]"
            size="txtCaustenBold14Gray600"
          >
            {props?.productprice}
          </Text>
        </div>
      </div>
    </>
  );
};

CheckoutRowrectangle741.defaultProps = {
  productimage: "images/img_rectangle741.png",
  productname: (
    <Text
      className="text-gray-800 text-sm tracking-[0.28px]"
      size="txtCaustenBold14"
    >
      <span className="text-gray-800 font-causten text-left font-bold">
        Blue Flower Print Crop Top{" "}
      </span>
      <span className="text-gray-600 font-causten text-left font-bold">
        x 1
      </span>
    </Text>
  ),
  productcolor: (
    <Text
      className="mt-[3px] text-gray-800 text-sm tracking-[0.28px]"
      size="txtCaustenBold14"
    >
      <span className="text-gray-800 font-causten text-left font-bold">
        Color :{" "}
      </span>
      <span className="text-gray-600 font-causten text-left font-medium">
        Yellow
      </span>
    </Text>
  ),
  productprice: "$29.00",
};

export default CheckoutRowrectangle741;
