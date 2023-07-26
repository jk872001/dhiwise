import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Radio,
  SelectBox,
  Text,
} from "components";
import CheckoutRowrectangle741 from "components/CheckoutRowrectangle741";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const buttonEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CheckoutPage = () => {
  const [buttonvalue, setButtonvalue] = React.useState("");
  const checkoutRowrectangle741PropList = [
    {
      productcolor: (
        <Text className="font-bold mt-[3px] text-gray-800 text-sm tracking-[0.28px]">
          <span className="text-gray-800 font-causten text-left">Color : </span>
          <span className="text-gray-600 font-causten text-left font-medium">
            Yellow
          </span>
        </Text>
      ),
      productname: (
        <Text className="font-bold text-gray-800 text-sm tracking-[0.28px]">
          <span className="text-gray-800 font-causten text-left">
            Blue Flower Print Crop Top{" "}
          </span>
          <span className="text-gray-600 font-causten text-left">x 1</span>
        </Text>
      ),
    },
    {
      productcolor: (
        <Text className="font-bold text-gray-800 text-sm tracking-[0.28px]">
          <span className="text-gray-800 font-causten text-left">Colour</span>
          <span className="text-gray-800 font-causten text-left"> : </span>
          <span className="text-gray-600 font-causten text-left font-medium">
            Levender
          </span>
        </Text>
      ),
      productprice: "$119.00",
      productimage: "images/img_rectangle741_63x63.png",
      productname: (
        <Text className="font-bold text-gray-800 text-sm tracking-[0.28px]">
          <span className="text-gray-800 font-causten text-left">
            Levender Hoodie{" "}
          </span>
          <span className="text-gray-600 font-causten text-left">x 2</span>
        </Text>
      ),
    },
    {
      productcolor: (
        <Text className="font-bold text-gray-800 text-sm tracking-[0.28px]">
          <span className="text-gray-800 font-causten text-left">Color : </span>
          <span className="text-gray-600 font-causten text-left font-medium">
            Black
          </span>
        </Text>
      ),
      productprice: "$123.00",
      productimage: "images/img_rectangle741_1.png",
      productname: (
        <Text className="font-bold text-gray-800 text-sm tracking-[0.28px]">
          <span className="text-gray-800 font-causten text-left">
            Black Sweatshirt{" "}
          </span>
          <span className="text-gray-600 font-causten text-left">x 2</span>
        </Text>
      ),
    },
  ];
  const [buttonfourteenvalue, setButtonfourteenvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row font-causten gap-[15px] items-center justify-start md:ml-[0] ml-[100px] mt-[23px] md:px-5 w-auto">
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
              Check Out
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-coresansc md:gap-5 items-start justify-start max-w-[1240px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[68%] md:w-full">
              <div className="flex flex-row font-coresansc gap-[15px] items-start justify-start w-[37%] md:w-full">
                <Line className="bg-deep_purple-A200 h-7 rounded-[3px] w-1.5" />
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 tracking-[0.56px]"
                  size="txtCoreSansC65Bold28Gray800"
                >
                  Check Out
                </Text>
              </div>
              <Text
                className="mt-[25px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                size="txtCoreSansC65Bold22"
              >
                Billing Details
              </Text>
              <div className="flex md:flex-col flex-row font-causten gap-[38px] items-center justify-start mt-[53px] w-[96%] md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start pb-[3px] w-[48%] md:w-full">
                  <Text
                    className="text-base text-gray-800 tracking-[0.32px]"
                    size="txtCaustenSemiBold16"
                  >
                    First Name*
                  </Text>
                  <Input
                    name="button_One"
                    placeholder="First Name"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                    wrapClassName="bg-gray-100 pb-3.5 pl-5 pr-[35px] pt-[17px] rounded-lg w-full"
                    type="text"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start pb-[3px] w-[48%] md:w-full">
                  <Text
                    className="text-base text-gray-800 tracking-[0.32px]"
                    size="txtCaustenSemiBold16"
                  >
                    Last Name*
                  </Text>
                  <Input
                    name="button_Two"
                    placeholder="Last Name"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                    wrapClassName="bg-gray-100 pb-3.5 pl-5 pr-[35px] pt-[17px] rounded-lg w-full"
                    type="text"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-causten gap-[38px] items-center justify-start mt-[25px] w-[96%] md:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start py-0.5 w-[48%] md:w-full">
                  <Text
                    className="text-base text-gray-800 tracking-[0.32px]"
                    size="txtCaustenSemiBold16"
                  >
                    Country / Region*
                  </Text>
                  <Input
                    name="button_Three"
                    placeholder="Country / Region"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                    wrapClassName="bg-gray-100 pb-3.5 pl-5 pr-[35px] pt-[17px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start py-0.5 w-[48%] md:w-full">
                  <Text
                    className="text-base text-gray-800 tracking-[0.32px]"
                    size="txtCaustenSemiBold16"
                  >
                    Company Name
                  </Text>
                  <Input
                    name="button_Four"
                    placeholder="Company (optional)"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                    wrapClassName="bg-gray-100 pb-3.5 pl-5 pr-[35px] pt-[17px] rounded-lg w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-causten gap-[38px] items-center justify-start mt-[25px] w-[96%] md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start pb-[3px] w-[48%] md:w-full">
                  <Text
                    className="text-base text-gray-800 tracking-[0.32px]"
                    size="txtCaustenSemiBold16"
                  >
                    Street Address*
                  </Text>
                  <Input
                    name="button_Five"
                    placeholder="House number and street name"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                    wrapClassName="bg-gray-100 pb-3.5 pl-5 pr-[35px] pt-[17px] rounded-lg w-full"
                    type="number"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start py-0.5 w-[48%] md:w-full">
                  <Text
                    className="text-base text-gray-800 tracking-[0.32px]"
                    size="txtCaustenSemiBold16"
                  >
                    Apt, suite, unit
                  </Text>
                  <Input
                    name="button_Six"
                    placeholder="apartment, suite, unit, etc. (optional)"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                    wrapClassName="bg-gray-100 pb-3.5 pl-5 pr-[35px] pt-[17px] rounded-lg w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-causten md:gap-5 items-center justify-start mt-[25px] w-[96%] md:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start py-0.5 w-[31%] md:w-full">
                  <Text
                    className="text-base text-gray-800 tracking-[0.32px]"
                    size="txtCaustenSemiBold16"
                  >
                    City*
                  </Text>
                  <Input
                    name="button_Seven"
                    placeholder="Town / City"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                    wrapClassName="bg-gray-100 pb-3.5 pl-5 pr-[35px] pt-[17px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start ml-8 md:ml-[0] w-[31%] md:w-full">
                  <Text
                    className="text-base text-gray-800 tracking-[0.32px]"
                    size="txtCaustenSemiBold16"
                  >
                    State*
                  </Text>
                  <SelectBox
                    className="bg-gray-100 leading-[normal] pl-5 sm:pr-5 pr-[23px] py-4 rounded-lg text-center text-gray-600 text-sm w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown_gray_800_20x20.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="button_Eight"
                    options={buttonEightOptionsList}
                    isSearchable={false}
                    placeholder="State"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[31px] pb-[3px] w-[31%] md:w-full">
                  <Text
                    className="text-base text-gray-800 tracking-[0.32px]"
                    size="txtCaustenSemiBold16"
                  >
                    Postal Code*
                  </Text>
                  <Input
                    name="button_Nine"
                    placeholder="Postal Code"
                    className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                    wrapClassName="bg-gray-100 pl-5 pr-[35px] py-[15px] rounded-lg w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col font-causten gap-2 items-start justify-start mt-[25px] pb-[3px] w-[46%] md:w-full">
                <Text
                  className="text-base text-gray-800 tracking-[0.32px]"
                  size="txtCaustenSemiBold16"
                >
                  Phone*
                </Text>
                <Input
                  name="button_Ten"
                  placeholder="Phone"
                  className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                  wrapClassName="bg-gray-100 pb-3.5 pl-5 pr-[35px] pt-[17px] rounded-lg w-full"
                  type="number"
                ></Input>
              </div>
              <div className="flex flex-col font-causten gap-5 items-start justify-start mt-10 w-[44%] md:w-full">
                <Button className="bg-deep_purple-A200 cursor-pointer font-medium leading-[normal] min-w-[195px] py-4 rounded-lg text-center text-lg text-white-A700">
                  Continue to delivery
                </Button>
                <CheckBox
                  className="leading-[normal] text-gray-800 text-left text-lg"
                  inputClassName="border border-gray-400 border-solid h-[18px] mr-[5px] rounded-sm w-[18px]"
                  name="savemyinformati_One"
                  id="savemyinformati_One"
                  label="Save my information for a faster checkout"
                ></CheckBox>
              </div>
              <Line className="bg-blue_gray-50 h-px mt-[30px] w-full" />
              <Text
                className="mt-[34px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                size="txtCoreSansC65Bold22"
              >
                Shipping Address
              </Text>
              <Text
                className="mt-[13px] text-base text-gray-800"
                size="txtCaustenRegular16"
              >
                Select the address that matches your card or payment method.
              </Text>
              <div className="bg-gray-100 flex flex-col font-causten items-center justify-start mt-[26px] p-7 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col gap-[25px] items-start justify-start mb-[7px] mt-2.5 w-auto md:w-full">
                  <Radio
                    value="SameasBillingaddress"
                    className="font-bold leading-[normal] text-gray-800 text-left text-xl"
                    inputClassName="mr-[5px]"
                    checked={false}
                    name="sameasbilling"
                    label="Same as Billing address"
                    id="SameasBillingaddress"
                  ></Radio>
                  <Line className="bg-gray-400 h-px w-full" />
                  <div className="md:h-6 h-[27px] relative w-[42%]">
                    <Img
                      className="absolute h-6 left-[0] top-[0]"
                      src="images/img_frame433.svg"
                      alt="frame433"
                    />
                    <Text
                      className="absolute bottom-[0] right-[0] text-gray-800 text-xl"
                      size="txtCaustenBold20"
                    >
                      Use a different shipping address
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-50 h-px mt-[30px] w-full" />
              <Text
                className="mt-[34px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                size="txtCoreSansC65Bold22"
              >
                Shipping Method
              </Text>
              <div className="bg-gray-100 flex flex-col font-causten items-center justify-start mt-[33px] p-[26px] sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col items-start justify-start my-[5px] pt-[3px] w-[98%] md:w-full">
                  <Text
                    className="text-gray-800 text-xl"
                    size="txtCaustenBold20"
                  >
                    Arrives by Monday, June 7
                  </Text>
                  <Line className="bg-gray-400 h-px ml-0.5 md:ml-[0] mt-[21px] w-full" />
                  <div className="flex flex-col gap-[9px] items-start justify-start mt-6 w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="text-gray-800 text-xl"
                        size="txtCaustenBold20"
                      >
                        Delivery Charges
                      </Text>
                      <Text
                        className="text-gray-800 text-xl"
                        size="txtCaustenBold20"
                      >
                        $5.00
                      </Text>
                    </div>
                    <Text
                      className="text-base text-gray-600"
                      size="txtCaustenMedium16"
                    >
                      Additional fess may apply
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-50 h-px mt-[30px] w-full" />
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[788px] md:mt-0 mt-[61px] p-[21px] sm:px-5 shadow-bs2 w-[33%] md:w-full">
              <div className="flex flex-col items-center justify-start my-[18px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                    size="txtCoreSansC65Bold24"
                  >
                    Order Summary
                  </Text>
                  <List
                    className="flex flex-col font-causten gap-[15px] items-center mt-[29px] w-full"
                    orientation="vertical"
                  >
                    {checkoutRowrectangle741PropList.map((props, index) => (
                      <React.Fragment key={`CheckoutRowrectangle741${index}`}>
                        <CheckoutRowrectangle741
                          className="flex flex-1 flex-row gap-[15px] items-center justify-between pr-1.5 w-full"
                          {...props}
                        />
                        {index < checkoutRowrectangle741PropList.length - 1 && (
                          <Line className="self-center h-px bg-blue_gray-50 w-full" />
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                  <div className="flex flex-row font-causten items-center justify-between mt-[30px] w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[0.36px]"
                      size="txtCaustenBold18Black900"
                    >
                      <span className="text-gray-800 font-causten text-left font-bold">
                        Subtotal
                      </span>
                      <span className="text-black-900 font-causten text-left font-bold">
                        {" "}
                      </span>
                      <span className="text-gray-600 font-causten text-left font-medium">
                        ( 3 items )
                      </span>
                    </Text>
                    <Text
                      className="text-gray-800 text-lg tracking-[0.36px]"
                      size="txtCaustenBold18Gray800"
                    >
                      $513.00
                    </Text>
                  </div>
                  <div className="flex flex-row font-causten items-start justify-between mt-[15px] w-full">
                    <Text
                      className="text-gray-800 text-lg tracking-[0.36px]"
                      size="txtCaustenBold18Gray800"
                    >
                      Savings
                    </Text>
                    <Text
                      className="text-gray-800 text-lg tracking-[0.36px]"
                      size="txtCaustenBold18Gray800"
                    >
                      -$30.00
                    </Text>
                  </div>
                  <div className="flex flex-row font-causten items-start justify-between mt-[33px] w-full">
                    <Text
                      className="text-gray-800 text-lg tracking-[0.36px]"
                      size="txtCaustenBold18Gray800"
                    >
                      Shipping
                    </Text>
                    <Text
                      className="text-gray-800 text-lg tracking-[0.36px]"
                      size="txtCaustenBold18Gray800"
                    >
                      -$5.00
                    </Text>
                  </div>
                  <div className="flex flex-row font-causten items-center justify-between mt-[38px] w-full">
                    <Text
                      className="text-gray-800 text-lg tracking-[0.36px]"
                      size="txtCaustenBold18Gray800"
                    >
                      Total
                    </Text>
                    <Text
                      className="text-gray-800 text-lg tracking-[0.36px]"
                      size="txtCaustenBold18Gray800"
                    >
                      $478.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[100px] mt-[34px] text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
            size="txtCoreSansC65Bold22"
          >
            Payment Method
          </Text>
          <Text
            className="md:ml-[0] ml-[100px] mt-[13px] text-base text-gray-800"
            size="txtCaustenRegular16"
          >
            All transactions are secure and encrypted.
          </Text>
          <div className="bg-gray-100 flex flex-col font-causten items-center justify-start md:ml-[0] ml-[100px] mr-[500px] mt-[26px] p-7 md:px-5 rounded-[12px] w-[59%] md:w-full">
            <div className="flex flex-col gap-[29px] items-start justify-start mb-[13px] mt-[17px] w-[98%] md:w-full">
              <div className="flex flex-row gap-[19px] items-center justify-start w-[35%] md:w-full">
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_eye.svg"
                  alt="eye"
                />
                <div className="flex flex-col gap-[5px] items-start justify-start">
                  <Text
                    className="text-gray-800 text-xl"
                    size="txtCaustenBold20"
                  >
                    Credit Card
                  </Text>
                  <Text
                    className="text-base text-gray-800"
                    size="txtCaustenRegular16"
                  >
                    We accept all major credit cards.
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start md:ml-[0] ml-[37px] w-1/2 md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-3.5 rounded-lg w-[22%] sm:w-full">
                  <Img
                    className="h-4"
                    src="images/img_googlepay.svg"
                    alt="googlepay"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-4 rounded-lg w-[22%] sm:w-full">
                  <Img
                    className="h-3"
                    src="images/img_signal_indigo_500.svg"
                    alt="signal"
                  />
                </div>
                <Img
                  className="h-[46px]"
                  src="images/img_frame442.svg"
                  alt="frame442"
                />
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[13px] rounded-lg w-[22%] sm:w-full">
                  <Img
                    className="h-3.5"
                    src="images/img_paypass.svg"
                    alt="paypass"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[37px] w-[93%] md:w-full">
                <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <Input
                      name="button_Eleven"
                      placeholder="Card number"
                      className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                      wrapClassName="border border-gray-800 border-solid sm:flex-1 pl-5 pr-[35px] py-[15px] rounded-lg sm:w-full"
                      type="number"
                    ></Input>
                    <Input
                      name="button_Twelve"
                      placeholder="Name of card"
                      className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                      wrapClassName="border border-gray-800 border-solid sm:flex-1 pb-4 pl-5 pr-[35px] pt-[19px] rounded-lg sm:w-full"
                      type="text"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <Input
                      name="button_Thirteen"
                      placeholder="Expiration date (MM/YY)"
                      className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-center text-gray-600 text-sm w-full"
                      wrapClassName="border border-gray-800 border-solid md:flex-1 pb-4 pl-5 pr-[35px] pt-[19px] rounded-lg md:w-full"
                    ></Input>
                    <Input
                      name="button_Fourteen"
                      placeholder="Security Code"
                      value={buttonfourteenvalue}
                      onChange={(e) => setButtonfourteenvalue(e)}
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-center text-gray-600 text-sm w-full"
                      wrapClassName="border border-gray-800 border-solid flex md:flex-1 px-5 py-[15px] rounded-lg w-[337px] md:w-full"
                      suffix={
                        buttonfourteenvalue?.length > 0 ? (
                          <CloseSVG
                            className="mt-auto mb-px cursor-pointer h-5 ml-[35px]"
                            onClick={() => setButtonfourteenvalue("")}
                            fillColor="#807d7e"
                            height={20}
                            width={20}
                            viewBox="0 0 20 20"
                          />
                        ) : (
                          <Img
                            className="mt-auto mb-px cursor-pointer h-5 ml-[35px]"
                            src="images/img_search_gray_600.svg"
                            alt="search"
                          />
                        )
                      }
                    ></Input>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-400 h-px w-full" />
              <div className="flex flex-row gap-[19px] items-center justify-start w-[35%] md:w-full">
                <div className="border border-gray-800 border-solid h-[18px] rounded-[50%] w-[18px]"></div>
                <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                  <Text
                    className="text-gray-800 text-xl"
                    size="txtCaustenBold20"
                  >
                    Cash on delivery
                  </Text>
                  <Text
                    className="mt-1 text-base text-gray-800"
                    size="txtCaustenRegular16"
                  >
                    Pay with cash upon delivery.
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-400 h-px w-full" />
              <div className="md:h-6 h-[27px] md:pr-10 sm:pr-5 pr-[72px] relative w-[42%]">
                <Img
                  className="absolute h-6 left-[0] top-[0]"
                  src="images/img_frame433.svg"
                  alt="frame433_One"
                />
                <Text
                  className="absolute bottom-[0] left-[12%] text-gray-800 text-xl"
                  size="txtCaustenBold20"
                >
                  Paypol
                </Text>
              </div>
            </div>
          </div>
          <Button className="bg-deep_purple-A200 cursor-pointer font-causten font-medium leading-[normal] min-w-[108px] md:ml-[0] ml-[100px] mr-[1232px] mt-[50px] py-4 rounded-lg text-center text-lg text-white-A700">
            Pay Now
          </Button>
          <Footer className="bg-gray-800 flex font-causten items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
