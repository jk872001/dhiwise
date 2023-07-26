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

const MyOrderPage = () => {
  const [buttonvalue, setButtonvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-coresansc items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row font-causten gap-[15px] items-center justify-start md:ml-[0] ml-[101px] mt-[23px] md:px-5 w-auto">
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
              My Orders
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-coresansc gap-10 items-start justify-start md:ml-[0] ml-[101px] mt-[50px] md:px-5 w-[35%] md:w-full">
            <div className="flex flex-row gap-[15px] items-start justify-start w-[62%] sm:w-full">
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
              My Orders
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[101px] mt-[19px] text-gray-600 text-sm tracking-[0.28px]"
            size="txtCoreSansC45Regular14"
          >
            Welcome to your Account
          </Text>
          <div className="flex md:flex-col flex-row font-causten gap-[50px] items-start justify-start max-w-[1240px] mt-1 mx-auto md:px-5 w-full">
            <div className="h-11 md:mt-0 mt-[33px] relative w-[24%] md:w-full">
              <div className="bg-gray-100 flex flex-col h-full items-start justify-start m-auto rounded-br-lg rounded-tr-lg w-full">
                <Line className="bg-gray-800 h-11 w-0.5" />
              </div>
              <div className="absolute bottom-[18%] flex flex-row gap-[15px] items-start justify-center left-[13%] w-[39%]">
                <Img
                  className="h-[22px] mb-0.5 w-[22px]"
                  src="images/img_myorders.svg"
                  alt="myorders_Two"
                />
                <Text
                  className="mt-0.5 text-gray-600 text-lg"
                  size="txtCaustenSemiBold18Gray600"
                >
                  My orders
                </Text>
              </div>
            </div>
            <div className="bg-gray-100 flex md:flex-1 flex-col font-coresansc gap-3.5 items-center justify-end mb-[22px] pt-[15px] rounded-tl-lg rounded-tr-lg w-[15%] md:w-full">
              <Text
                className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                size="txtCoreSansC55Medium22"
              >
                Active
              </Text>
              <Line className="bg-gray-800 h-[3px] rotate-[-90deg] w-full" />
            </div>
            <div className="flex md:flex-1 flex-col font-coresansc gap-3 items-end justify-start md:mt-0 mt-[15px] w-[58%] md:w-full">
              <div className="flex flex-row items-start justify-between w-[68%] md:w-full">
                <Text
                  className="mb-0.5 text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                  size="txtCoreSansC55Medium22"
                >
                  Cancelled
                </Text>
                <Text
                  className="mt-0.5 text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                  size="txtCoreSansC55Medium22"
                >
                  Completed
                </Text>
              </div>
              <Line className="bg-gray-100 h-[3px] rotate-[90deg] w-full" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-causten md:gap-10 items-start justify-between max-w-[1203px] mt-[19px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[31px] items-start justify-start w-[9%] md:w-full">
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
                <a href="javascript:" className="mt-0.5 text-gray-600 text-lg">
                  <Text size="txtCaustenSemiBold18Gray600">Sign out</Text>
                </a>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:mt-0 mt-[9px] w-3/4 md:w-full">
              <div className="bg-gray-100 flex flex-col items-center justify-start p-7 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-[96%] md:w-full">
                  <Text
                    className="text-center text-gray-800 text-xl"
                    size="txtCaustenSemiBold20"
                  >
                    Order no: #123456789
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text
                          className="text-center text-gray-800 text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Order Date :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            2 June 2023 2:40 PM
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                        </Text>
                        <Text
                          className="text-gray-800 text-right text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Order Status :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            Inprogress
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-center text-gray-800 text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Estimated Delivery Date :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            8 June 2023{" "}
                          </span>
                        </Text>
                        <Text
                          className="text-gray-800 text-right text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Payment Method :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            Cash on delivery{" "}
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-24 md:h-auto object-cover rounded w-24"
                  src="images/img_rectangle755.png"
                  alt="rectangle755"
                />
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[25px]">
                  <Text
                    className="text-base text-center text-gray-800"
                    size="txtCaustenSemiBold16"
                  >
                    Black Printed T-shirt
                  </Text>
                  <Text
                    className="mt-[9px] text-center text-gray-800 text-sm"
                    size="txtCaustenSemiBold14Gray800"
                  >
                    <span className="text-gray-800 font-causten font-semibold">
                      Colour :{" "}
                    </span>
                    <span className="text-gray-400 font-causten font-semibold">
                      Pink
                    </span>
                    <span className="text-gray-800 font-causten font-semibold">
                      {" "}
                    </span>
                  </Text>
                  <Text
                    className="mt-1.5 text-center text-gray-800 text-sm"
                    size="txtCaustenSemiBold14Gray800"
                  >
                    <span className="text-gray-800 font-causten font-semibold">
                      Qty :{" "}
                    </span>
                    <span className="text-gray-400 font-causten font-semibold">
                      1
                    </span>
                  </Text>
                  <Text
                    className="mt-[3px] text-center text-gray-600 text-sm"
                    size="txtCaustenSemiBold14Gray600"
                  >
                    Total : $23.00
                  </Text>
                </div>
                <Button className="bg-deep_purple-A200 cursor-pointer font-medium leading-[normal] min-w-[144px] md:ml-[0] ml-[487px] md:mt-0 my-[23px] py-3.5 rounded-lg text-center text-lg text-white-A700">
                  View Detail
                </Button>
              </div>
              <Line className="bg-blue_gray-50 h-px w-full" />
              <div className="bg-gray-100 flex flex-col items-center justify-start p-7 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-[96%] md:w-full">
                  <Text
                    className="text-center text-gray-800 text-xl"
                    size="txtCaustenSemiBold20"
                  >
                    Order no: #123456789
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text
                          className="text-center text-gray-800 text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Order Date :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            2 June 2023 2:40 PM
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                        </Text>
                        <Text
                          className="text-gray-800 text-right text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Order Status :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            Shipped
                          </span>
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-center text-gray-800 text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Estimated Delivery Date :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            8 June 2023{" "}
                          </span>
                        </Text>
                        <Text
                          className="text-gray-800 text-right text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Payment Method :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            Cash on delivery{" "}
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-24 md:h-auto object-cover rounded w-24"
                  src="images/img_rectangle755_96x96.png"
                  alt="rectangle755_One"
                />
                <div className="flex flex-col items-start justify-start ml-5 md:ml-[0]">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-gray-800"
                    size="txtCaustenSemiBold16"
                  >
                    Printed blue & white Cote{" "}
                  </Text>
                  <Text
                    className="mt-[9px] text-center text-gray-800 text-sm"
                    size="txtCaustenSemiBold14Gray800"
                  >
                    <span className="text-gray-800 font-causten font-semibold">
                      Colour :{" "}
                    </span>
                    <span className="text-gray-400 font-causten font-semibold">
                      White
                    </span>
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[5px] mt-1.5 text-center text-gray-800 text-sm"
                    size="txtCaustenSemiBold14Gray800"
                  >
                    <span className="text-gray-800 font-causten font-semibold">
                      Qty :{" "}
                    </span>
                    <span className="text-gray-400 font-causten font-semibold">
                      1
                    </span>
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-[3px] text-center text-gray-600 text-sm"
                    size="txtCaustenSemiBold14Gray600"
                  >
                    Total : $143.00
                  </Text>
                </div>
                <Button className="bg-deep_purple-A200 cursor-pointer font-medium leading-[normal] min-w-[144px] md:ml-[0] ml-[455px] md:mt-0 my-[23px] py-3.5 rounded-lg text-center text-lg text-white-A700">
                  View Detail
                </Button>
              </div>
              <Line className="bg-blue_gray-50 h-px w-full" />
              <div className="bg-gray-100 flex flex-col items-center justify-start p-7 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-[96%] md:w-full">
                  <Text
                    className="text-center text-gray-800 text-xl"
                    size="txtCaustenSemiBold20"
                  >
                    Order no: #123456789
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text
                          className="text-center text-gray-800 text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Order Date :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            2 June 2023 2:40 PM
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                        </Text>
                        <Text
                          className="text-gray-800 text-right text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Order Status :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            Inprogress
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-center text-gray-800 text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Estimated Delivery Date :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            8 June 2023{" "}
                          </span>
                        </Text>
                        <Text
                          className="text-gray-800 text-right text-sm"
                          size="txtCaustenSemiBold14Gray800"
                        >
                          <span className="text-gray-600 font-causten font-semibold">
                            Payment Method :
                          </span>
                          <span className="text-gray-400 font-causten font-semibold">
                            {" "}
                          </span>
                          <span className="text-gray-400 font-causten font-normal">
                            Cash on delivery{" "}
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-24 md:h-auto object-cover rounded w-24"
                  src="images/img_rectangle755_1.png"
                  alt="rectangle755_Two"
                />
                <div className="flex flex-col items-start justify-start ml-6 md:ml-[0]">
                  <Text
                    className="text-base text-gray-800"
                    size="txtCaustenSemiBold16"
                  >
                    Blue Shirt
                  </Text>
                  <Text
                    className="mt-[9px] text-center text-gray-800 text-sm"
                    size="txtCaustenSemiBold14Gray800"
                  >
                    <span className="text-gray-800 font-causten font-semibold">
                      Colour :{" "}
                    </span>
                    <span className="text-gray-400 font-causten font-semibold">
                      Blue
                    </span>
                  </Text>
                  <Text
                    className="mt-1.5 text-center text-gray-800 text-sm"
                    size="txtCaustenSemiBold14Gray800"
                  >
                    <span className="text-gray-800 font-causten font-semibold">
                      Qty :{" "}
                    </span>
                    <span className="text-gray-400 font-causten font-semibold">
                      1
                    </span>
                  </Text>
                  <Text
                    className="mt-[3px] text-center text-gray-600 text-sm"
                    size="txtCaustenSemiBold14Gray600"
                  >
                    Total : $93.00
                  </Text>
                </div>
                <Button className="bg-deep_purple-A200 cursor-pointer font-medium leading-[normal] min-w-[144px] md:ml-[0] ml-[488px] md:mt-0 my-[23px] py-3.5 rounded-lg text-center text-lg text-white-A700">
                  View Detail
                </Button>
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-50 h-px md:ml-[0] ml-[445px] mr-[101px] mt-[30px] w-[63%]" />
          <Footer className="bg-gray-800 flex font-causten items-center justify-center mt-[99px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default MyOrderPage;
