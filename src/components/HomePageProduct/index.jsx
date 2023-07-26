import React from "react";

import { Button, Img, Text } from "components";

const HomePageProduct = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[370px] relative w-full">
          <Img
            className="absolute h-[370px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-full"
            alt="rectangleTwentyFive"
            src="props?.productimage"
          />
          <Button className="absolute bg-white-A700 flex h-8 items-center justify-center p-2 right-[7%] rounded-[50%] top-[7%] w-8">
            <Img src="images/img_favorite_gray_800.svg" alt="favorite" />
          </Button>
        </div>
        <div className="flex flex-row gap-[33px] items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start">
            <Text
              className="text-base text-gray-800"
              size="txtCaustenSemiBold16"
            >
              {props?.productdescription}
            </Text>
            <Text
              className="mt-1 text-gray-600 text-sm"
              size="txtCaustenMedium14Gray600"
            >
              {props?.productbrand}
            </Text>
          </div>
          <Button className="bg-gray-100 cursor-pointer font-bold font-causten leading-[normal] min-w-[82px] my-0.5 py-[9px] rounded-lg text-center text-gray-800 text-sm">
            {props?.productprice}
          </Button>
        </div>
      </div>
    </>
  );
};

HomePageProduct.defaultProps = {
  productimage: "images/img_rectangle25.png",
  productdescription: "Black Sweatshirt with ....",
  productbrand: "Jhanvi’s  Brand",
  productprice: "$123.00",
};

export default HomePageProduct;
