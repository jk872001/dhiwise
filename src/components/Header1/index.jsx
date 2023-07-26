import React from "react";

import { Button, Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[30px] mt-[34px] mx-auto w-[87%]">
          <div className="md:h-[45px] h-[46px] relative w-[8%] md:w-full">
            <Text
              className="m-auto sm:text-[30.060000000000002px] md:text-[32.06px] text-[34.06px] text-gray-800"
              size="txtMintaka3406"
            >
              Euphoria
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
              <Img className="h-[7px]" src="images/img_cut_12.svg" alt="cut" />
            </div>
          </div>
          <Button
            className="bg-gray-100 cursor-pointer flex items-center justify-center min-w-[184px] md:ml-[0] ml-[163px] px-[35px] py-[11px] rounded-lg"
            leftIcon={
              <Img
                className="h-5 mb-0.5 mr-3"
                src="images/img_search.svg"
                alt="search"
              />
            }
          >
            <div className="font-causten font-medium leading-[normal] sm:px-5 text-center text-gray-600 text-lg">
              Search
            </div>
          </Button>
          <div className="flex flex-row gap-[19px] items-center justify-center md:ml-[0] ml-[210px] pr-0.5 pt-0.5 w-[17%] md:w-full">
            <Text
              className="text-blue_gray-900 text-lg"
              size="txtCaustenRegular18Bluegray900"
            >
              English (united States)
            </Text>
            <Img
              className="h-[5px] mr-1"
              src="images/img_vector_blue_gray_900.svg"
              alt="vector"
            />
          </div>
          <Button className="border border-gray-800 border-solid cursor-pointer font-causten font-medium leading-[normal] min-w-[140px] md:ml-[0] ml-[60px] py-3 rounded-lg text-center text-deep_purple-A200 text-lg">
            Login
          </Button>
          <Button className="bg-deep_purple-A200 cursor-pointer font-causten font-medium leading-[normal] min-w-[156px] md:ml-[0] ml-[29px] py-3 rounded-lg text-center text-lg text-white-A700">
            Sign Up
          </Button>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
