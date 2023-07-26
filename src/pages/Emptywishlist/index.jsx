import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomePageProduct from "components/HomePageProduct";

import { CloseSVG } from "../../assets/images";

const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EmptywishlistPage = () => {
  const [buttonvalue, setButtonvalue] = React.useState("");
  const homePageProductPropList = [
    {
      productdescription: "White T-Shirt",
      productprice: "$13.00",
      productbrand: "Priya’s  Brand",
      productimage: "images/img_rectangle25_11.png",
    },
    {
      productdescription: "Dark Green Sweatshirt....",
      productprice: "$127.00",
      productbrand: "Roboto’s  Brand",
      productimage: "images/img_rectangle25_12.png",
    },
    {
      productdescription: "Levender Sweatshirt ....",
      productimage: "images/img_rectangle25_13.png",
      productprice: "$133.00",
    },
    {
      productdescription: "Urban jacket with white ....",
      productprice: "$79.00",
      productbrand: "Sagar’s  Brand",
      productimage: "images/img_rectangle25_14.png",
    },
  ];

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
              Wishlist
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-coresansc md:gap-10 items-start justify-between max-w-[1114px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[28%] md:w-full">
              <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                <Line className="bg-deep_purple-A200 h-7 rounded-[3px] w-1.5" />
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
                  size="txtCoreSansC65Bold28Gray800"
                >
                  Hello Jhanvi
                </Text>
              </div>
              <Text
                className="mt-[19px] text-gray-600 text-sm tracking-[0.28px]"
                size="txtCoreSansC45Regular14"
              >
                Welcome to your Account
              </Text>
              <div className="flex flex-row font-causten gap-[15px] items-start justify-start md:ml-[0] ml-[37px] mt-12 w-[38%] md:w-full">
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
              <div className="font-causten h-11 md:h-[60px] mt-4 relative w-[97%]">
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
              <div className="flex flex-row font-causten gap-[17px] items-start justify-start md:ml-[0] ml-[37px] mt-5 w-[31%] md:w-full">
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
              <div className="flex flex-row font-causten gap-[15px] items-start justify-start md:ml-[0] ml-[37px] mt-[29px] w-[34%] md:w-full">
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
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[78px] md:px-10 sm:px-5 rounded shadow-bs2 w-[63%] md:w-full">
              <div className="flex flex-col gap-[59px] items-center justify-start w-[86%] md:w-full">
                <div className="bg-gray-100_04 flex flex-col h-[170px] items-center justify-start p-[43px] md:px-10 sm:px-5 rounded-[50%] w-[170px]">
                  <Img
                    className="h-[83px] w-[83px]"
                    src="images/img_favorite_green_600_01.svg"
                    alt="favorite_Two"
                  />
                </div>
                <div className="flex flex-col items-center justify-start px-0.5 w-full">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-gray-800"
                    size="txtCoreSansC65Bold34"
                  >
                    Your wishlist is empty.
                  </Text>
                  <Text
                    className="leading-[124.70%] mt-[9px] text-base text-center text-gray-600 tracking-[0.32px]"
                    size="txtCaustenMedium16"
                  >
                    <>
                      You don’t have any products in the wishlist yet. You will
                      find a lot
                      <br />
                      of interesting products on our Shop page.
                    </>
                  </Text>
                  <Button className="bg-deep_purple-A200 cursor-pointer font-causten font-semibold leading-[normal] min-w-[246px] mt-[42px] py-3 rounded-lg text-center text-lg text-white-A700">
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-coresansc items-center justify-start max-w-[1239px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <div className="flex flex-row gap-[27px] items-start justify-start w-1/4 md:w-full">
                <Line className="bg-deep_purple-A200 h-7 mb-0.5 rounded-[3px] w-1.5" />
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
                  size="txtCoreSansC65Bold28Gray800"
                >
                  Recently Viewed
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row font-causten gap-[37px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                {homePageProductPropList.map((props, index) => (
                  <React.Fragment key={`HomePageProduct${index}`}>
                    <HomePageProduct
                      className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <Footer className="bg-gray-800 flex font-causten items-center justify-center mt-[98px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default EmptywishlistPage;
