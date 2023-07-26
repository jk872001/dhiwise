import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import WishlistRowarrowright from "components/WishlistRowarrowright";

import { CloseSVG } from "../../assets/images";

const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WishlistPage = () => {
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
              Wishlist
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-coresansc gap-10 items-start justify-start md:ml-[0] ml-[101px] mt-[50px] md:px-5 w-[32%] md:w-full">
            <div className="flex flex-row gap-[15px] items-start justify-start w-[67%] sm:w-full">
              <Line className="bg-deep_purple-A200 h-7 rounded-[3px] w-1.5" />
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
                size="txtCoreSansC65Bold28Gray800"
              >
                Hello Jhanvi
              </Text>
            </div>
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
              size="txtCoreSansC65Bold28Gray800"
            >
              Wishlist
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[101px] mt-[19px] text-gray-600 text-sm tracking-[0.28px]"
            size="txtCoreSansC45Regular14"
          >
            Welcome to your Account
          </Text>
          <div className="flex md:flex-col flex-row font-causten gap-[50px] items-start justify-start max-w-[1248px] mt-4 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[17px] justify-start md:mt-0 mt-8 w-[24%] md:w-full">
              <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[37px] w-[39%] md:w-full">
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
              <div className="h-11 relative w-full">
                <div className="bg-gray-100 flex flex-col h-full items-start justify-start m-auto rounded-br-lg rounded-tr-lg w-full">
                  <Line className="bg-gray-800 h-11 w-0.5" />
                </div>
                <div className="absolute flex flex-row gap-[17px] h-max inset-y-[0] items-start justify-center left-[13%] my-auto w-[34%]">
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
            </div>
            <WishlistRowarrowright
              className="flex md:flex-1 md:flex-col flex-row gap-9 items-center justify-center mb-[7px] w-auto md:w-full"
              usercoloryellow={
                <Text className="font-bold sm:mt-0 mt-[13px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]">
                  <span className="text-gray-800 font-causten text-left">
                    Color :{" "}
                  </span>
                  <span className="text-gray-600 font-causten text-left font-medium">
                    Yellow
                  </span>
                </Text>
              }
              userquantityone={
                <Text className="font-bold mt-[3px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]">
                  <span className="text-gray-800 font-causten text-left">
                    Quantity
                  </span>
                  <span className="text-gray-800 font-causten text-left">
                    {" "}
                    :{" "}
                  </span>
                  <span className="text-gray-600 font-causten text-left font-medium">
                    1
                  </span>
                </Text>
              }
            />
          </div>
          <div className="flex md:flex-col flex-row font-causten md:gap-10 items-start justify-between max-w-[1202px] mt-5 mx-auto md:px-5 w-full">
            <div className="flex flex-row gap-[17px] items-start justify-start">
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
            <Line className="bg-blue_gray-50 h-px mb-[19px] md:mt-0 mt-[3px] w-3/4" />
          </div>
          <div className="flex md:flex-col flex-row font-causten md:gap-10 items-start justify-between max-w-[1211px] mt-[9px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-row gap-[15px] items-start justify-start md:mt-0 mt-5 w-[9%] md:w-full">
              <Img
                className="h-[22px] mb-0.5 w-[22px]"
                src="images/img_arrowright.svg"
                alt="arrowright_One"
              />
              <a href="javascript:" className="mt-0.5 text-gray-600 text-lg">
                <Text size="txtCaustenSemiBold18Gray600">Sign out</Text>
              </a>
            </div>
            <WishlistRowarrowright
              className="flex md:flex-1 md:flex-col flex-row gap-9 items-center justify-center w-auto md:w-full"
              usercoloryellow={
                <Text className="font-bold sm:mt-0 mt-[13px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]">
                  <span className="text-gray-800 font-causten text-left">
                    Color :{" "}
                  </span>
                  <span className="text-gray-600 font-causten text-left font-medium">
                    Yellow
                  </span>
                </Text>
              }
              userquantityone={
                <Text className="font-bold mt-[3px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]">
                  <span className="text-gray-800 font-causten text-left">
                    Quantity
                  </span>
                  <span className="text-gray-800 font-causten text-left">
                    {" "}
                    :{" "}
                  </span>
                  <span className="text-gray-600 font-causten text-left font-medium">
                    1
                  </span>
                </Text>
              }
              userrectangle754="images/img_rectangle754_110x110.png"
              userlanguage="Yellow Flower Print Dress "
              userprice="$78.00"
            />
          </div>
          <List
            className="flex flex-col font-causten gap-[30px] md:ml-[0] ml-[445px] mt-[60px] md:px-5 w-[63%]"
            orientation="vertical"
          >
            <WishlistRowarrowright
              className="flex md:flex-col flex-row gap-9 items-center justify-center w-auto md:w-full"
              usercoloryellow={
                <Text className="font-bold sm:mt-0 mt-[13px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]">
                  <span className="text-gray-800 font-causten text-left">
                    Color :{" "}
                  </span>
                  <span className="text-gray-600 font-causten text-left font-medium">
                    White
                  </span>
                </Text>
              }
              userquantityone={
                <Text className="font-bold mt-[3px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]">
                  <span className="text-gray-800 font-causten text-left">
                    Quantity
                  </span>
                  <span className="text-gray-800 font-causten text-left">
                    {" "}
                    :{" "}
                  </span>
                  <span className="text-gray-600 font-causten text-left font-medium">
                    1
                  </span>
                </Text>
              }
              userrectangle754="images/img_rectangle754_1.png"
              userlanguage="White Hoodie long sleeve"
              userprice="$134.00"
            />
            <Line className="self-center h-px bg-blue_gray-50 w-full" />
            <WishlistRowarrowright
              className="flex md:flex-col flex-row gap-9 items-center justify-center w-auto md:w-full"
              usercoloryellow={
                <Text className="font-bold sm:mt-0 mt-[13px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]">
                  <span className="text-gray-800 font-causten text-left">
                    Color :{" "}
                  </span>
                  <span className="text-gray-600 font-causten text-left font-medium">
                    Brown
                  </span>
                </Text>
              }
              userquantityone={
                <Text className="font-bold mt-[3px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]">
                  <span className="text-gray-800 font-causten text-left">
                    Quantity
                  </span>
                  <span className="text-gray-800 font-causten text-left">
                    {" "}
                    :{" "}
                  </span>
                  <span className="text-gray-600 font-causten text-left font-medium">
                    1
                  </span>
                </Text>
              }
              userrectangle754="images/img_rectangle754_2.png"
              userlanguage="Brown men’s long sleeve T-shirt"
              userprice="$93.00"
            />
          </List>
          <Footer className="bg-gray-800 flex font-causten items-center justify-center mt-[130px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
