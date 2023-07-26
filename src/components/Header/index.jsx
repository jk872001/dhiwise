import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const Header = (props) => {
  const navigate = useNavigate();

  const [buttonvalue, setButtonvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto my-[31px] w-[86%]">
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
              <Img
                className="h-[7px]"
                src="images/img_cut_gray_800_7x53.svg"
                alt="cut"
              />
            </div>
          </div>
          <ul className="flex sm:flex-col flex-row gap-10 sm:hidden items-center justify-center md:ml-[0] ml-[87px] w-auto sm:w-full common-row-list">
            <li>
              <Text
                className="text-[22px] text-gray-600 hover:text-gray-600_01 sm:text-lg md:text-xl"
                size="txtCaustenMedium22"
              >
                Shop
              </Text>
            </li>
            <li>
              <Text
                className="text-[22px] text-gray-600 hover:text-gray-600_01 sm:text-lg md:text-xl"
                size="txtCaustenMedium22"
              >
                Men
              </Text>
            </li>
            <li>
              <Text
                className="common-pointer text-[22px] text-gray-600 hover:text-gray-600_01 sm:text-lg md:text-xl"
                size="txtCaustenMedium22"
                onClick={() => navigate("/productslistpage")}
              >
                Women
              </Text>
            </li>
            <li>
              <Text
                className="text-[22px] text-gray-600_01 sm:text-lg md:text-xl"
                size="txtCaustenMedium22Gray60001"
              >
                Combos
              </Text>
            </li>
            <li>
              <Text
                className="text-[22px] text-gray-600_01 sm:text-lg md:text-xl"
                size="txtCaustenMedium22Gray60001"
              >
                Joggers
              </Text>
            </li>
          </ul>
          <Input
            name="button"
            placeholder="Search"
            value={buttonvalue}
            onChange={(e) => setButtonvalue(e)}
            className="font-causten leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-center text-gray-600 w-full"
            wrapClassName="bg-gray-100 flex mb-0.5 md:ml-[0] ml-[75px] pl-5 pr-[35px] py-[11px] rounded-lg w-[22%] md:w-full"
            prefix={
              <Img
                className="mt-auto mb-px cursor-pointer h-5 mr-3"
                src="images/img_search.svg"
                alt="search"
              />
            }
            suffix={
              <CloseSVG
                fillColor="#807d7e"
                className="cursor-pointer h-5 my-auto"
                onClick={() => setButtonvalue("")}
                style={{
                  visibility: buttonvalue?.length <= 0 ? "hidden" : "visible",
                }}
                height={20}
                width={20}
                viewBox="0 0 20 20"
              />
            }
          ></Input>
          <div className="flex flex-row gap-3 items-start justify-start md:ml-[0] ml-[76px] w-auto">
            <Button className="bg-gray-100 flex h-11 items-center justify-center p-3 rounded-lg w-11">
              <Img
                className="h-5"
                src="images/img_favorite.svg"
                alt="favorite"
              />
            </Button>
            <Button className="bg-gray-100 flex h-11 items-center justify-center p-3 rounded-lg w-11">
              <Img className="h-5" src="images/img_user.svg" alt="user" />
            </Button>
            <Button className="bg-deep_purple-A200 flex h-11 items-center justify-center p-3 rounded-lg w-11">
              <Img
                className="h-5"
                src="images/img_cart_white_a700.svg"
                alt="cart"
              />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
