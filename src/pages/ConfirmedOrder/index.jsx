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

const ConfirmedOrderPage = () => {
  const [buttonvalue, setButtonvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-causten gap-[19px] items-center justify-start mx-auto w-full">
        <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="md:h-[459px] h-[726px] max-w-[967px] mx-auto p-[107px] md:px-5 relative w-full">
          <div className="absolute md:h-[459px] h-[511px] inset-[0] justify-center m-auto w-[73%] md:w-full">
            <div className="absolute md:h-[459px] h-[511px] inset-[0] justify-center m-auto w-full">
              <div className="absolute md:h-[459px] h-[511px] inset-[0] justify-center m-auto w-full">
                <div className="absolute md:h-[459px] h-[511px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bottom-[0] md:h-[140px] h-[461px] left-[0] w-[45%]">
                    <div className="absolute h-[461px] inset-[0] justify-center m-auto w-[98%]">
                      <Img
                        className="h-[171px] mb-[-54.36px] ml-[37px] z-[1]"
                        src="images/img_vector_white_a700_171x155.svg"
                        alt="vector_Five"
                      />
                      <Img
                        className="h-[173px] mb-[undefinedpx] ml-9 z-[1]"
                        src="images/img_vector_gray_800_173x157.svg"
                        alt="vector_Six"
                      />
                      <div className="h-[343px] md:h-[NaNpx] mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
                        <div className="absolute bottom-[0] md:h-[148px] h-[260px] inset-x-[0] mx-auto w-[99%]">
                          <div className="absolute h-[148px] right-[0] top-[0] w-[51%]">
                            <Img
                              className="h-[145px] m-auto"
                              src="images/img_vector_white_a700_145x149.svg"
                              alt="vector"
                            />
                            <Img
                              className="absolute h-[148px] inset-[0] justify-center m-auto"
                              src="images/img_vector_gray_800_148x152.svg"
                              alt="vector_One"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[0] h-[118px] left-[0]"
                            src="images/img_vector_gray_800_118x200.svg"
                            alt="vector_Two"
                          />
                          <Img
                            className="absolute bottom-[0] h-[121px] left-[0]"
                            src="images/img_vector_gray_800_121x202.svg"
                            alt="vector_Three"
                          />
                        </div>
                        <Img
                          className="absolute h-72 left-[0] top-[0]"
                          src="images/img_vector_deep_purple_a200.svg"
                          alt="vector_Four"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute h-[140px] left-[23%] top-[11%]"
                      src="images/img_vector_white_a700_140x88.svg"
                      alt="vector_Seven"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat md:h-10 h-[199px] p-[7px] right-[0] top-[11%] w-[78%]"
                      style={{
                        backgroundImage: "url('images/img_group39.svg')",
                      }}
                    >
                      <div className="flex flex-col h-full items-center justify-start ml-[17px] w-[29%]">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Img
                            className="h-[33px] mt-[7px] w-[33px]"
                            src="images/img_refresh.svg"
                            alt="refresh"
                          />
                          <Img
                            className="h-[33px] mb-[7px] w-[33px]"
                            src="images/img_refresh.svg"
                            alt="refresh_One"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute h-1 left-[23%] top-[12%]"
                        src="images/img_vector_gray_800_4x7.svg"
                        alt="vector_Eight"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute h-[84px] left-[4%] top-[30%]"
                    src="images/img_vector.svg"
                    alt="vector_Nine"
                  />
                  <Img
                    className="absolute h-[87px] left-[3%] top-[30%]"
                    src="images/img_vector_gray_800.svg"
                    alt="vector_Ten"
                  />
                  <Img
                    className="absolute h-[459px] right-[0] top-[0]"
                    src="images/img_vector_white_a700_459x409.svg"
                    alt="vector_Eleven"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col gap-[41px] h-[462px] justify-start p-5 right-[0] top-[0] w-[59%]"
                    style={{ backgroundImage: "url('images/img_group38.svg')" }}
                  >
                    <div className="h-[17px] md:ml-[0] ml-[346px] relative w-[17px]">
                      <Img
                        className="h-[17px] m-auto w-[17px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Img
                        className="absolute h-[17px] inset-[0] justify-center m-auto w-[17px]"
                        src="images/img_vector_blue_gray_100.svg"
                        alt="vector_Twelve"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[31px] md:ml-[0] ml-[105px] mr-16 w-[54%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col gap-[34px] items-start justify-start w-[15%]">
                          <Img
                            className="h-5"
                            src="images/img_vector_blue_gray_100_20x29.svg"
                            alt="vector_Thirteen"
                          />
                          <Img
                            className="h-0.5"
                            src="images/img_vector_blue_gray_100_2x26.svg"
                            alt="vector_Fourteen"
                          />
                          <Img
                            className="h-5"
                            src="images/img_checkmark_blue_gray_100.svg"
                            alt="checkmark_One"
                          />
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[125px] items-center justify-end p-[18px] w-[125px]"
                          style={{
                            backgroundImage: "url('images/img_group40.svg')",
                          }}
                        >
                          <Img
                            className="h-[66px] mb-[5px] mt-4"
                            src="images/img_checkmark_deep_purple_a200.svg"
                            alt="checkmark_Two"
                          />
                        </div>
                        <div className="flex flex-col gap-[34px] items-start justify-start w-[15%]">
                          <Img
                            className="h-5"
                            src="images/img_checkmark_blue_gray_100_20x29.svg"
                            alt="checkmark_Three"
                          />
                          <Img
                            className="h-0.5 ml-0.5 md:ml-[0]"
                            src="images/img_vector_blue_gray_100_2x26.svg"
                            alt="vector_Fifteen"
                          />
                          <Img
                            className="h-5"
                            src="images/img_vector_20x29.svg"
                            alt="vector_Sixteen"
                          />
                        </div>
                      </div>
                      <Text
                        className="leading-[111.20%] mt-[55px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-800"
                        size="txtCoreSansC65Bold30"
                      >
                        <>
                          Your Order is
                          <br />
                          Confirmed
                        </>
                      </Text>
                      <Button className="bg-deep_purple-A200 cursor-pointer font-causten font-medium leading-[normal] min-w-[190px] mt-[30px] py-4 rounded-lg text-center text-lg text-white-A700">
                        Continue Shopping
                      </Button>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[68px] inset-y-[0] left-[39%] my-auto"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Img
                  className="absolute h-[70px] inset-y-[0] left-[39%] my-auto"
                  src="images/img_location.svg"
                  alt="location"
                />
              </div>
              <Img
                className="absolute bottom-[20%] h-[180px] left-[7%]"
                src="images/img_vector_white_a700_180x225.svg"
                alt="vector_Seventeen"
              />
              <Img
                className="absolute bottom-[20%] h-[183px] left-[7%]"
                src="images/img_vector_gray_800_183x228.svg"
                alt="vector_Eighteen"
              />
            </div>
            <Img
              className="absolute h-[3px] left-[10%] top-[26%]"
              src="images/img_vector_white_a700_3x29.svg"
              alt="vector_Nineteen"
            />
            <Img
              className="absolute h-[5px] left-[9%] top-1/4"
              src="images/img_vector_gray_800_5x31.svg"
              alt="vector_Twenty"
            />
            <Img
              className="absolute h-[97px] left-[8%] top-[9%]"
              src="images/img_vector_gray_800_97x76.svg"
              alt="vector_TwentyOne"
            />
            <Img
              className="absolute h-[99px] left-[8%] top-[9%]"
              src="images/img_signal.svg"
              alt="signal"
            />
          </div>
          <Img
            className="absolute h-10 left-[20%] top-[32%]"
            src="images/img_vector_white_a700.svg"
            alt="vector_TwentyTwo"
          />
          <Img
            className="absolute h-[42px] left-[20%] top-[32%]"
            src="images/img_refresh_gray_800.svg"
            alt="refresh_Two"
          />
          <Img
            className="absolute h-[43px] inset-y-[0] left-[18%] my-auto"
            src="images/img_reply.svg"
            alt="reply"
          />
        </div>
        <Footer className="bg-gray-800 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ConfirmedOrderPage;
