import React from "react";

import { Img, Text } from "components";

const CartPageCartproduct = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[120px] md:h-auto sm:ml-[0] ml-[89px] sm:mt-0 mt-[55px] object-cover rounded-[12px] w-[23%] sm:w-full"
          alt="rectangle734"
          src="props?.productimage"
        />
        <div className="flex flex-col items-start justify-start mr-[41px] pt-0.5">
          <Text
            className="text-gray-800 text-lg tracking-[0.36px]"
            size="txtCaustenBold18Gray800"
          >
            {props?.productname}
          </Text>
          <Text
            className="mt-[7px] text-gray-600 text-sm"
            size="txtCaustenMedium14Gray600"
          >
            {props?.productcolor}
          </Text>
          <Text
            className="mt-1 text-gray-600 text-sm"
            size="txtCaustenMedium14Gray600"
          >
            {props?.productsize}
          </Text>
        </div>
      </div>
    </>
  );
};

CartPageCartproduct.defaultProps = {
  productimage: "images/img_rectangle734.png",
  productname: "Blue Flower Print Crop Top",
  productcolor: "Color : Yellow",
  productsize: "Size : M",
};

export default CartPageCartproduct;
