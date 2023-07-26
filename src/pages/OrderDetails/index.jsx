import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OrderDetailsPage = () => {
  const [buttonvalue, setButtonvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-coresansc items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row font-causten gap-[15px] items-center justify-start mt-[23px] md:px-5 w-auto">
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
              Order Detail
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-coresansc sm:gap-5 items-start justify-start mt-[50px] md:px-5 w-[39%] md:w-full">
            <div className="flex flex-row gap-[15px] items-start justify-start w-[55%] sm:w-full">
              <Line className="bg-deep_purple-A200 h-7 rounded-[3px] w-1.5" />
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
                size="txtCoreSansC65Bold28Gray800"
              >
                Hello Jhanvi
              </Text>
            </div>
            <Img
              className="h-5 sm:ml-[0] ml-[35px] sm:mt-0 mt-[5px] w-5"
              src="images/img_arrowleft_gray_800.svg"
              alt="arrowleft"
            />
            <Text
              className="ml-2.5 sm:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
              size="txtCoreSansC65Bold28Gray800"
            >
              Order Details
            </Text>
          </div>
          <Text
            className="mt-[19px] text-gray-600 text-sm tracking-[0.28px]"
            size="txtCoreSansC45Regular14"
          >
            Welcome to your Account
          </Text>
          <div className="flex md:flex-col flex-row font-causten gap-[50px] items-start justify-start max-w-[1240px] mt-4 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[19px] justify-start md:mt-0 mt-[21px] w-[24%] md:w-full">
              <div className="h-11 relative w-full">
                <div className="bg-gray-100 flex flex-col h-full items-start justify-start m-auto rounded-br-lg rounded-tr-lg w-full">
                  <Line className="bg-gray-800 h-11 w-0.5" />
                </div>
                <div className="absolute bottom-[18%] flex flex-row gap-[15px] items-start justify-center left-[13%] w-[39%]">
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
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start md:ml-[0] ml-[37px] w-[35%] md:w-full">
                <div className="flex flex-row gap-[17px] items-start justify-start w-[98%] md:w-full">
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
                <div className="flex flex-row gap-[17px] items-start justify-start w-[92%] md:w-full">
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
                <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                  <Img
                    className="h-[22px] mb-0.5 w-[22px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                  <a
                    href="javascript:"
                    className="mt-0.5 text-gray-600 text-lg"
                  >
                    <Text size="txtCaustenSemiBold18Gray600">Sign out</Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[73%] md:w-full">
              <div className="bg-gray-100 flex flex-col items-center justify-start p-[27px] sm:px-5 rounded-lg w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[96%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-center text-gray-800 text-xl"
                      size="txtCaustenSemiBold20"
                    >
                      Order no: #123456789
                    </Text>
                    <Text
                      className="text-base text-gray-800"
                      size="txtCaustenSemiBold16"
                    >
                      <span className="text-gray-600 font-causten text-left font-medium">
                        Placed On
                      </span>
                      <span className="text-gray-600 font-causten text-left font-semibold">
                        {" "}
                      </span>
                      <span className="text-gray-600 font-causten text-left font-medium">
                        2 June 2023 2:40 PM
                      </span>
                      <span className="text-gray-400 font-causten text-left font-medium">
                        {" "}
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="text-gray-800 text-lg text-right"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    Total : $143.00
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[50px] w-[71%] md:w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-[22px]"
                    src="images/img_frame495.svg"
                    alt="frame495"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtCaustenSemiBold14Black900"
                    >
                      Order Placed
                    </Text>
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtCaustenSemiBold14Black900"
                    >
                      Inprogress
                    </Text>
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtCaustenSemiBold14Black900"
                    >
                      shipped
                    </Text>
                    <Text
                      className="text-center text-gray-400 text-sm"
                      size="txtCaustenSemiBold14Gray400"
                    >
                      Delivered
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[83px] items-start justify-end mt-[47px] p-[21px] sm:px-5 w-[84%] md:w-full"
                style={{ backgroundImage: "url('images/img_frame498.svg')" }}
              >
                <div className="flex sm:flex-col flex-row gap-[37px] items-start justify-start md:ml-[0] ml-[7px] mt-[18px] w-[67%] md:w-full">
                  <Text
                    className="text-base text-gray-600"
                    size="txtCaustenSemiBold16Gray600"
                  >
                    8 June 2023 3:40 PM{" "}
                  </Text>
                  <Text
                    className="sm:mt-0 mt-0.5 text-base text-gray-800"
                    size="txtCaustenSemiBold16"
                  >
                    Your order has been successfully verified.
                  </Text>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-col items-center justify-start mt-[79px] p-[43px] md:px-10 sm:px-5 rounded-lg w-full">
                <List
                  className="flex flex-col gap-[30px] items-center w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between my-0 w-full">
                    <Img
                      className="h-[102px] md:h-auto object-cover rounded-[3px] w-[102px]"
                      src="images/img_rectangle757.png"
                      alt="rectangle757"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] w-full">
                        <Text
                          className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                          size="txtCaustenBold22"
                        >
                          Printed white cote
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[146px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                          size="txtCaustenBold22"
                        >
                          <span className="text-gray-800 font-causten text-left font-bold">
                            Qty
                          </span>
                          <span className="text-gray-800 font-causten text-left font-bold">
                            {" "}
                            :{" "}
                          </span>
                          <span className="text-gray-600 font-causten text-left font-medium">
                            1
                          </span>
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[60px] text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[0.44px]"
                          size="txtCaustenBold22Gray600"
                        >
                          $29.00
                        </Text>
                        <Img
                          className="h-[22px] md:ml-[0] ml-[120px] w-[22px]"
                          src="images/img_arrowright_gray_800_22x22.svg"
                          alt="arrowright"
                        />
                      </div>
                      <Text
                        className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                        size="txtCaustenBold22"
                      >
                        <span className="text-gray-800 font-causten text-left font-bold">
                          Color :{" "}
                        </span>
                        <span className="text-gray-600 font-causten text-left font-medium">
                          White
                        </span>
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray-400 w-full" />
                  <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between my-0 w-full">
                    <Img
                      className="h-[102px] md:h-auto object-cover rounded-[3px] w-[102px]"
                      src="images/img_rectangle757_102x102.png"
                      alt="rectangle757"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] w-full">
                        <Text
                          className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                          size="txtCaustenBold22"
                        >
                          Men Blue Shirt
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[182px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                          size="txtCaustenBold22"
                        >
                          <span className="text-gray-800 font-causten text-left font-bold">
                            Qty
                          </span>
                          <span className="text-gray-800 font-causten text-left font-bold">
                            {" "}
                            :{" "}
                          </span>
                          <span className="text-gray-600 font-causten text-left font-medium">
                            1
                          </span>
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[60px] text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[0.44px]"
                          size="txtCaustenBold22Gray600"
                        >
                          $29.00
                        </Text>
                        <Img
                          className="h-[22px] md:ml-[0] ml-[120px] w-[22px]"
                          src="images/img_arrowright_gray_800_22x22.svg"
                          alt="arrowright"
                        />
                      </div>
                      <Text
                        className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                        size="txtCaustenBold22"
                      >
                        <span className="text-gray-800 font-causten text-left font-bold">
                          Color :{" "}
                        </span>
                        <span className="text-gray-600 font-causten text-left font-medium">
                          Blue
                        </span>
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-800 flex font-causten items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderDetailsPage;
