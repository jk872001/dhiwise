import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import HomePageLogo from "components/HomePageLogo";
import HomePageProduct from "components/HomePageProduct";

import { CloseSVG } from "../../assets/images";

const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepagePage = () => {
  const navigate = useNavigate();

  const [buttonvalue, setButtonvalue] = React.useState("");
  const homePageProductPropList = [
    {},
    {
      productdescription: "line Pattern Black H...",
      productprice: "$37.00",
      productbrand: "AS’s  Brand",
      productimage: "images/img_rectangle25_370x282.png",
    },
    {
      productdescription: "Black Shorts",
      productprice: "$37.00",
      productbrand: "MM’s  Brand",
      productimage: "images/img_rectangle25_1.png",
    },
    {
      productdescription: "Levender Hoodie with ....",
      productprice: "$119.00",
      productbrand: "Nike’s  Brand",
      productimage: "images/img_rectangle25_2.png",
    },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-coresansc items-center justify-start mx-auto w-full">
        <header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto my-[31px] w-[86%]">
            <HomePageLogo className="font-mintaka md:h-[45px] h-[46px] relative w-[8%] md:w-full" />
            <ul className="flex sm:flex-col flex-row font-causten gap-10 sm:hidden items-center justify-center md:ml-[0] ml-[87px] w-auto sm:w-full common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="hover:font-bold text-[22px] text-gray-800 sm:text-lg md:text-xl"
                >
                  <Text size="txtCaustenBold22">Shop</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-bold text-[22px] text-gray-600 hover:text-gray-800 sm:text-lg md:text-xl"
                >
                  <Text size="txtCaustenMedium22">Men</Text>
                </a>
              </li>
              <li>
                <a className="hover:font-bold text-[22px] text-gray-600 hover:text-gray-800 sm:text-lg md:text-xl">
                  <Text
                    className="common-pointer"
                    size="txtCaustenMedium22"
                    onClick={() => navigate("/productslistpage")}
                  >
                    Women
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-bold text-[22px] text-gray-600_01 hover:text-gray-800 sm:text-lg md:text-xl"
                >
                  <Text size="txtCaustenMedium22Gray60001">Combos</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-bold text-[22px] text-gray-600_01 hover:text-gray-800 sm:text-lg md:text-xl"
                >
                  <Text size="txtCaustenMedium22Gray60001">Joggers</Text>
                </a>
              </li>
            </ul>
            <Input
              name="button"
              placeholder="Search"
              value={buttonvalue}
              onChange={(e) => setButtonvalue(e)}
              className="font-causten leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-center text-gray-600 w-full"
              wrapClassName="bg-gray-100 flex mb-0.5 md:ml-[0] ml-[76px] pl-5 pr-[35px] py-[11px] rounded-lg w-[22%] md:w-full"
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
              <Button className="bg-gray-100 flex h-11 items-center justify-center p-3 rounded-lg w-11">
                <Img className="h-5" src="images/img_cart.svg" alt="cart" />
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start rounded-[5px] w-full">
            <div className="h-[716px] md:px-5 relative w-full">
              <Img
                className="h-[716px] m-auto object-cover w-full"
                src="images/img_shophero1productslide1.png"
                alt="shophero1produc"
              />
              <div className="absolute bottom-[7%] flex flex-col md:gap-10 gap-[73px] inset-x-[0] items-center justify-start mx-auto w-[95%]">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Img
                    className="h-11 md:mt-0 mt-[154px]"
                    src="images/img_chevronleft.svg"
                    alt="chevronleft"
                  />
                  <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[129px] pt-0.5 w-[33%] md:w-full">
                    <Text
                      className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[0.16px]"
                      size="txtCoreSansC55Medium32"
                    >
                      T-shirt / Tops
                    </Text>
                    <Text
                      className="leading-[93.00px] mt-[43px] md:text-5xl text-[78px] text-white-A700 tracking-[0.31px]"
                      size="txtCoreSansC85Heavy78"
                    >
                      <>
                        Summer <br />
                        Value Pack
                      </>
                    </Text>
                    <Text
                      className="mt-[47px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[0.31px]"
                      size="txtCoreSansC55Medium32"
                    >
                      cool / colorful / comfy
                    </Text>
                    <Button className="bg-white-A700 cursor-pointer font-bold font-causten leading-[normal] min-w-[250px] mt-12 py-4 rounded-lg text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl">
                      Shop Now
                    </Button>
                  </div>
                  <Img
                    className="h-11 md:ml-[0] ml-[749px] md:mt-0 mt-[154px]"
                    src="images/img_chevronright.svg"
                    alt="chevronright"
                  />
                </div>
                <Img
                  className="h-2.5 rounded-[5px]"
                  src="images/img_carouselindicators.svg"
                  alt="carouselindicat"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1239px] mt-[130px] mx-auto md:px-5 w-full">
          <div className="md:h-[355px] h-[356px] relative shadow-bs w-[49%] md:w-full">
            <Img
              className="h-[355px] m-auto object-cover rounded-[12px] w-full"
              src="images/img_unsplashqyc13qbgam4.png"
              alt="unsplashqyc13qb"
            />
            <div className="absolute flex flex-col items-start justify-start left-[5%] top-[20%]">
              <Text
                className="text-lg text-white-A700 tracking-[0.25px]"
                size="txtMontserratRomanExtraBold18"
              >
                Low Price
              </Text>
              <Text
                className="mt-[35px] sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                size="txtCoreSansC75ExtraBold34"
              >
                High Coziness
              </Text>
              <Text
                className="mt-[18px] text-base text-white-A700 tracking-[0.25px]"
                size="txtCoreSansC55Medium16"
              >
                UPTO 50% OFF
              </Text>
              <Text
                className="ml-1 md:ml-[0] mt-[54px] text-white-A700 text-xl underline"
                size="txtCoreSansC75ExtraBold20"
              >
                Explore Items
              </Text>
            </div>
          </div>
          <div className="h-[355px] relative w-[49%] md:w-full">
            <Img
              className="h-[355px] m-auto object-cover rounded-[12px] w-full"
              src="images/img_unsplashqyc13qbgam4_355x604.png"
              alt="unsplashqyc13qb_One"
            />
            <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[5%] my-auto py-[5px]">
              <Text
                className="text-lg text-white-A700 tracking-[0.25px]"
                size="txtMontserratRomanExtraBold18"
              >
                Beyoung Presents
              </Text>
              <Text
                className="leading-[45.00px] mt-[27px] sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                size="txtCoreSansC75ExtraBold34"
              >
                <>
                  Breezy Summer
                  <br />
                  Style
                </>
              </Text>
              <Text
                className="mt-3 text-base text-white-A700 tracking-[0.25px]"
                size="txtCoreSansC55Medium16"
              >
                UPTO 50% OFF
              </Text>
              <Text
                className="mt-[42px] text-white-A700 text-xl underline"
                size="txtCoreSansC75ExtraBold20"
              >
                Explore Items
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[71px] items-start justify-start max-w-[1238px] mt-24 mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[194px] w-[34%] md:w-full">
            <Line className="bg-deep_purple-A200 h-[30px] mt-[3px] rounded-[3px] w-1.5" />
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-gray-800 tracking-[0.68px]"
              size="txtCoreSansC65Bold34"
            >
              New Arrival
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-causten md:gap-10 items-center justify-between w-full">
            <Img
              className="h-3 w-[13px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[38.58px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-9 justify-start w-full">
                <div className="bg-gray-100_01 flex flex-col h-[262px] items-center justify-start rounded-[21px] w-[262px]">
                  <Img
                    className="h-[262px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] rounded-tl-[21px] rounded-tr-[21px] w-[262px]"
                    src="images/img_photographerwhitebackground.png"
                    alt="photographerwhi"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[5px] text-gray-800 text-xl tracking-[0.20px]"
                  size="txtCaustenBold20"
                >
                  Knitted Joggers
                </Text>
              </div>
              <div className="flex flex-col gap-[35px] justify-start w-full">
                <div className="bg-gray-100_01 flex flex-col h-[262px] items-center justify-start rounded-[10px] w-[262px]">
                  <Img
                    className="h-[262px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] rounded-tl-[10px] rounded-tr-[10px] w-[262px]"
                    src="images/img_rectangle28.png"
                    alt="rectangleTwentyEight"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[5px] text-gray-800 text-xl tracking-[0.20px]"
                  size="txtCaustenBold20"
                >
                  Full Sleeve
                </Text>
              </div>
              <div className="flex flex-col gap-[35px] justify-start w-full">
                <div className="bg-gray-100_01 flex flex-col h-[262px] items-center justify-start rounded-[10px] w-[262px]">
                  <Img
                    className="h-[262px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] rounded-tl-[10px] rounded-tr-[10px] w-[262px]"
                    src="images/img_rectangle28_262x262.png"
                    alt="rectangleTwentyEight"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[5px] text-gray-800 text-xl tracking-[0.20px]"
                  size="txtCaustenBold20"
                >
                  Active T-Shirts
                </Text>
              </div>
              <div className="flex flex-col gap-[35px] justify-start w-full">
                <div className="bg-gray-100_01 flex flex-col h-[262px] items-center justify-start rounded-[10px] w-[262px]">
                  <Img
                    className="h-[262px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] rounded-tl-[10px] rounded-tr-[10px] w-[262px]"
                    src="images/img_rectangle28_1.png"
                    alt="rectangleTwentyEight"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[5px] text-gray-800 text-xl tracking-[0.20px]"
                  size="txtCaustenBold20"
                >
                  Urban Shirts
                </Text>
              </div>
            </List>
            <Img
              className="h-3 w-[13px]"
              src="images/img_arrowright_gray_800.svg"
              alt="arrowright"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[68px] items-start justify-start max-w-[1240px] mt-[90px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-5 items-start justify-start md:pr-10 pr-28 sm:pr-5 w-[34%] md:w-full">
            <Line className="bg-deep_purple-A200 h-[30px] mb-1 rounded-[3px] w-1.5" />
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-gray-800 tracking-[0.68px]"
              size="txtCoreSansC65Bold34"
            >
              Big Saving Zone
            </Text>
          </div>
          <div className="flex flex-col font-causten items-center justify-start w-full">
            <div className="flex flex-col gap-[21px] items-center justify-start w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                <div className="h-[393px] relative w-full">
                  <Img
                    className="h-[393px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle74.png"
                    alt="rectangleSeventyFour"
                  />
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[5%] my-auto w-[37%]">
                    <Text
                      className="leading-[38.00px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.56px]"
                      size="txtCoreSansC65Bold28"
                    >
                      <>
                        Hawaiian
                        <br />
                        Shirts
                      </>
                    </Text>
                    <Text
                      className="mt-[11px] text-sm text-white-A700"
                      size="txtCaustenSemiBold14"
                    >
                      Dress up in summer vibe
                    </Text>
                    <Text
                      className="mt-2 text-lg text-white-A700"
                      size="txtCaustenBold18"
                    >
                      UPTO 50% OFF
                    </Text>
                    <Img
                      className="h-[23px] md:ml-[0] ml-[45px] mt-[29px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                    <Button className="border border-solid border-white-A700 cursor-pointer font-causten font-medium h-[34px] leading-[normal] mt-10 py-[9px] rounded text-center text-white-A700 text-xs w-[111px]">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
                <div className="h-[393px] relative w-full">
                  <Img
                    className="h-[393px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle75.png"
                    alt="rectangleSeventyFive"
                  />
                  <div className="absolute flex flex-col h-max inset-y-[0] items-end justify-start my-auto right-[6%] w-[39%]">
                    <div className="flex flex-col gap-7 items-center justify-start w-[69%] md:w-full">
                      <Button className="bg-gray-800 cursor-pointer font-bold font-causten h-[34px] leading-[normal] py-[9px] rounded text-center text-white-A700 text-xs w-[104px]">
                        Limited Stock
                      </Button>
                      <Text
                        className="leading-[38.00px] sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700 tracking-[0.56px]"
                        size="txtCoreSansC65Bold28"
                      >
                        <>
                          Printed
                          <br />
                          T-Shirt
                        </>
                      </Text>
                    </div>
                    <Text
                      className="mt-[17px] text-right text-sm text-white-A700"
                      size="txtCaustenSemiBold14"
                    >
                      New Designs Every Week
                    </Text>
                    <Text
                      className="mt-2 text-lg text-right text-white-A700"
                      size="txtCaustenBold18"
                    >
                      UPTO 40% OFF
                    </Text>
                    <Img
                      className="h-[23px] mt-[25px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown_One"
                    />
                    <Button className="border border-solid border-white-A700 cursor-pointer font-medium h-[34px] leading-[normal] mt-[30px] py-[9px] rounded text-center text-white-A700 text-xs w-[111px]">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
                <div className="h-[393px] relative w-full">
                  <Img
                    className="h-[393px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle76.png"
                    alt="rectangleSeventySix"
                  />
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[4%] w-[39%]">
                    <Text
                      className="leading-[38.00px] sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
                      size="txtCoreSansC65Bold28Gray800"
                    >
                      <>
                        Cargo
                        <br />
                        Joggers
                      </>
                    </Text>
                    <Text
                      className="mt-[11px] text-gray-800 text-sm"
                      size="txtCaustenSemiBold14Gray800"
                    >
                      Move with style & comfort
                    </Text>
                    <Text
                      className="mt-2 text-gray-800 text-lg"
                      size="txtCaustenBold18Gray800"
                    >
                      UPTO 50% OFF
                    </Text>
                    <Img
                      className="h-[23px] md:ml-[0] ml-[51px] mt-[29px]"
                      src="images/img_arrowdown_gray_800.svg"
                      alt="arrowdown_Two"
                    />
                    <Button className="border border-gray-800 border-solid cursor-pointer font-causten font-medium h-[34px] leading-[normal] ml-1.5 md:ml-[0] mt-9 py-[9px] rounded text-center text-gray-800 text-xs w-[111px]">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="h-[393px] relative w-full">
                  <Img
                    className="h-[393px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle77.png"
                    alt="rectangleSeventySeven"
                  />
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[20%] w-[22%]">
                    <Text
                      className="leading-[43.00px] ml-0.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-gray-800 tracking-[0.64px]"
                      size="txtCoreSansC65Bold32"
                    >
                      <>
                        Urban
                        <br />
                        Shirts
                      </>
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[11px] text-base text-gray-800"
                      size="txtCaustenSemiBold16"
                    >
                      Live In Confort
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[11px] text-gray-800 text-xl"
                      size="txtCaustenBold20"
                    >
                      FLAT 60% OFF
                    </Text>
                    <Img
                      className="h-[27px] md:ml-[0] ml-[53px] mt-[34px]"
                      src="images/img_arrowdown_gray_800.svg"
                      alt="arrowdown"
                    />
                    <Button className="border-2 border-gray-800 border-solid cursor-pointer font-causten font-semibold h-9 leading-[normal] mt-[43px] py-2.5 rounded text-center text-gray-800 text-xs w-[132px]">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
                <div className="h-[393px] relative w-full">
                  <Img
                    className="h-[393px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle78.png"
                    alt="rectangleSeventyEight"
                  />
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[16%] w-[27%]">
                    <Text
                      className="leading-[43.00px] md:text-3xl sm:text-[28px] text-[32px] text-gray-800 tracking-[0.64px]"
                      size="txtCoreSansC65Bold32"
                    >
                      <>
                        Oversized
                        <br />
                        T-Shirts
                      </>
                    </Text>
                    <Text
                      className="mt-[13px] text-base text-gray-800"
                      size="txtCaustenSemiBold16"
                    >
                      Street Style Icon
                    </Text>
                    <Text
                      className="mt-2.5 text-gray-800 text-xl"
                      size="txtCaustenBold20"
                    >
                      FLAT 60% OFF
                    </Text>
                    <Img
                      className="h-[27px] md:ml-[0] ml-[52px] mt-[34px]"
                      src="images/img_arrowdown_gray_800.svg"
                      alt="arrowdown"
                    />
                    <Button className="border-2 border-gray-800 border-solid cursor-pointer font-causten font-semibold h-9 leading-[normal] mt-11 py-2.5 rounded text-center text-gray-800 text-xs w-[132px]">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1240px] mt-[100px] mx-auto md:px-5 w-full">
          <div className="h-[639px] relative w-1/2 md:w-full">
            <Img
              className="h-[639px] m-auto object-cover w-full"
              src="images/img_unsplashbbiusdck8tu.png"
              alt="unsplashbbiusdc"
            />
            <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[76%]">
              <Text
                className="leading-[50.00px] sm:text-3xl md:text-[32px] text-[34px] text-white-A700 tracking-[0.21px] w-full"
                size="txtCoreSansC85Heavy34"
              >
                WE MADE YOUR EVERYDAY FASHION BETTER!
              </Text>
              <Text
                className="mt-[30px] text-white-A700 text-xl tracking-[1.00px] w-[97%] sm:w-full"
                size="txtCaustenLight20"
              >
                In our journey to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </Text>
              <Button className="bg-white-A700 cursor-pointer font-causten font-semibold leading-[normal] min-w-[168px] mt-[50px] py-3 rounded-lg text-center text-gray-800 text-lg">
                Shop Now
              </Button>
            </div>
          </div>
          <Img
            className="md:flex-1 h-[639px] sm:h-auto object-cover w-[51%] md:w-full"
            src="images/img_rectangle13.png"
            alt="rectangleThirteen"
          />
        </div>
        <div className="flex flex-col md:gap-10 gap-[68px] items-start justify-start max-w-[1240px] mt-[100px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[52px] w-[34%] md:w-full">
            <Line className="bg-deep_purple-A200 h-[30px] mb-1 rounded-[3px] w-1.5" />
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-gray-800 tracking-[0.68px]"
              size="txtCoreSansC65Bold34"
            >
              Categories For Men
            </Text>
          </div>
          <div className="flex flex-col font-causten items-center justify-start w-full">
            <div className="md:gap-5 gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-[15.64px] items-start justify-start w-full">
                <Img
                  className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[270px] sm:w-full"
                  src="images/img_rectangle20.png"
                  alt="rectangleTwenty"
                />
                <div className="flex flex-row gap-[73.18px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                    <Text
                      className="text-[17.88px] text-blue_gray-900_01 tracking-[-0.72px] w-[42px]"
                      size="txtCaustenBold1788"
                    >
                      Shirts
                    </Text>
                    <Text
                      className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[68px]"
                      size="txtCaustenMedium1341"
                    >
                      Explore Now!
                    </Text>
                  </div>
                  <Img
                    className="h-px w-[17px]"
                    src="images/img_arrow1.svg"
                    alt="arrowOne"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[14.52px] items-start justify-start w-full">
                <Img
                  className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[270px] sm:w-full"
                  src="images/img_rectangle21.png"
                  alt="rectangleTwentyOne"
                />
                <div className="flex flex-row gap-[124.01px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                    <Text
                      className="text-[17.88px] text-blue_gray-900_01 tracking-[-0.72px] w-[113px]"
                      size="txtCaustenBold1788"
                    >
                      Printed T-Shirts
                    </Text>
                    <Text
                      className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[68px]"
                      size="txtCaustenMedium1341"
                    >
                      Explore Now!
                    </Text>
                  </div>
                  <Img
                    className="h-px w-[17px]"
                    src="images/img_arrow1.svg"
                    alt="arrowTwo"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[13.41px] items-start justify-start w-full">
                <Img
                  className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[273px] sm:w-full"
                  src="images/img_rectangle22.png"
                  alt="rectangleTwentyTwo"
                />
                <div className="flex flex-row gap-[139.09px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                    <Text
                      className="text-[17.88px] text-blue_gray-900_01 tracking-[-0.72px] w-[89px]"
                      size="txtCaustenBold1788"
                    >
                      Plain T-Shirt
                    </Text>
                    <Text
                      className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[68px]"
                      size="txtCaustenMedium1341"
                    >
                      Explore Now!
                    </Text>
                  </div>
                  <Img
                    className="h-px w-[17px]"
                    src="images/img_arrow1.svg"
                    alt="arrowThree"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[13.41px] items-start justify-start w-full">
                <Img
                  className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[273px] sm:w-full"
                  src="images/img_rectangle22_393x273.png"
                  alt="rectangleTwentyTwo"
                />
                <div className="flex flex-row gap-[139.09px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                    <Text
                      className="text-[17.88px] text-blue_gray-900_01 tracking-[-0.72px] w-[85px]"
                      size="txtCaustenBold1788"
                    >
                      Polo T-Shirt
                    </Text>
                    <Text
                      className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[68px]"
                      size="txtCaustenMedium1341"
                    >
                      Explore Now!
                    </Text>
                  </div>
                  <Img
                    className="h-px w-[17px]"
                    src="images/img_arrow1.svg"
                    alt="arrowThree"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[15.64px] items-start justify-start w-full">
                <Img
                  className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[270px] sm:w-full"
                  src="images/img_rectangle20_393x270.png"
                  alt="rectangleTwenty"
                />
                <div className="flex flex-row gap-[73.18px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                    <Text
                      className="text-[17.88px] text-blue_gray-900_01 tracking-[-0.72px] w-[152px]"
                      size="txtCaustenBold1788"
                    >
                      Hoodies & Sweetshirt
                    </Text>
                    <Text
                      className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[68px]"
                      size="txtCaustenMedium1341"
                    >
                      Explore Now!
                    </Text>
                  </div>
                  <Img
                    className="h-px w-[17px]"
                    src="images/img_arrow1.svg"
                    alt="arrowOne"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[14.52px] items-start justify-start w-full">
                <Img
                  className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[270px] sm:w-full"
                  src="images/img_rectangle21_393x270.png"
                  alt="rectangleTwentyOne"
                />
                <div className="flex flex-row gap-[124.01px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                    <Text
                      className="text-[17.88px] text-blue_gray-900_01 tracking-[-0.72px] w-11"
                      size="txtCaustenBold1788"
                    >
                      Jeans
                    </Text>
                    <Text
                      className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[68px]"
                      size="txtCaustenMedium1341"
                    >
                      Explore Now!
                    </Text>
                  </div>
                  <Img
                    className="h-px w-[17px]"
                    src="images/img_arrow1.svg"
                    alt="arrowTwo"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[13.41px] items-start justify-start w-full">
                <Img
                  className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[273px] sm:w-full"
                  src="images/img_rectangle22_1.png"
                  alt="rectangleTwentyTwo"
                />
                <div className="flex flex-row gap-[139.09px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                    <Text
                      className="text-[17.88px] text-blue_gray-900_01 tracking-[-0.72px] w-[82px]"
                      size="txtCaustenBold1788"
                    >
                      Activewear
                    </Text>
                    <Text
                      className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[68px]"
                      size="txtCaustenMedium1341"
                    >
                      Explore Now!
                    </Text>
                  </div>
                  <Img
                    className="h-px w-[17px]"
                    src="images/img_arrow1.svg"
                    alt="arrowThree"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[13.41px] items-start justify-start w-full">
                <Img
                  className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[273px] sm:w-full"
                  src="images/img_rectangle22_2.png"
                  alt="rectangleTwentyTwo"
                />
                <div className="flex flex-row gap-[139.09px] items-center justify-start w-auto">
                  <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                    <Text
                      className="text-[17.88px] text-blue_gray-900_01 tracking-[-0.72px] w-[49px]"
                      size="txtCaustenBold1788"
                    >
                      Boxers
                    </Text>
                    <Text
                      className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[68px]"
                      size="txtCaustenMedium1341"
                    >
                      Explore Now!
                    </Text>
                  </div>
                  <Img
                    className="h-px w-[17px]"
                    src="images/img_arrow1.svg"
                    alt="arrowThree"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[68px] items-start justify-start max-w-[1239px] mt-[97px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-[35%] md:w-full">
            <Line className="bg-deep_purple-A200 sm:h-1.5 h-[30px] mb-1 rounded-[3px] w-1.5 sm:w-full" />
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-gray-800 tracking-[0.68px]"
              size="txtCoreSansC65Bold34"
            >
              Categories For Women
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row font-poppins gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[459px] justify-start max-w-[1239px] w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[15.64px] items-start justify-start w-auto">
              <Img
                className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[270px] sm:w-full"
                src="images/img_rectangle20_1.png"
                alt="rectangleTwenty"
              />
              <div className="flex flex-row gap-[73.18px] items-center justify-start w-auto">
                <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                  <Text
                    className="text-[17.88px] text-gray-900 tracking-[-0.72px] w-44"
                    size="txtPoppinsMedium1788"
                  >
                    Hoodies & Sweetshirt
                  </Text>
                  <Text
                    className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[79px]"
                    size="txtPoppinsMedium1341"
                  >
                    Explore Now!
                  </Text>
                </div>
                <Img
                  className="h-px w-[17px]"
                  src="images/img_arrow1.svg"
                  alt="arrowOne"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[14.52px] items-start justify-start w-auto">
              <Img
                className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[270px] sm:w-full"
                src="images/img_rectangle21_1.png"
                alt="rectangleTwentyOne"
              />
              <div className="flex flex-row gap-[124.01px] items-center justify-start w-auto">
                <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                  <Text
                    className="text-[17.88px] text-gray-900 tracking-[-0.72px] w-32"
                    size="txtPoppinsMedium1788"
                  >
                    Coats & Parkas
                  </Text>
                  <Text
                    className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[79px]"
                    size="txtPoppinsMedium1341"
                  >
                    Explore Now!
                  </Text>
                </div>
                <Img
                  className="h-px w-[17px]"
                  src="images/img_arrow1.svg"
                  alt="arrowTwo"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[13.41px] items-start justify-start w-auto">
              <Img
                className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[273px] sm:w-full"
                src="images/img_rectangle22_3.png"
                alt="rectangleTwentyTwo"
              />
              <div className="flex flex-row gap-[139.09px] items-center justify-start w-auto">
                <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                  <Text
                    className="text-[17.88px] text-gray-900 tracking-[-0.72px] w-[116px]"
                    size="txtPoppinsMedium1788"
                  >
                    Tees & T-Shirt
                  </Text>
                  <Text
                    className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[79px]"
                    size="txtPoppinsMedium1341"
                  >
                    Explore Now!
                  </Text>
                </div>
                <Img
                  className="h-px w-[17px]"
                  src="images/img_arrow1.svg"
                  alt="arrowThree"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[13.41px] items-start justify-start w-auto">
              <Img
                className="h-[393px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[273px] sm:w-full"
                src="images/img_rectangle22_4.png"
                alt="rectangleTwentyTwo"
              />
              <div className="flex flex-row gap-[139.09px] items-center justify-start w-auto">
                <div className="flex flex-col gap-[3.91px] items-start justify-start w-auto">
                  <Text
                    className="text-[17.88px] text-gray-900 tracking-[-0.72px] w-[55px]"
                    size="txtPoppinsMedium1788"
                  >
                    Boxers
                  </Text>
                  <Text
                    className="text-[13.41px] text-gray-600_02 tracking-[-0.54px] w-[79px]"
                    size="txtPoppinsMedium1341"
                  >
                    Explore Now!
                  </Text>
                </div>
                <Img
                  className="h-px w-[17px]"
                  src="images/img_arrow1.svg"
                  alt="arrowThree"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="bg-gray-800 border border-blue_gray-900_02 border-solid flex flex-col items-center justify-start max-w-[1233px] mt-[91px] mx-auto p-[43px] md:px-5 rounded-[12px] w-full">
          <Text
            className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
            size="txtCoreSansC85Heavy50"
          >
            Top Brands Deal
          </Text>
          <Text
            className="mt-[29px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
            size="txtUbuntuRegular22"
          >
            <span className="text-white-A700 font-causten font-normal">
              Up To{" "}
            </span>
            <span className="text-yellow-A700 font-causten font-bold">60%</span>
            <span className="text-white-A700 font-causten font-normal">
              {" "}
              off on brands
            </span>
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-4 mt-[63px] w-[86%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start p-3 rounded-[12px] w-[18%] md:w-full">
              <Img
                className="h-[53px] md:h-auto mt-[5px] object-cover w-[98%]"
                src="images/img_image7.png"
                alt="imageSeven"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start ml-6 md:ml-[0] p-2 rounded-[12px] w-[18%] md:w-full">
              <Img
                className="h-[68px] md:h-auto object-cover w-[76%]"
                src="images/img_image18.png"
                alt="imageEighteen"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end ml-6 md:ml-[0] p-3 rounded-[12px] w-[18%] md:w-full">
              <Img
                className="h-[55px] md:h-auto mt-1 object-cover w-[73%]"
                src="images/img_image19.png"
                alt="imageNineteen"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start ml-6 md:ml-[0] p-[13px] rounded-[12px] w-[18%] md:w-full">
              <Img
                className="h-[49px] md:h-auto my-1 object-cover w-[99%]"
                src="images/img_image20.png"
                alt="imageTwenty"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start ml-6 md:ml-[0] p-3 rounded-[12px] w-[18%] md:w-full">
              <Img
                className="h-14 md:h-auto mb-[3px] object-cover w-[74%]"
                src="images/img_image21.png"
                alt="imageTwentyOne"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[68px] items-start justify-start max-w-[1238px] mt-[76px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[114px] w-[34%] md:w-full">
            <Line className="bg-deep_purple-A200 h-[30px] mb-1 rounded-[3px] w-1.5" />
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-gray-800 tracking-[0.68px]"
              size="txtCoreSansC65Bold34"
            >
              In The Limelight
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row font-causten gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start ml-0.5 md:ml-[0] w-auto md:w-full"
            orientation="horizontal"
          >
            {homePageProductPropList.map((props, index) => (
              <React.Fragment key={`HomePageProduct${index}`}>
                <HomePageProduct
                  className="flex flex-col gap-[30px] items-center justify-start w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-[71px] items-start justify-start max-w-[1237px] mt-24 mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[223px] w-[34%] md:w-full">
            <Line className="bg-deep_purple-A200 h-[30px] mt-[3px] rounded-[3px] w-1.5" />
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-gray-800 tracking-[0.68px]"
              size="txtCoreSansC65Bold34"
            >
              Feedback
            </Text>
          </div>
          <div className="flex flex-col font-manrope items-start justify-start w-auto md:w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState1}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState1(e?.item);
              }}
              ref={sliderRef1}
              className="w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col items-center justify-start mx-2.5 pb-[13px]">
                    <div className="flex md:flex-col flex-row gap-[23.19px] items-start justify-start max-w-[1237px] overflow-auto w-full">
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        activeIndex={sliderState}
                        responsive={{
                          0: { items: 1 },
                          550: { items: 2 },
                          1050: { items: 3 },
                        }}
                        onSlideChanged={(e) => {
                          setsliderState(e?.item);
                        }}
                        ref={sliderRef}
                        className="flex flex-1 gap-[23px] w-full"
                        items={[...Array(9)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-5 items-start justify-start mx-2.5 p-[23.19px] sm:px-5 rounded-[10px]">
                              <div className="flex flex-row gap-[11.6px] items-start justify-between w-full">
                                <Img
                                  className="h-[57px] md:h-auto object-cover w-[57px]"
                                  src="images/img_rectangle729.png"
                                  alt="rectangle729"
                                />
                                <div className="flex flex-row gap-[3.87px] items-start justify-start w-auto">
                                  <Img
                                    className="h-[23px] w-[23px]"
                                    src="images/img_starpurple500.svg"
                                    alt="starpurple500"
                                  />
                                  <Img
                                    className="h-[23px] w-[23px]"
                                    src="images/img_starpurple500.svg"
                                    alt="starpurple500_One"
                                  />
                                  <Img
                                    className="h-[23px] w-[23px]"
                                    src="images/img_starpurple500.svg"
                                    alt="starpurple500_Two"
                                  />
                                  <Img
                                    className="h-[23px] w-[23px]"
                                    src="images/img_starhalf.svg"
                                    alt="starhalf"
                                  />
                                  <Img
                                    className="h-[23px] w-[23px]"
                                    src="images/img_staroutline.svg"
                                    alt="staroutline"
                                  />
                                </div>
                              </div>
                              <Text
                                className="text-[22px] text-center text-gray-800 sm:text-lg md:text-xl tracking-[0.44px] w-auto"
                                size="txtCoreSansC55Medium22"
                              >
                                Floyd Miles
                              </Text>
                              <Text
                                className="text-gray-600 text-sm tracking-[0.28px]"
                                size="txtCaustenRegular14"
                              >
                                <>
                                  Amet minim mollit non deserunt ullamco est sit
                                  aliqua dolor do amet sint. Velit officia
                                  consequat duis enim velit mollit. <br />
                                  Exercitation veniam consequat sunt nostrud
                                  amet. Amet minim mollit non deserunt ullamco
                                  est sit aliqua dolor do amet sint. Velit
                                  officia consequat duis enim velit mollit.
                                  Exercitation veniam consequat sunt nostrud
                                  amet.
                                </>
                              </Text>
                            </div>
                          </React.Fragment>
                        ))}
                        renderDotsItem={({ isActive }) => {
                          if (isActive) {
                            return (
                              <div className="inline-block cursor-pointer rounded-[50%] h-[7px] bg-gray-800 w-[7px]" />
                            );
                          }
                          return (
                            <div
                              className="inline-block cursor-pointer rounded-[50%] h-[7px] bg-gray-400_4c w-[7px]"
                              role="button"
                              tabIndex={0}
                            />
                          );
                        }}
                      />
                      <List
                        className="flex-1 sm:flex-col flex-row gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 border border-gray-200 border-solid flex sm:flex-1 flex-col gap-[11.6px] items-start justify-start p-[23.19px] sm:px-5 rounded-[3px] w-[396px] sm:w-full">
                          <Img
                            className="h-[57px] md:h-auto object-cover w-[57px]"
                            src="images/img_rectangle729_2.png"
                            alt="rectangle729"
                          />
                          <Text
                            className="sm:text-[17.26px] md:text-[19.26px] text-[21.26px] text-blue_gray-900_03 text-center tracking-[0.43px] w-auto"
                            size="txtManropeSemiBold2126"
                          >
                            Floyd Miles
                          </Text>
                          <Text
                            className="max-w-[350px] md:max-w-full text-[15.46px] text-blue_gray-900_03 tracking-[0.31px]"
                            size="txtManropeRegular1546"
                          >
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                          </Text>
                        </div>
                        <div className="bg-white-A700 border border-gray-200 border-solid flex sm:flex-1 flex-col gap-[11.6px] items-start justify-start p-[23.19px] sm:px-5 rounded-[3px] w-[396px] sm:w-full">
                          <Img
                            className="h-[57px] md:h-auto object-cover w-[57px]"
                            src="images/img_rectangle729_3.png"
                            alt="rectangle729"
                          />
                          <Text
                            className="sm:text-[17.26px] md:text-[19.26px] text-[21.26px] text-blue_gray-900_03 text-center tracking-[0.43px] w-auto"
                            size="txtManropeSemiBold2126"
                          >
                            Ronald Richards
                          </Text>
                          <Text
                            className="text-[15.46px] text-blue_gray-900_03 tracking-[0.31px]"
                            size="txtManropeRegular1546"
                          >
                            <>
                              Amet minim mollit non deserunt ullamco est sit
                              aliqua dolor do amet sint. Velit officia consequat
                              duis enim velit mollit. <br />
                              Exercitation veniam consequat sunt nostrud amet.
                              Amet minim mollit non deserunt ullamco est sit
                              aliqua dolor do amet sint. Velit officia consequat
                              duis enim velit mollit. Exercitation veniam
                              consequat sunt nostrud amet.
                            </>
                          </Text>
                        </div>
                        <div className="bg-white-A700 border border-gray-200 border-solid flex sm:flex-1 flex-col gap-[11.6px] items-start justify-start p-[23.19px] sm:px-5 rounded-[3px] w-[396px] sm:w-full">
                          <Img
                            className="h-[57px] md:h-auto object-cover w-[57px]"
                            src="images/img_rectangle729_4.png"
                            alt="rectangle729"
                          />
                          <Text
                            className="sm:text-[17.26px] md:text-[19.26px] text-[21.26px] text-blue_gray-900_03 text-center tracking-[0.43px] w-auto"
                            size="txtManropeSemiBold2126"
                          >
                            Savannah Nguyen
                          </Text>
                          <Text
                            className="text-[15.46px] text-blue_gray-900_03 tracking-[0.31px]"
                            size="txtManropeRegular1546"
                          >
                            <>
                              Amet minim mollit non deserunt ullamco est sit
                              aliqua dolor do amet sint. Velit officia consequat
                              duis enim velit mollit. Exercitation veniam
                              consequat sunt nostrud amet.
                              <br />
                              Amet minim mollit non deserunt ullamco est sit
                              aliqua dolor do amet sint. Velit officia consequat
                              duis enim velit mollit. Exercitation veniam
                              consequat sunt nostrud amet.
                            </>
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
            <PagerIndicator
              className="flex gap-[3.87px] h-[23px] items-center justify-center max-w-[1237px] py-[7.73px] w-full"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-gray-800 w-[7px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-gray-400_4c w-[7px]"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
        </div>
        <Footer className="bg-gray-800 flex font-causten items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomepagePage;
