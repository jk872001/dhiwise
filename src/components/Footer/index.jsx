import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";

const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mx-auto my-[59px] pb-1 w-[85%]">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
              <div className="flex flex-col gap-[5px] justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-6 items-start justify-end pt-[17px] w-[14%] md:w-full">
                    <Text
                      className="sm:text-[24.58px] md:text-[26.58px] text-[28.58px] text-gray-100"
                      size="txtCaustenBold2858"
                    >
                      Need Help
                    </Text>
                    <ul className="flex flex-col gap-[21px] items-start justify-end py-1.5 w-full common-column-list">
                      <li>
                        <Text
                          className="mt-[3px] text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Contact Us
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Track Order
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Returns & Refunds
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          <>FAQ&#39;s</>
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Career
                        </Text>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-6 items-start justify-end pt-[17px] w-[12%] md:w-full">
                    <Text
                      className="sm:text-[24.58px] md:text-[26.58px] text-[28.58px] text-gray-100"
                      size="txtCaustenBold2858"
                    >
                      Company
                    </Text>
                    <ul className="flex flex-col gap-[23px] items-start justify-end py-1.5 md:w-full common-column-list">
                      <li>
                        <Text
                          className="mt-[3px] text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          About Us
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          euphoria Blog
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          euphoriastan
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Collaboration
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Media
                        </Text>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[26px] items-start justify-start pt-[15px] w-[16%] md:w-full">
                    <Text
                      className="sm:text-[24.58px] md:text-[26.58px] text-[28.58px] text-gray-100"
                      size="txtCaustenBold2858"
                    >
                      More Info
                    </Text>
                    <ul className="flex flex-col gap-[23px] items-start justify-end py-[5px] w-full common-column-list">
                      <li>
                        <Text
                          className="mt-1 text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Term and Conditions
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Privacy Policy
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Shipping Policy
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Sitemap
                        </Text>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[26px] items-start justify-start pt-[15px] w-[38%] md:w-full">
                    <Text
                      className="sm:text-[24.58px] md:text-[26.58px] text-[28.58px] text-gray-100"
                      size="txtCaustenBold2858"
                    >
                      Location
                    </Text>
                    <ul className="flex flex-col gap-[22px] items-start justify-end py-[5px] w-full common-column-list">
                      <li>
                        <Text
                          className="mt-1.5 text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          support@euphoria.in
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          Eklingpura Chouraha, Ahmedabad Main Road
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-gray-100 text-lg"
                          size="txtCaustenMedium18Gray100"
                        >
                          (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                        </Text>
                      </li>
                    </ul>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[665px] sm:text-[24.58px] md:text-[26.58px] text-[28.58px] text-gray-100"
                  size="txtCaustenBold2858"
                >
                  Download The App{" "}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-7 w-[82%] md:w-full">
              <div className="flex flex-row gap-[9.97px] items-start justify-start w-auto">
                <Button className="bg-gray-100 flex h-[37px] items-center justify-center p-[9px] rounded-[10px] w-[37px]">
                  <Img src="images/img_facebook.svg" alt="facebook" />
                </Button>
                <Button className="bg-gray-100 flex h-[37px] items-center justify-center p-2.5 rounded-[10px] w-[37px]">
                  <Img
                    className="h-[15px]"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                </Button>
                <Button className="bg-gray-100 flex h-[37px] items-center justify-center p-[7px] rounded-[10px] w-[37px]">
                  <Img src="images/img_twitter.svg" alt="twitter" />
                </Button>
                <Button className="bg-gray-100 cursor-pointer font-bold font-roboto h-[37px] py-2 rounded-[10px] text-[17.09px] text-blue_gray-900_01 text-center tracking-[0.34px] w-[37px]">
                  in
                </Button>
              </div>
              <div className="flex flex-row gap-[22px] items-center justify-between w-[34%] sm:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[51px] items-start justify-end p-1.5 w-[47%]"
                  style={{
                    backgroundImage: "url('images/img_group_gray_800_01.svg')",
                  }}
                >
                  <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[91%] md:w-full">
                    <Img
                      className="h-8"
                      src="images/img_group.svg"
                      alt="group_Two"
                    />
                    <div className="flex flex-col items-start justify-start ml-[3px]">
                      <Text
                        className="md:ml-[0] ml-[7px] text-[10px] text-white-A700"
                        size="txtCaustenRegular10"
                      >
                        android app on
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] text-lg text-white-A700"
                        size="txtCaustenRegular18WhiteA700"
                      >
                        Google Play
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[51px] items-start justify-end p-[5px] w-[47%]"
                  style={{
                    backgroundImage: "url('images/img_group_gray_800_01.svg')",
                  }}
                >
                  <div className="flex flex-row gap-[22px] items-start justify-start md:ml-[0] ml-[3px] mt-[3px] w-[84%] md:w-full">
                    <Img
                      className="h-[31px]"
                      src="images/img_mobile.svg"
                      alt="mobile"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="ml-0.5 md:ml-[0] text-[10px] text-white-A700"
                        size="txtCaustenRegular10"
                      >
                        Available on the
                      </Text>
                      <Text
                        className="mt-[3px] text-lg text-white-A700"
                        size="txtCaustenRegular18WhiteA700"
                      >
                        App Store
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[42px] w-full">
              <Line className="bg-gray-400_7e h-px w-full" />
              <SelectBox
                className="border-b border-gray-400_7e font-bold font-causten mt-[25px] pb-[23px] pl-[35px] pr-8 sm:px-5 sm:text-[24.58px] md:text-[26.58px] text-[28.58px] text-gray-100 text-left w-full"
                placeholderClassName="text-gray-100"
                indicator={
                  <Img
                    className="h-[7px] mr-[0] outline-gray-100 outline-[1px] outline w-4 rounded-[1px]"
                    src="images/img_arrowdown_gray_100.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="groupSeventy"
                options={popularCategoriesOptionsList}
                isSearchable={false}
                placeholder="Popular Categories"
              />
              <Text
                className="mt-[45px] text-lg text-white-A700"
                size="txtCaustenBold18"
              >
                Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
