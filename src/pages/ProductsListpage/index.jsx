import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SeekBar,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomePageProduct from "components/HomePageProduct";

import { CloseSVG } from "../../assets/images";

const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductsListpagePage = () => {
  const [buttonvalue, setButtonvalue] = React.useState("");
  const homePageProductPropList = [
    {},
    {
      productdescription: "White T-shirt",
      productprice: "$11.00",
      productbrand: "Helen’s  Brand",
      productimage: "images/img_rectangle25_3.png",
    },
    {
      productdescription: "Levender Hoodie with ....",
      productprice: "$119.00",
      productbrand: "Nike’s  Brand",
      productimage: "images/img_rectangle25_2.png",
    },
    {
      productdescription: "Leaves Pattern White...",
      productprice: "$77.00",
      productbrand: "paypal’s  Brand",
      productimage: "images/img_rectangle25_4.png",
    },
    {
      productdescription: "White Graphic Crop Top",
      productprice: "$29.00",
      productbrand: "woden’s  Brand",
      productimage: "images/img_rectangle25_5.png",
    },
    {
      productdescription: "Black Shorts",
      productprice: "$37.00",
      productbrand: "MM’s  Brand",
      productimage: "images/img_rectangle25_1.png",
    },
    {
      productdescription: "Barboreal Gray Sweats...",
      productprice: "$77.00",
      productbrand: "Priya’s  Brand",
      productimage: "images/img_rectangle25_6.png",
    },
    {
      productdescription: "Yellow Sweatshirt",
      productprice: "$29.00",
      productbrand: "woden’s  Brand",
      productimage: "images/img_rectangle25_7.png",
    },
    {
      productdescription: "Flower Pattern Black C...",
      productprice: "$37.00",
      productbrand: "MM’s  Brand",
      productimage: "images/img_rectangle25_8.png",
    },
    {
      productdescription: "I Don’t Graphic T-shirt ",
      productprice: "$77.00",
      productbrand: "Nisargi’s  Brand",
      productimage: "images/img_rectangle25_9.png",
    },
    {
      productdescription: "Blue Flower Print Crop ....",
      productprice: "$29.00",
      productbrand: "Mellon’s  Brand",
      productimage: "images/img_rectangle25_10.png",
    },
    {
      productdescription: "line Pattern Black H...",
      productprice: "$37.00",
      productbrand: "AS’s  Brand",
      productimage: "images/img_rectangle25_370x282.png",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-causten items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start max-w-[1240px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[1708px] items-center justify-start p-5 w-[24%] md:w-full"
              style={{ backgroundImage: "url('images/img_group25.svg')" }}
            >
              <div className="flex flex-col gap-[59px] items-center justify-start mb-[17px] w-[92%] md:w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[0.44px]"
                    size="txtCaustenSemiBold22"
                  >
                    Filter
                  </Text>
                  <Img
                    className="h-4 mt-0.5 rounded-sm"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                </div>
                <div className="flex flex-col gap-[17px] items-center justify-start w-[99%] md:w-full">
                  <div className="flex flex-row items-start justify-between pt-0.5 w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtCaustenSemiBold16Bluegray400"
                    >
                      Tops
                    </Text>
                    <Img
                      className="h-2.5 rounded-[1px]"
                      src="images/img_arrowright_gray_500.svg"
                      alt="arrowright"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtCaustenSemiBold16Bluegray400"
                    >
                      Printed T-shirts
                    </Text>
                    <Img
                      className="h-2.5 mt-1 rounded-[1px]"
                      src="images/img_arrowright_gray_400_01.svg"
                      alt="arrowright_One"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtCaustenSemiBold16Bluegray400"
                    >
                      Plain T-shirts
                    </Text>
                    <Img
                      className="h-2.5 mt-1 rounded-[1px]"
                      src="images/img_arrowright_gray_400_01.svg"
                      alt="arrowright_Two"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtCaustenSemiBold16Bluegray400"
                    >
                      Kurti
                    </Text>
                    <Img
                      className="h-2.5 mt-1 rounded-[1px]"
                      src="images/img_arrowright_blue_gray_400_01.svg"
                      alt="arrowright_Three"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtCaustenSemiBold16Bluegray400"
                    >
                      Boxers
                    </Text>
                    <Img
                      className="h-2.5 mt-1 rounded-[1px]"
                      src="images/img_arrowright_gray_400_01.svg"
                      alt="arrowright_Four"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtCaustenSemiBold16Bluegray400"
                    >
                      Full sleeve T-shirts
                    </Text>
                    <Img
                      className="h-2.5 mt-1 rounded-[1px]"
                      src="images/img_arrowright_blue_gray_400_01.svg"
                      alt="arrowright_Five"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between pt-0.5 w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtCaustenSemiBold16Bluegray400"
                    >
                      Joggers
                    </Text>
                    <Img
                      className="h-2.5 rounded-[1px]"
                      src="images/img_arrowright_blue_gray_400_01.svg"
                      alt="arrowright_Six"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between pt-0.5 w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtCaustenSemiBold16Bluegray400"
                    >
                      Payjamas
                    </Text>
                    <Img
                      className="h-2.5 rounded-[1px]"
                      src="images/img_arrowright_blue_gray_400_01.svg"
                      alt="arrowright_Seven"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtCaustenSemiBold16Bluegray400"
                    >
                      Jeans
                    </Text>
                    <Img
                      className="h-2.5 mt-1 rounded-[1px]"
                      src="images/img_arrowright_blue_gray_400_01.svg"
                      alt="arrowright_Eight"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[0.44px]"
                    size="txtCaustenSemiBold22"
                  >
                    Price
                  </Text>
                  <Img
                    className="h-[5px] rounded-[1px]"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-[99%] md:w-full">
                  <SeekBar
                    inputValue={[0, 0]}
                    trackColors={["#807d7e90", "#8a33fd", "#807d7e90"]}
                    thumbClassName="h-4 bg-deep_purple-A200 shadow-bs1 w-4 flex justify-center items-center rounded-[50%] outline-none"
                    className="flex h-6 rounded-[1px] w-full"
                    trackClassName="h-1.5 flex rounded-[1px] w-full"
                  />{" "}
                  <div className="flex flex-row gap-[30px] items-center justify-between w-[98%] md:w-full">
                    <Button className="border border-gray-400_a2 border-solid cursor-pointer font-medium leading-[normal] min-w-[97px] py-1.5 rounded-lg text-base text-center text-gray-800">
                      $70
                    </Button>
                    <Button className="border border-gray-400_a2 border-solid cursor-pointer font-medium leading-[normal] min-w-[97px] py-1.5 rounded-lg text-base text-center text-gray-800">
                      $600
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                    size="txtCaustenSemiBold22Gray800"
                  >
                    Colors
                  </Text>
                  <Img
                    className="h-[5px] rounded-[1px]"
                    src="images/img_icon_gray_800.svg"
                    alt="icon_One"
                  />
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-start w-auto">
                  <div className="flex flex-col gap-[18px] items-center justify-center w-auto">
                    <div className="bg-deep_purple-A200_01 h-9 rounded-[12px] w-9"></div>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Purple
                    </Text>
                    <Input
                      name="rectangleNineteen_One"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="bg-indigo-A400 flex h-9 rounded-[12px] w-9"
                    ></Input>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Navy
                    </Text>
                    <Input
                      name="rectangleNineteen_Two"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="bg-amber-300 flex h-9 rounded-[12px] w-9"
                    ></Input>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Yellow
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[18px] items-center justify-center w-auto">
                    <div className="bg-gray-900_01 h-9 rounded-[12px] w-9"></div>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Black
                    </Text>
                    <Input
                      name="rectangleTwentyEight_One"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="bg-white-A700 border border-gray-100_02 border-solid flex h-9 rounded-[12px] w-9"
                    ></Input>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      White
                    </Text>
                    <Input
                      name="rectangleTwentyEight_Two"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="bg-gray-300_01 flex h-9 rounded-[12px] w-9"
                    ></Input>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Grey
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[18px] items-center justify-center w-auto">
                    <div className="bg-deep_orange-600 h-9 rounded-[12px] w-9"></div>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Red
                    </Text>
                    <div className="bg-deep_orange-400 h-9 rounded-[12px] w-9"></div>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Broom
                    </Text>
                    <Input
                      name="rectangleTwentyNine_Two"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="bg-red-200 flex h-9 rounded-[12px] w-9"
                    ></Input>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Pink
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[18px] items-center justify-center w-auto">
                    <div className="bg-deep_orange-A200 h-9 rounded-[12px] w-9"></div>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Orange
                    </Text>
                    <div className="bg-green-500 h-9 rounded-[12px] w-9"></div>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Green
                    </Text>
                    <Input
                      name="rectangleThirty_Two"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="bg-light_blue-A200 flex h-9 rounded-[12px] w-9"
                    ></Input>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtCaustenSemiBold14Bluegray400"
                    >
                      Blue
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[0.44px]"
                    size="txtCaustenSemiBold22"
                  >
                    Size
                  </Text>
                  <Img
                    className="h-[5px] rounded-[1px]"
                    src="images/img_icon.svg"
                    alt="icon_Two"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                  <List
                    className="flex flex-col gap-[18px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-5 items-center justify-between my-0 w-full">
                      <Button className="border border-gray-400_a2 border-solid cursor-pointer font-semibold leading-[normal] min-w-[61px] py-[7px] rounded-lg text-center text-gray-800 text-sm">
                        XXS
                      </Button>
                      <Button className="border border-gray-400_a2 border-solid cursor-pointer font-semibold leading-[normal] min-w-[61px] py-[7px] rounded-lg text-center text-gray-800 text-sm">
                        XL
                      </Button>
                      <Button className="border border-gray-400_a2 border-solid cursor-pointer font-semibold leading-[normal] min-w-[61px] py-[7px] rounded-lg text-center text-gray-800 text-sm">
                        XS
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row gap-5 items-center justify-between my-0 w-full">
                      <Button className="border border-gray-400_a2 border-solid cursor-pointer font-semibold leading-[normal] min-w-[61px] py-[7px] rounded-lg text-center text-gray-800 text-sm">
                        S
                      </Button>
                      <Button className="border border-gray-400_a2 border-solid cursor-pointer font-semibold leading-[normal] min-w-[61px] py-[7px] rounded-lg text-center text-gray-800 text-sm">
                        M
                      </Button>
                      <Button className="border border-gray-400_a2 border-solid cursor-pointer font-semibold leading-[normal] min-w-[61px] py-[7px] rounded-lg text-center text-gray-800 text-sm">
                        L
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row gap-5 items-center justify-between my-0 w-full">
                      <Button className="border border-gray-400_a2 border-solid cursor-pointer font-semibold leading-[normal] min-w-[61px] py-[7px] rounded-lg text-center text-gray-800 text-sm">
                        XXL
                      </Button>
                      <Button className="border border-gray-400_a2 border-solid cursor-pointer font-semibold leading-[normal] min-w-[61px] py-[7px] rounded-lg text-center text-gray-800 text-sm">
                        3XL
                      </Button>
                      <Button className="border border-gray-400_a2 border-solid cursor-pointer font-medium leading-[normal] min-w-[61px] py-[7px] rounded-lg text-center text-gray-800 text-sm">
                        4XL
                      </Button>
                    </div>
                  </List>
                </div>
                <div className="flex flex-row items-center justify-between pr-0.5 pt-0.5 w-full">
                  <Text
                    className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[0.44px]"
                    size="txtCaustenSemiBold22"
                  >
                    Dress Style
                  </Text>
                  <Img
                    className="h-[5px] rounded-[1px]"
                    src="images/img_icon.svg"
                    alt="icon_Three"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtCaustenSemiBold16Bluegray400"
                      >
                        Classic
                      </Text>
                      <Img
                        className="h-2.5 mt-[3px] rounded-[1px]"
                        src="images/img_arrowright_gray_500.svg"
                        alt="arrowright_Nine"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtCaustenSemiBold16Bluegray400"
                      >
                        Casual
                      </Text>
                      <Img
                        className="h-2.5 mt-[3px] rounded-[1px]"
                        src="images/img_arrowright_gray_400_01.svg"
                        alt="arrowright_Ten"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtCaustenSemiBold16Bluegray400"
                      >
                        Business
                      </Text>
                      <Img
                        className="h-2.5 mt-[3px] rounded-[1px]"
                        src="images/img_arrowright_gray_400_01.svg"
                        alt="arrowright_Eleven"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtCaustenSemiBold16Bluegray400"
                      >
                        Sport
                      </Text>
                      <Img
                        className="h-2.5 rounded-[1px]"
                        src="images/img_arrowright_gray_400_01.svg"
                        alt="arrowright_Twelve"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtCaustenSemiBold16Bluegray400"
                      >
                        Elegant
                      </Text>
                      <Img
                        className="h-2.5 rounded-[1px]"
                        src="images/img_arrowright_gray_400_01.svg"
                        alt="arrowright_Thirteen"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtCaustenSemiBold16Bluegray400"
                      >
                        Formal (evening)
                      </Text>
                      <Img
                        className="h-2.5 rounded-[1px]"
                        src="images/img_arrowright_gray_400_01.svg"
                        alt="arrowright_Fourteen"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-12 items-center justify-start md:mt-0 mt-[50px] w-[73%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-800_02 sm:text-lg md:text-xl"
                  size="txtCaustenSemiBold22Gray80002"
                >
                  Women’s Clothing
                </Text>
                <Text
                  className="sm:ml-[0] ml-[511px] text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                  size="txtCaustenSemiBold22DeeppurpleA200"
                >
                  New
                </Text>
                <Text
                  className="sm:ml-[0] ml-[25px] text-[22px] text-gray-800_02 sm:text-lg md:text-xl"
                  size="txtCaustenSemiBold22Gray80002"
                >
                  Recommended
                </Text>
              </div>
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {homePageProductPropList.map((props, index) => (
                  <React.Fragment key={`HomePageProduct${index}`}>
                    <HomePageProduct
                      className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col font-coresansc gap-9 justify-start max-w-[1240px] mt-[99px] mx-auto pb-[9px] md:px-5 w-full">
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:pr-10 pr-11 sm:pr-5 w-[47%] md:w-full">
              <Line className="bg-deep_purple-A200 sm:h-1.5 h-7 mb-[3px] rounded-[3px] w-1.5 sm:w-full" />
              <Text
                className="sm:mt-0 mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
                size="txtCoreSansC65Bold28Gray800"
              >
                Clothing for Women Online in India
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px]">
              <Text
                className="text-gray-600 text-xl tracking-[0.40px]"
                size="txtCoreSansC65Bold20"
              >
                <>
                  Reexplore Women&#39;s Clothing Collection Online at Euphoria
                </>
              </Text>
              <Text
                className="leading-[33.00px] mt-8 text-gray-600 text-xl tracking-[0.40px] w-full"
                size="txtCaustenRegular20"
              >
                <span className="text-gray-600 font-causten text-left font-normal">
                  <>
                    Women&#39;s Clothing – Are you searching for the best
                    website to buy Clothing for Women online in India? Well,
                    your search for the coolest and most stylish womens clothing
                    ends here. From trendy Casual Womens Wear Online shopping to
                    premium quality cotton women&#39;s apparel,{" "}
                  </>
                </span>
                <span className="text-gray-600 font-causten text-left font-bold">
                  Euphoria
                </span>
                <span className="text-gray-600 font-causten text-left font-normal">
                  <>
                    {" "}
                    has closet of Women Collection covered with the latest and
                    best designs of Women&#39;s Clothing Online.
                  </>
                </span>
              </Text>
              <Text
                className="mt-7 text-gray-600 text-xl tracking-[0.40px]"
                size="txtCaustenRegular20"
              >
                Our collection of clothes for women will make you the
                trendsetter with an iconic resemblance of choice in Womens Wear.{" "}
              </Text>
              <Text
                className="mt-8 text-gray-600 text-xl tracking-[0.40px]"
                size="txtCoreSansC65Bold20"
              >
                One-Stop Destination to Shop Every Clothing for Women: Euphoria
              </Text>
              <Text
                className="leading-[33.00px] mt-8 text-gray-600 text-xl tracking-[0.40px] w-full"
                size="txtCaustenRegular20"
              >
                <span className="text-gray-600 font-causten text-left font-normal">
                  Today, Clothing for Women is gaining more popularity above
                  all. This is because gone are the days when women were used to
                  carrying uncomfortable fashion. Today, a lady looks prettier
                  when she is in Casual Womens Wear which is a comfortable
                  outfit. Concerning this,{" "}
                </span>
                <span className="text-gray-600 font-causten text-left font-bold">
                  Euphoria
                </span>
                <span className="text-gray-600 font-causten text-left font-normal">
                  <>
                    {" "}
                    has a big fat range of Stylish Women&#39;s Clothing that
                    would make her the winner wherever she goes.{" "}
                  </>
                </span>
              </Text>
              <Text
                className="leading-[33.00px] mt-5 text-gray-600 text-xl tracking-[0.40px] w-full"
                size="txtCaustenRegular20"
              >
                Our collection of clothes for women will make you the
                trendsetter with an iconic resemblance of choice in Womens Wear.
                It is quite evident to say that there are very few Womens
                Clothing online stores where you can buy Western Wear for Women
                comprising the premium material and elegant design that you are
                always seeking for. Basically,{" "}
              </Text>
              <a
                href="javascript:"
                className="mt-[25px] text-gray-600 text-xl tracking-[0.40px]"
              >
                <Text size="txtCoreSansC65Bold20">See More</Text>
              </a>
            </div>
          </div>
          <div className="flex flex-col font-coresansc gap-[50px] justify-start max-w-[1241px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start pr-10 sm:pr-5 w-[47%] md:w-full">
              <Line className="bg-deep_purple-A200 sm:h-1.5 h-7 mb-[3px] rounded-[3px] w-1.5 sm:w-full" />
              <Text
                className="sm:mt-0 mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
                size="txtCoreSansC65Bold28Gray800"
              >
                <>Buy Women&#39;s Clothing at Best Price</>
              </Text>
            </div>
            <div className="bg-gray-100_90 h-[998px] md:ml-[0] ml-[21px] relative rounded-[12px] w-[99%] md:w-full">
              <div className="h-[998px] m-auto w-full">
                <Line className="absolute bg-gray-400_7e h-px inset-x-[0] mx-auto top-[13%] w-full" />
                <Line className="absolute bg-gray-400_7e h-[998px] inset-y-[0] my-auto right-[21%] w-px" />
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[95px] h-max inset-[0] items-center justify-center m-auto w-[88%]">
                <div className="flex flex-row md:gap-10 items-start justify-between py-0.5 w-full">
                  <Text
                    className="my-0.5 text-2xl md:text-[22px] text-gray-800 sm:text-xl tracking-[0.48px]"
                    size="txtCoreSansC65Bold24"
                  >
                    <>Women&#39;s Clothing</>
                  </Text>
                  <Text
                    className="mb-[5px] text-2xl md:text-[22px] text-gray-800 sm:text-xl tracking-[0.48px]"
                    size="txtCoreSansC65Bold24"
                  >
                    Best Price
                  </Text>
                </div>
                <div className="flex font-causten sm:h-[776px] h-[779px] md:h-[842px] justify-end relative w-[1040px] md:w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col gap-10 items-center justify-start w-full">
                      <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                        <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[975px] w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                            size="txtCaustenRegular24"
                          >
                            ₹1099
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[975px] w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                            size="txtCaustenRegular24"
                          >
                            ₹1099
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[975px]">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                            size="txtCaustenRegular24"
                          >
                            ₹1399
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[975px]">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                            size="txtCaustenRegular24"
                          >
                            ₹499
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[975px]">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                            size="txtCaustenRegular24"
                          >
                            ₹799
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[975px]">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                            size="txtCaustenRegular24"
                          >
                            ₹599
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[975px]">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                            size="txtCaustenRegular24"
                          >
                            ₹998
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[975px]">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                            size="txtCaustenRegular24"
                          >
                            ₹499
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[975px]">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                          size="txtCaustenRegular24"
                        >
                          ₹800
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[975px]">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                      size="txtCaustenRegular24"
                    >
                      ₹449
                    </Text>
                  </div>
                  <div className="flex flex-col h-full items-end justify-start mt-auto mx-auto md:pl-10 sm:pl-5 pl-[975px]">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                      size="txtCaustenRegular24"
                    >
                      ₹349
                    </Text>
                  </div>
                  <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-end justify-between m-auto w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Pick Any 4- Womens Plain T-shirt Combo
                      </Text>
                      <Text
                        className="mt-[39px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Pick Any 4- Plain Womens Boxer Combo
                      </Text>
                      <Text
                        className="mt-[38px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Pick Any 4 - Women Plain Full Sleeve T-shirt Combo
                      </Text>
                      <Text
                        className="mt-[39px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Multicolor Checkered Long Casual Shirts for Women
                      </Text>
                      <Text
                        className="mt-[38px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Pick Any 2: Plain Boxy Casual Shirts for Women Combo
                      </Text>
                      <Text
                        className="mt-[37px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Blue Floral Anarkali Kurti
                      </Text>
                      <Text
                        className="mt-[41px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Jade Black Narrow Cut Flexible Women Jeggings
                      </Text>
                      <Text
                        className="mt-[38px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Mustard-yellow Solid Straight-Fit Women Pant
                      </Text>
                      <Text
                        className="mt-[38px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Women Pants Combo - Pick Any 2
                      </Text>
                      <Text
                        className="mt-[38px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Pista Green Solid Boxy Casual Shirts for Women
                      </Text>
                      <Text
                        className="mt-[39px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Plain Burgundy Womens Boxer
                      </Text>
                      <Text
                        className="mt-[38px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                        size="txtCaustenRegular24"
                      >
                        Striped Front Tie Casual Shirts for Women
                      </Text>
                    </div>
                    <Text
                      className="mb-0.5 md:mt-0 mt-[745px] text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[0.48px]"
                      size="txtCaustenRegular24"
                    >
                      ₹449
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-800 flex font-causten items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductsListpagePage;
