import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
  TextArea,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const buttonEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddAddressPage = () => {
  const [buttonvalue, setButtonvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-causten items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row gap-[15px] items-center justify-start mt-[23px] md:px-5 w-auto">
            <Text
              className="text-gray-600 text-lg w-auto"
              size="txtCaustenMedium18Gray600"
            >
              Home
            </Text>
            <Img
              className="h-2.5 w-[5px]"
              src="images/img_leftstroke.svg"
              alt="leftstroke"
            />
            <Text
              className="text-gray-600 text-lg w-auto"
              size="txtCaustenMedium18Gray600"
            >
              My Account
            </Text>
            <Img
              className="h-2.5 w-[5px]"
              src="images/img_leftstroke.svg"
              alt="leftstroke_One"
            />
            <Text
              className="text-gray-800 text-lg w-auto"
              size="txtCaustenMedium18"
            >
              Delivery Address
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-coresansc gap-10 items-start justify-start mt-[50px] md:px-5 w-[32%] md:w-full">
            <div className="flex flex-row gap-[15px] items-start justify-start w-[68%] sm:w-full">
              <Line className="bg-deep_purple-A200 h-7 rounded-[3px] w-1.5" />
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
                size="txtCoreSansC65Bold28Gray800"
              >
                Hello Jhanvi
              </Text>
            </div>
            <Text
              className="sm:mt-0 mt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
              size="txtCoreSansC65Bold28Gray800"
            >
              My Info
            </Text>
          </div>
          <div className="flex flex-row font-coresansc items-start justify-between mt-[19px] md:px-5 w-[34%] md:w-full">
            <Text
              className="text-gray-600 text-sm tracking-[0.28px]"
              size="txtCoreSansC45Regular14"
            >
              Welcome to your Account
            </Text>
            <Text
              className="mt-[3px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
              size="txtCoreSansC65Bold22"
            >
              Add Address
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-causten gap-[50px] items-start justify-start max-w-[1240px] mt-9 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[24%] md:w-full">
              <div className="flex flex-col gap-7 items-start justify-start md:ml-[0] ml-[37px] w-[39%] md:w-full">
                <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                  <Img
                    className="h-[22px] mb-0.5 w-[22px]"
                    src="images/img_myorders.svg"
                    alt="myorders"
                  />
                  <Text
                    className="mt-0.5 text-gray-600 text-lg"
                    size="txtCaustenSemiBold18Gray600"
                  >
                    My orders
                  </Text>
                </div>
                <div className="flex flex-row gap-[17px] items-start justify-start w-[87%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_favorite.svg"
                    alt="favorite_One"
                  />
                  <Text
                    className="text-gray-600 text-lg"
                    size="txtCaustenSemiBold18Gray600"
                  >
                    Wishlist
                  </Text>
                </div>
              </div>
              <div className="h-11 relative w-full">
                <div className="bg-gray-100 flex flex-col h-full items-start justify-start m-auto rounded-br-lg rounded-tr-lg w-full">
                  <Line className="bg-gray-800 h-11 w-0.5" />
                </div>
                <div className="absolute flex flex-row gap-[17px] h-max inset-y-[0] items-start justify-center left-[13%] my-auto w-[32%]">
                  <Img
                    className="h-5 w-5"
                    src="images/img_user.svg"
                    alt="user_One"
                  />
                  <Text
                    className="text-gray-600 text-lg"
                    size="txtCaustenSemiBold18Gray600"
                  >
                    My info
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[37px] w-[35%] md:w-full">
                <Img
                  className="h-[22px] mb-0.5 w-[22px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
                <a href="javascript:" className="mt-0.5 text-gray-600 text-lg">
                  <Text size="txtCaustenSemiBold18Gray600">Sign out</Text>
                </a>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[19px] w-[73%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    First Name*
                  </Text>
                  <Input
                    name="button_One"
                    placeholder="First Name"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:px-5 text-base text-center text-gray-600 w-full"
                    wrapClassName="bg-gray-100 mb-0.5 pb-[15px] pl-[22px] pr-[35px] pt-[18px] rounded-lg w-full"
                    type="text"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    Last Name*
                  </Text>
                  <Input
                    name="button_Two"
                    placeholder="Last Name"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:px-5 text-base text-center text-gray-600 w-full"
                    wrapClassName="bg-gray-100 mb-0.5 pb-[15px] pl-[22px] pr-[35px] pt-[18px] rounded-lg w-full"
                    type="text"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between mt-[27px] w-full">
                <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start py-0.5 w-[48%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    Country / Region*
                  </Text>
                  <Input
                    name="button_Three"
                    placeholder="Country / Region"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:px-5 text-base text-center text-gray-600 w-full"
                    wrapClassName="bg-gray-100 pb-3.5 pl-[22px] pr-[35px] pt-[19px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start py-0.5 w-[48%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    Company Name
                  </Text>
                  <Input
                    name="button_Four"
                    placeholder="Company (optional)"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:px-5 text-base text-center text-gray-600 w-full"
                    wrapClassName="bg-gray-100 pb-3.5 pl-[22px] pr-[35px] pt-[19px] rounded-lg w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between mt-[27px] w-full">
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    Street Address*
                  </Text>
                  <Input
                    name="button_Five"
                    placeholder="House number and street name"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:px-5 text-base text-center text-gray-600 w-full"
                    wrapClassName="bg-gray-100 mb-0.5 pb-[15px] pl-[22px] pr-[35px] pt-[18px] rounded-lg w-full"
                    type="number"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start py-0.5 w-[48%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    Apt, suite, unit
                  </Text>
                  <Input
                    name="button_Six"
                    placeholder="apartment, suite, unit, etc. (optional)"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:px-5 text-base text-center text-gray-600 w-full"
                    wrapClassName="bg-gray-100 pb-3.5 pl-[22px] pr-[35px] pt-[19px] rounded-lg w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between mt-7 w-full">
                <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start pt-0.5 w-[48%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    City*
                  </Text>
                  <Input
                    name="button_Seven"
                    placeholder="Town / City"
                    className="leading-[normal] md:h-auto p-0 placeholder:text-gray-600 sm:h-auto sm:px-5 text-base text-center text-gray-600 w-full"
                    wrapClassName="bg-gray-100 pb-4 pl-[22px] pr-[35px] pt-[21px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    State*
                  </Text>
                  <SelectBox
                    className="bg-gray-100 leading-[normal] sm:px-5 px-[23px] py-[17px] rounded-lg text-base text-center text-gray-600 w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_arrowdown_gray_800_20x20.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="button_Eight"
                    options={buttonEightOptionsList}
                    isSearchable={false}
                    placeholder="State"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between mt-7 w-full">
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    Phone*
                  </Text>
                  <Input
                    name="button_Nine"
                    placeholder="Phone"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:px-5 text-base text-center text-gray-600 w-full"
                    wrapClassName="bg-gray-100 mb-0.5 pb-[15px] pl-[22px] pr-[35px] pt-[18px] rounded-lg w-full"
                    type="number"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="text-gray-800 text-lg tracking-[0.36px]"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    Postal Code*
                  </Text>
                  <Input
                    name="button_Ten"
                    placeholder="Postal Code"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:px-5 text-base text-center text-gray-600 w-full"
                    wrapClassName="bg-gray-100 mb-0.5 pl-[22px] pr-[35px] py-[17px] rounded-lg w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start mt-7 pt-0.5 w-full">
                <Text
                  className="text-gray-800 text-lg tracking-[0.36px]"
                  size="txtCaustenSemiBold18Gray800"
                >
                  Delivery Instruction
                </Text>
                <TextArea
                  className="bg-gray-100 gap-[13.39px] h-[149px] leading-[normal] max-w-[895px] sm:px-5 px-[22.32px] py-[17.86px] rounded-lg text-base text-center placeholder:text-gray-600 text-gray-600 w-full"
                  name="button_Eleven"
                  placeholder="Delivery Instruction"
                  name="button_Eleven"
                  placeholder="Delivery Instruction"
                ></TextArea>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start mt-[30px] pb-2 w-[46%] md:w-full">
                <CheckBox
                  className="leading-[normal] sm:pr-5 sm:text-[16.09px] md:text-[18.09px] text-[20.09px] text-gray-800 text-left"
                  inputClassName="border-2 border-gray-400 border-solid h-5 mr-[5px] rounded-sm w-5"
                  name="setasdefaultshi_One"
                  id="setasdefaultshi_One"
                  label="Set as default shipping address"
                ></CheckBox>
                <CheckBox
                  className="leading-[normal] sm:pr-5 sm:text-[16.09px] md:text-[18.09px] text-[20.09px] text-gray-800 text-left"
                  inputClassName="border-2 border-gray-400 border-solid h-5 mr-[5px] rounded-sm w-5"
                  name="setasdefaultbil_One"
                  id="setasdefaultbil_One"
                  label="Set as default billing address"
                ></CheckBox>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start mt-[50px] w-[34%] md:w-full">
                <Button className="bg-deep_purple-A200 cursor-pointer font-semibold leading-[normal] min-w-[125px] py-[11px] rounded-lg sm:text-[16.09px] md:text-[18.09px] text-[20.09px] text-center text-white-A700">
                  Save
                </Button>
                <Button className="bg-gray-100 cursor-pointer font-bold leading-[normal] min-w-[141px] py-[11px] rounded-lg sm:text-[16.09px] md:text-[18.09px] text-[20.09px] text-center text-gray-600">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-800 flex font-causten items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AddAddressPage;
