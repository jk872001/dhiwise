import React from "react";

import { Img, Text } from "components";

const HomePageLogo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="absolute h-max inset-[0] justify-center m-auto sm:text-[30.060000000000002px] md:text-[32.06px] text-[34.06px] text-gray-800 w-max"
          size="txtMintaka3406"
        >
          {props?.username}
        </Text>
        <div className="absolute bottom-[7%] flex flex-col inset-x-[0] items-end justify-start mx-auto w-full">
          <div className="flex flex-row gap-[9px] items-start justify-between w-full">
            <Img
              className="h-px"
              src="images/img_group_blue_gray_900.svg"
              alt="group"
            />
            <Img
              className="h-px"
              src="images/img_group_gray_800.svg"
              alt="group_One"
            />
          </div>
          <Img className="h-[7px]" src="images/img_cut.svg" alt="cut" />
        </div>
      </div>
    </>
  );
};

HomePageLogo.defaultProps = { username: "Euphoria" };

export default HomePageLogo;
