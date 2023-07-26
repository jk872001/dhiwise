import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContactDetailsPage = () => {
  const [buttonvalue, setButtonvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-causten items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[101px] mt-[23px] md:px-5 w-auto">
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
              Personal Info
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-coresansc gap-10 items-start justify-start md:ml-[0] ml-[101px] mt-[50px] md:px-5 w-[32%] md:w-full">
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
          <div className="flex flex-row font-coresansc items-start justify-between md:ml-[0] ml-[101px] mt-[19px] md:px-5 w-[36%] md:w-full">
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
              Contact Details
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-causten md:gap-10 items-center justify-between max-w-[1202px] mt-[35px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-7 items-start justify-start w-[10%] md:w-full">
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
            <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-3/4 md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                  <Text
                    className="text-gray-600 text-lg"
                    size="txtCaustenSemiBold18Gray600"
                  >
                    Your Name
                  </Text>
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="text-gray-800 text-lg"
                      size="txtCaustenSemiBold18Gray800"
                    >
                      Jhanvi Shah
                    </Text>
                    <Text
                      className="text-gray-800 text-lg"
                      size="txtCaustenSemiBold18Gray800"
                    >
                      Change
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-50 h-px w-full" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-causten gap-[50px] items-start justify-start max-w-[1239px] mt-[18px] mx-auto md:px-5 w-full">
            <div className="h-11 relative w-[24%] md:w-full">
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
            <div className="flex md:flex-1 flex-col items-center justify-start w-[73%] md:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="text-gray-600 text-lg"
                  size="txtCaustenSemiBold18Gray600"
                >
                  Email Address
                </Text>
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-gray-800 text-lg"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    Jhanvi@gmail.com
                  </Text>
                  <Text
                    className="text-gray-800 text-lg"
                    size="txtCaustenSemiBold18Gray800"
                  >
                    Change
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-causten md:gap-10 items-center justify-between max-w-[1202px] mt-[11px] mx-auto md:px-5 w-full">
            <div className="flex flex-row gap-[15px] items-start justify-start">
              <Img
                className="h-[22px] mb-0.5 w-[22px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
              <a href="javascript:" className="mt-0.5 text-gray-600 text-lg">
                <Text size="txtCaustenSemiBold18Gray600">Sign out</Text>
              </a>
            </div>
            <Line className="bg-blue_gray-50 h-px mb-3.5 md:mt-0 mt-[9px] w-3/4" />
          </div>
          <div className="flex flex-col font-causten items-center justify-start md:ml-[0] ml-[445px] mt-1 md:px-5 w-[63%] md:w-full">
            <div className="flex flex-col gap-[7px] items-start justify-start w-full">
              <Text
                className="text-gray-600 text-lg"
                size="txtCaustenSemiBold18Gray600"
              >
                Phone Number
              </Text>
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtCaustenSemiBold18Gray800"
                >
                  8980252445
                </Text>
                <Text
                  className="text-gray-800 text-lg"
                  size="txtCaustenSemiBold18Gray800"
                >
                  Change
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-50 h-px md:ml-[0] ml-[445px] mr-[101px] mt-5 w-[63%]" />
          <div className="flex flex-col font-causten items-center justify-start md:ml-[0] ml-[445px] mt-[19px] md:px-5 w-[63%] md:w-full">
            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
              <Text
                className="text-gray-600 text-lg"
                size="txtCaustenSemiBold18Gray600"
              >
                Password
              </Text>
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <Img
                  className="h-1"
                  src="images/img_group17408.svg"
                  alt="group17408"
                />
                <Text
                  className="text-gray-800 text-lg"
                  size="txtCaustenSemiBold18Gray800"
                >
                  Change
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-50 h-px md:ml-[0] ml-[445px] mr-[101px] mt-[18px] w-[63%]" />
          <div className="flex flex-row sm:gap-10 items-start justify-between max-w-[894px] mt-[29px] mx-auto md:px-5 w-full">
            <Text
              className="mb-[3px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
              size="txtCoreSansC65Bold22"
            >
              Address
            </Text>
            <Text
              className="mt-[3px] text-gray-800 text-lg"
              size="txtCaustenSemiBold18Gray800"
            >
              Add New
            </Text>
          </div>
          <div className="flex flex-col font-causten items-center justify-start md:ml-[0] ml-[445px] mt-8 md:px-5 w-[63%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[25px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                    <Text
                      className="text-gray-800 text-xl"
                      size="txtCaustenSemiBold20"
                    >
                      Jhanvi shah
                    </Text>
                    <Text
                      className="mt-[19px] text-base text-gray-600"
                      size="txtCaustenMedium16"
                    >
                      8980252445
                    </Text>
                    <Text
                      className="mt-[18px] text-base text-gray-600"
                      size="txtCaustenMedium16"
                    >
                      <>
                        1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                        <br />
                        derasar, Vijaynagar road{" "}
                      </>
                    </Text>
                    <div className="flex flex-row gap-3 items-center justify-center mt-[23px] w-auto">
                      <Button className="border border-gray-600 border-solid cursor-pointer font-medium leading-[normal] min-w-[79px] py-1.5 rounded-lg text-base text-center text-gray-600">
                        Home
                      </Button>
                      <Button className="border border-gray-600 border-solid cursor-pointer font-medium leading-[normal] min-w-[192px] py-1.5 rounded-lg text-base text-center text-gray-600">
                        Default billing address
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start mt-5 w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtCaustenSemiBold16"
                      >
                        Remove
                      </Text>
                      <Line className="bg-blue_gray-100 h-[19px] rounded-[1px] w-px" />
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtCaustenSemiBold16"
                      >
                        Edit
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                    <Text
                      className="text-gray-800 text-xl"
                      size="txtCaustenSemiBold20"
                    >
                      Jhanvi shah
                    </Text>
                    <Text
                      className="mt-[19px] text-base text-gray-600"
                      size="txtCaustenMedium16"
                    >
                      8980252445
                    </Text>
                    <Text
                      className="mt-[18px] text-base text-gray-600"
                      size="txtCaustenMedium16"
                    >
                      <>
                        1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                        <br />
                        derasar, Vijaynagar road{" "}
                      </>
                    </Text>
                    <div className="flex flex-row gap-3 items-center justify-center mt-[23px] w-auto">
                      <Button className="border border-gray-600 border-solid cursor-pointer font-medium leading-[normal] min-w-[79px] py-1.5 rounded-lg text-base text-center text-gray-600">
                        Home
                      </Button>
                      <Button className="border border-gray-600 border-solid cursor-pointer font-medium leading-[normal] min-w-[210px] py-1.5 rounded-lg text-base text-center text-gray-600">
                        Default shipping address
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start mt-5 w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtCaustenSemiBold16"
                      >
                        Remove
                      </Text>
                      <Line className="bg-blue_gray-100 h-[19px] rounded-[1px] w-px" />
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtCaustenSemiBold16"
                      >
                        Edit
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                    <Text
                      className="text-gray-800 text-xl"
                      size="txtCaustenSemiBold20"
                    >
                      Jhanvi shah
                    </Text>
                    <Text
                      className="mt-[19px] text-base text-gray-600"
                      size="txtCaustenMedium16"
                    >
                      8980252445
                    </Text>
                    <Text
                      className="mt-[18px] text-base text-gray-600"
                      size="txtCaustenMedium16"
                    >
                      <>
                        1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                        <br />
                        derasar, Vijaynagar road{" "}
                      </>
                    </Text>
                    <div className="flex flex-col items-center justify-center mt-[23px] w-auto">
                      <Button className="border border-gray-600 border-solid cursor-pointer font-medium leading-[normal] min-w-[81px] py-1.5 rounded-lg text-base text-center text-gray-600">
                        Office
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start mt-5 w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtCaustenSemiBold16"
                      >
                        Remove
                      </Text>
                      <Line className="bg-blue_gray-100 h-[19px] rounded-[1px] w-px" />
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtCaustenSemiBold16"
                      >
                        Edit
                      </Text>
                      <Line className="bg-blue_gray-100 h-[19px] rounded-[1px] w-px" />
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtCaustenSemiBold16"
                      >
                        Set as default
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                    <Text
                      className="text-gray-800 text-xl"
                      size="txtCaustenSemiBold20"
                    >
                      Jhanvi shah
                    </Text>
                    <Text
                      className="mt-[19px] text-base text-gray-600"
                      size="txtCaustenMedium16"
                    >
                      8980252445
                    </Text>
                    <Text
                      className="mt-[18px] text-base text-gray-600"
                      size="txtCaustenMedium16"
                    >
                      <>
                        1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                        <br />
                        derasar, Vijaynagar road{" "}
                      </>
                    </Text>
                    <div className="flex flex-col items-center justify-center mt-[23px] w-auto">
                      <Button className="border border-gray-600 border-solid cursor-pointer font-medium leading-[normal] min-w-[88px] py-1.5 rounded-lg text-base text-center text-gray-600">
                        Home2
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start mt-5 w-auto">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtCaustenSemiBold16"
                      >
                        Remove
                      </Text>
                      <Line className="bg-blue_gray-100 h-[19px] rounded-[1px] w-px" />
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtCaustenSemiBold16"
                      >
                        Edit
                      </Text>
                      <Line className="bg-blue_gray-100 h-[19px] rounded-[1px] w-px" />
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtCaustenSemiBold16"
                      >
                        Set as default
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer1 className="bg-gray-800 flex font-causten items-center justify-center mr-0.5 mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactDetailsPage;
