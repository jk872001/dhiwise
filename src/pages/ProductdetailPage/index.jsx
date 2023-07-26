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

const ProductdetailPagePage = () => {
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
    {
      productdescription: "Plain White T-Shirt",
      productimage: "images/img_rectangle25_15.png",
    },
    {
      productdescription: "Checks Shirt with white.....",
      productimage: "images/img_rectangle25_16.png",
      productbrand: "H.M’s  Brand",
    },
    {
      productdescription: "One piece black top & ....",
      productimage: "images/img_rectangle25_17.png",
      productbrand: "Nike’s  Brand",
    },
    {
      productdescription: "Denim Blue Shirt",
      productprice: "$38.00",
      productbrand: "MOMO’s  Brand",
      productimage: "images/img_rectangle25_18.png",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-coresansc items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-center justify-start md:px-5 w-[94%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[100px] justify-start w-[55%] md:w-full">
              <div className="h-[785px] relative w-full">
                <div className="absolute bg-gray-100 flex flex-col h-max inset-y-[0] items-end justify-center left-[0] my-auto p-[92px] md:px-10 sm:px-5 w-[38%]">
                  <div className="flex flex-col gap-[24.34px] items-center justify-start my-[131px] w-auto">
                    <div className="flex flex-col gap-[22.68px] items-center justify-center w-auto">
                      <div className="border border-solid border-white-A700 flex flex-col h-[68px] items-center justify-start rounded-[9px] w-[68px]">
                        <Img
                          className="h-[68px] md:h-auto object-cover rounded-[9px] w-[68px]"
                          src="images/img_rectangle10.png"
                          alt="rectangleTen"
                        />
                      </div>
                      <div className="border border-gray-800 border-solid flex flex-col h-[77px] items-center justify-start p-1 rounded-[12px] w-[77px]">
                        <Img
                          className="h-[68px] md:h-auto object-cover rounded-[9px] w-[68px]"
                          src="images/img_rectangle11.png"
                          alt="rectangleEleven"
                        />
                      </div>
                      <div className="border border-solid border-white-A700 flex flex-col h-[68px] items-center justify-start rounded-[9px] w-[68px]">
                        <Img
                          className="h-[68px] md:h-auto object-cover rounded-[9px] w-[68px]"
                          src="images/img_rectangle10_68x68.png"
                          alt="rectangleTen_One"
                        />
                      </div>
                    </div>
                    <Img
                      className="h-[54px] w-[21px]"
                      src="images/img_frame18.svg"
                      alt="frameEighteen"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[785px] inset-y-[0] my-auto object-cover right-[0] w-[71%]"
                  src="images/img_rectangle13_785x520.png"
                  alt="rectangleThirteen"
                />
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[100px] w-[84%] md:w-full">
                <div className="flex flex-row gap-[15px] items-start justify-start w-1/2 md:w-full">
                  <Line className="bg-deep_purple-A200 h-7 mb-0.5 rounded-[3px] w-1.5" />
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
                    size="txtCoreSansC65Bold28Gray800"
                  >
                    Product Description
                  </Text>
                </div>
                <div className="flex flex-col font-causten gap-[29px] items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-[81%] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex sm:flex-1 flex-row gap-[30px] items-start justify-between w-[57%] sm:w-full">
                          <Text
                            className="mt-0.5 text-gray-800 text-lg"
                            size="txtCaustenMedium18"
                          >
                            Description
                          </Text>
                          <div className="flex flex-row gap-[15px] items-start justify-between mb-0.5 w-[58%]">
                            <Text
                              className="text-gray-600 text-lg"
                              size="txtCaustenRegular18Gray600"
                            >
                              User comments
                            </Text>
                            <Text
                              className="bg-deep_purple-A200 flex h-5 items-center justify-center mr-0.5 rounded text-[10px] text-center text-white-A700 w-5"
                              size="txtCaustenMedium10"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-[15px] items-start justify-between w-[38%] sm:w-full">
                          <Text
                            className="text-gray-600 text-lg"
                            size="txtCaustenRegular18Gray600"
                          >
                            Question & Answer
                          </Text>
                          <Button className="bg-gray-800 cursor-pointer font-medium h-5 leading-[normal] mr-0.5 py-1 rounded text-[10px] text-center text-white-A700 w-5">
                            4
                          </Button>
                        </div>
                      </div>
                      <Img
                        className="h-px"
                        src="images/img_line2.svg"
                        alt="lineTwo"
                      />
                    </div>
                  </div>
                  <Text
                    className="leading-[25.00px] text-base text-gray-600 tracking-[0.32px] w-full"
                    size="txtCaustenRegular16Gray600"
                  >
                    100% Bio-washed Cotton – makes the fabric extra soft &
                    silky. Flexible ribbed crew neck. Precisely stitched with no
                    pilling & no fading. Provide all-time comfort. Anytime,
                    anywhere. Infinite range of matte-finish HD prints.
                  </Text>
                </div>
                <div className="bg-gray-100_90 font-causten md:h-[172px] h-[185px] py-1.5 relative rounded-[12px] w-full">
                  <Line className="absolute bg-gray-400_7e h-px inset-[0] justify-center m-auto w-full" />
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[85%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col gap-[46px] h-[138px] items-center justify-start w-[138px]">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-600 tracking-[0.32px]"
                            size="txtCaustenRegular16Gray600"
                          >
                            Fabric
                          </Text>
                          <Text
                            className="text-base text-gray-800 tracking-[0.32px]"
                            size="txtCaustenMedium16Gray800"
                          >
                            Bio-washed Cotton
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-600 tracking-[0.32px]"
                            size="txtCaustenRegular16Gray600"
                          >
                            Neck
                          </Text>
                          <Text
                            className="text-base text-gray-800 tracking-[0.32px]"
                            size="txtCaustenMedium16Gray800"
                          >
                            Round Neck
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray-400_7e h-[172px] w-px" />
                      <div className="flex flex-col gap-11 items-start justify-start">
                        <div className="flex flex-col gap-[7px] items-center justify-start">
                          <Text
                            className="text-base text-gray-600 tracking-[0.32px]"
                            size="txtCaustenRegular16Gray600"
                          >
                            Pattern
                          </Text>
                          <Text
                            className="text-base text-gray-800 tracking-[0.32px]"
                            size="txtCaustenMedium16Gray800"
                          >
                            Printed
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-600 tracking-[0.32px]"
                            size="txtCaustenRegular16Gray600"
                          >
                            Sleeve
                          </Text>
                          <Text
                            className="text-base text-gray-800 tracking-[0.32px]"
                            size="txtCaustenMedium16Gray800"
                          >
                            Half-sleeves
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray-400_7e h-[172px] w-px" />
                      <div className="flex flex-col gap-11 items-start justify-start">
                        <div className="flex flex-col gap-[9px] items-start justify-start">
                          <Text
                            className="text-base text-gray-600 tracking-[0.32px]"
                            size="txtCaustenRegular16Gray600"
                          >
                            Fit
                          </Text>
                          <Text
                            className="text-base text-gray-800 tracking-[0.32px]"
                            size="txtCaustenMedium16Gray800"
                          >
                            Regular-fit
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-600 tracking-[0.32px]"
                            size="txtCaustenRegular16Gray600"
                          >
                            Style
                          </Text>
                          <Text
                            className="text-base text-gray-800 tracking-[0.32px]"
                            size="txtCaustenMedium16Gray800"
                          >
                            Casual Wear
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pl-0.5 w-2/5 md:w-full">
              <div className="flex flex-row font-causten gap-[15px] items-center justify-start w-auto">
                <Text
                  className="text-gray-600 text-lg w-auto"
                  size="txtCaustenMedium18Gray600"
                >
                  Shop
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
                  Women
                </Text>
                <Img
                  className="h-2.5 w-[5px]"
                  src="images/img_leftstroke.svg"
                  alt="leftstroke_One"
                />
                <Text
                  className="text-gray-600 text-lg w-auto"
                  size="txtCaustenMedium18Gray600"
                >
                  Top
                </Text>
              </div>
              <Text
                className="leading-[140.00%] mt-[33px] sm:text-3xl md:text-[32px] text-[34px] text-gray-800 tracking-[0.68px]"
                size="txtCoreSansC65Bold34"
              >
                <>
                  Raven Hoodie With <br />
                  Black colored Design
                </>
              </Text>
              <div className="flex flex-row font-causten gap-[25px] items-start justify-start mt-[35px] w-auto">
                <div className="flex flex-row gap-[15px] items-center justify-center w-auto">
                  <List
                    className="sm:flex-col flex-row gap-2.5 grid grid-cols-5 justify-start w-auto"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col h-[22px] items-center justify-start w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_star2.svg"
                        alt="starTwo"
                      />
                    </div>
                    <div className="flex flex-col h-[22px] items-center justify-start w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_star2_22x22.svg"
                        alt="starTwo"
                      />
                    </div>
                    <div className="flex flex-col h-[22px] items-center justify-start w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_star2_1.svg"
                        alt="starTwo"
                      />
                    </div>
                    <div className="flex flex-col h-[22px] items-center justify-start w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_star2_2.svg"
                        alt="starTwo"
                      />
                    </div>
                    <div className="flex flex-col h-[22px] items-center justify-start w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_star2_3.svg"
                        alt="starTwo"
                      />
                    </div>
                  </List>
                  <Text
                    className="text-gray-600 text-lg"
                    size="txtCaustenMedium18Gray600"
                  >
                    3.5
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] h-[22px] md:h-auto items-center justify-center w-[146px]">
                  <Img
                    className="h-[17px] w-5"
                    src="images/img_file.svg"
                    alt="file"
                  />
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtCaustenMedium18Gray600"
                  >
                    120 comment
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-causten gap-[25px] items-start justify-start mt-[33px] w-auto">
                <div className="flex flex-row gap-5 items-start justify-start w-auto">
                  <Text
                    className="text-gray-800_02 text-lg w-auto"
                    size="txtCaustenSemiBold18"
                  >
                    Select Size
                  </Text>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtCaustenMedium18Gray600"
                    >
                      Size Guide
                    </Text>
                    <Img
                      className="h-3 w-[13px]"
                      src="images/img_arrowright_gray_600.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-5 grid grid-cols-5 justify-center w-auto"
                  orientation="horizontal"
                >
                  <div className="md:h-[38px] h-[42px] pb-1 pr-1 relative w-full">
                    <div className="border border-gray-400_01 border-solid h-[38px] rounded-[12px] w-[38px]"></div>
                    <Text
                      className="absolute h-[17px] left-[21%] text-center text-gray-800 text-sm top-[24%]"
                      size="txtCaustenMedium14"
                    >
                      XS
                    </Text>
                  </div>
                  <div className="md:h-[38px] h-[42px] pb-1 pr-1 relative w-full">
                    <div className="border border-gray-400_01 border-solid h-[38px] rounded-[12px] w-[38px]"></div>
                    <Text
                      className="absolute left-[33%] text-center text-gray-800 text-sm top-[24%]"
                      size="txtCaustenMedium14"
                    >
                      S
                    </Text>
                  </div>
                  <div className="md:h-[38px] h-[42px] pb-1 pr-1 relative w-full">
                    <div className="border border-gray-400_01 border-solid h-[38px] rounded-[12px] w-[38px]"></div>
                    <Text
                      className="absolute left-[31%] text-center text-gray-800 text-sm top-[24%]"
                      size="txtCaustenMedium14"
                    >
                      M
                    </Text>
                  </div>
                  <div className="md:h-[38px] h-[42px] pb-1 pr-1 relative w-full">
                    <div className="bg-gray-800_03 h-[38px] rounded-[12px] w-[38px]"></div>
                    <Text
                      className="absolute left-[33%] text-sm text-white-A700 top-[24%]"
                      size="txtCaustenMedium14WhiteA700"
                    >
                      L
                    </Text>
                  </div>
                  <div className="md:h-[38px] h-[42px] pb-1 pr-1 relative w-full">
                    <div className="border border-gray-400_01 border-solid h-[38px] rounded-[12px] w-[38px]"></div>
                    <Text
                      className="absolute left-[24%] text-center text-gray-800 text-sm top-[24%]"
                      size="txtCaustenMedium14"
                    >
                      XL
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex flex-col font-causten gap-[25px] items-start justify-start mt-[35px] w-auto">
                <Text
                  className="text-gray-800_02 text-lg w-auto"
                  size="txtCaustenSemiBold18"
                >
                  Colours Available{" "}
                </Text>
                <div className="flex flex-row gap-5 items-center justify-start w-auto">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_globe.svg"
                    alt="globe"
                  />
                  <div className="bg-amber-A200 h-[22px] rounded-[50%] w-[22px]"></div>
                  <div className="bg-pink-200 h-[22px] rounded-[50%] w-[22px]"></div>
                  <div className="bg-red-900 h-[22px] rounded-[50%] w-[22px]"></div>
                </div>
              </div>
              <div className="flex flex-row font-causten gap-[25px] items-center justify-start mt-9 w-[68%] md:w-full">
                <Button
                  className="bg-deep_purple-A200 cursor-pointer flex items-center justify-center min-w-[199px] px-[35px] py-[11px] rounded-lg"
                  leftIcon={
                    <Img
                      className="h-5 mb-0.5 mr-3"
                      src="images/img_cart_white_a700.svg"
                      alt="cart"
                    />
                  }
                >
                  <div className="font-semibold leading-[normal] sm:px-5 text-center text-lg text-white-A700">
                    Add to cart
                  </div>
                </Button>
                <Button className="border border-gray-800 border-solid cursor-pointer font-bold leading-[normal] min-w-[138px] py-3 rounded-lg text-center text-gray-800 text-lg">
                  $63.00
                </Button>
              </div>
              <List
                className="flex flex-col font-causten gap-2.5 items-center mt-[77px] w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[68px] items-center justify-start w-[83%] md:w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start pb-1.5 pr-1.5 w-1/2 sm:w-full">
                    <Button className="bg-gray-100 flex h-11 items-center justify-center p-3.5 rounded-[50%] w-11">
                      <Img
                        className="h-[15px]"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                    </Button>
                    <Text
                      className="text-gray-800 text-lg"
                      size="txtCaustenMedium18"
                    >
                      Secure payment
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-center pb-1.5 pr-1.5 w-[35%] sm:w-full">
                    <Button className="bg-gray-100 flex h-11 items-center justify-center p-3.5 rounded-[50%] w-11">
                      <Img className="h-4" src="images/img_map.svg" alt="map" />
                    </Button>
                    <Text
                      className="mr-[18px] text-gray-800 text-lg"
                      size="txtCaustenMedium18"
                    >
                      Size & Fit
                    </Text>
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-400 w-full" />
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-start pb-1.5 pr-1.5 w-[37%] sm:w-full">
                    <Button className="bg-gray-100 flex h-11 items-center justify-center p-[13px] rounded-[50%] w-11">
                      <Img src="images/img_music.svg" alt="music" />
                    </Button>
                    <Text
                      className="text-gray-800 text-lg"
                      size="txtCaustenMedium18"
                    >
                      Free shipping
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-start w-[47%] sm:w-full">
                    <Button className="bg-gray-100 flex h-11 items-center justify-center mb-[5px] p-3.5 rounded-[50%] w-11">
                      <Img className="h-4" src="images/img_car.svg" alt="car" />
                    </Button>
                    <Text
                      className="text-gray-800 text-lg"
                      size="txtCaustenMedium18"
                    >
                      Free Shipping & Returns
                    </Text>
                  </div>
                </div>
              </List>
              <div className="font-causten h-[328px] md:h-[513px] mt-[185px] relative w-full">
                <Img
                  className="h-[328px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_rectangle23.png"
                  alt="rectangleTwentyThree"
                />
                <div className="absolute bg-gray-800_7e flex flex-col md:gap-10 gap-20 h-full inset-[0] justify-center m-auto p-[27px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="md:ml-[0] ml-[427px] text-lg text-white-A700 tracking-[0.36px]"
                    size="txtCaustenMedium18WhiteA700"
                  >
                    1:00 M
                  </Text>
                  <div className="flex flex-col md:gap-10 gap-[86px] items-center justify-start mb-[3px] mx-auto w-[83%] md:w-full">
                    <Button className="bg-gray-100 flex h-[53px] items-center justify-center p-[11px] rounded-[26px] w-[53px]">
                      <Img
                        className="h-[30px]"
                        src="images/img_file_gray_800.svg"
                        alt="file_One"
                      />
                    </Button>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[0.44px]"
                      size="txtCaustenMedium22WhiteA700"
                    >
                      Raven Hoodie with black colored design
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[27px] items-start justify-start md:ml-[0] ml-[100px] mt-[99px] md:px-5 w-[22%] md:w-full">
            <Line className="bg-deep_purple-A200 h-7 rounded-[3px] w-1.5" />
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
              size="txtCoreSansC65Bold28Gray800"
            >
              Similar Products
            </Text>
          </div>
          <div className="font-causten md:gap-5 gap-[37px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1239px] min-h-[auto] mt-[30px] mx-auto md:px-5 w-full">
            {homePageProductPropList.map((props, index) => (
              <React.Fragment key={`HomePageProduct${index}`}>
                <HomePageProduct
                  className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </div>
          <Footer className="bg-gray-800 flex font-causten items-center justify-center mt-[99px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductdetailPagePage;
