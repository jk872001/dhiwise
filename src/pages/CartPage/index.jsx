import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import CartPageCartproduct from "components/CartPageCartproduct";
import CartPageRowicon from "components/CartPageRowicon";
import Footer1 from "components/Footer1";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const popularCategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CartPagePage = () => {
  const tableData = React.useRef([
    {
      productdetails: "Size : M",
      price: "$29.00",
      quantity: "images/img_plus.svg",
      shipping: "FREE",
      subtotal: "$29.00",
      action: "images/img_trash.svg",
    },
    {
      productdetails: "Size : XXL",
      price: "$119.00",
      quantity: "images/img_plus.svg",
      shipping: "FREE",
      subtotal: "$119.00",
      action: "images/img_trash.svg",
    },
    {
      productdetails: "Size : XXL",
      price: "$123.00",
      quantity: "images/img_plus.svg",
      shipping: "$5.00",
      subtotal: "$123.00",
      action: "images/img_trash.svg",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("productdetails", {
        cell: (info) => (
          <CartPageCartproduct className="flex sm:flex-col flex-row gap-5 items-center justify-center p-[15px]" />
        ),
        header: (info) => (
          <Text
            className="min-w-[502px] sm:px-5 px-[35px] py-[26px] text-center text-lg text-white-A700 uppercase"
            size="txtCaustenSemiBold18WhiteA700"
          >
            Product Details
          </Text>
        ),
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <Text
            className="pl-[5px] py-[35px] text-gray-800 text-lg"
            size="txtCaustenBold18Gray800"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[160px] py-[27px] text-lg text-white-A700 uppercase"
            size="txtCaustenSemiBold18WhiteA700"
          >
            Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center md:pr-10 sm:pr-5 pr-[57px] py-[57px]">
            <CartPageRowicon className="bg-gray-100 flex flex-row items-center justify-center mr-[55px] mt-[55px] p-2.5 rounded-[12px] w-[65%]" />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[212px] pl-2 py-[27px] text-center text-lg text-white-A700 uppercase"
            size="txtCaustenSemiBold18WhiteA700"
          >
            Quantity
          </Text>
        ),
      }),
      tableColumnHelper.accessor("shipping", {
        cell: (info) => (
          <Text
            className="pl-[18px] py-[35px] text-gray-400 text-lg tracking-[0.36px]"
            size="txtCaustenBold18Gray400"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[197px] py-[27px] text-lg text-white-A700 uppercase"
            size="txtCaustenSemiBold18WhiteA700"
          >
            shipping
          </Text>
        ),
      }),
      tableColumnHelper.accessor("subtotal", {
        cell: (info) => (
          <Text
            className="pl-[15px] py-[35px] text-gray-800 text-lg"
            size="txtCaustenBold18Gray800"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[206px] py-[27px] text-lg text-white-A700 uppercase"
            size="txtCaustenSemiBold18WhiteA700"
          >
            subtotal
          </Text>
        ),
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-6 sm:px-5">
            <Img
              className="h-[18px] mb-[42px] mt-[97px]"
              alt="trash"
              src="info?.getValue()"
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[163px] py-[27px] text-lg text-white-A700 uppercase"
            size="txtCaustenSemiBold18WhiteA700"
          >
            action
          </Text>
        ),
      }),
    ];
  }, []);

  const [buttonvalue, setButtonvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-causten gap-[50px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="border-b border-gray-400 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[100px] md:px-5 w-[34%] md:w-full">
          <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
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
              className="text-gray-800 text-lg w-auto"
              size="txtCaustenMedium18"
            >
              Add To Cart
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-gray-600 text-sm tracking-[0.28px]"
              size="txtCaustenRegular14"
            >
              Please fill in the fields below and click place order to complete
              your purchase!
            </Text>
            <Text
              className="mt-1 text-gray-600 text-sm tracking-[0.28px]"
              size="txtCaustenMedium14Gray600"
            >
              <span className="text-gray-600 font-causten text-left font-normal">
                Already registered?
              </span>
              <span className="text-gray-600 font-causten text-left font-medium">
                {" "}
              </span>
              <span className="text-deep_purple-A200 font-causten text-left font-semibold">
                Please login here
              </span>
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-center w-full">
          <div className="overflow-auto md:px-5 w-full">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={"border-b border-gray-400"}
              headerClass="bg-gray-800"
            />
          </div>
          <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[98px] md:mt-0 mt-[29px] md:px-5 w-[27%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtCaustenSemiBold24"
              >
                Discount Codes
              </Text>
              <Text
                className="mt-2.5 text-base text-gray-600"
                size="txtCaustenRegular16Gray600"
              >
                Enter your coupon code if you have one
              </Text>
              <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-end justify-start mt-[37px] md:pl-10 sm:pl-5 pl-[214px] rounded-[12px] w-full">
                <Button className="bg-deep_purple-A200 border border-gray-400 border-solid cursor-pointer font-semibold leading-[normal] min-w-[161px] py-[11px] rounded-br-[12px] rounded-tr-[12px] text-base text-center text-white-A700">
                  Apply Coupon
                </Button>
              </div>
              <Button className="bg-white-A700 border border-gray-400 border-solid cursor-pointer font-semibold leading-[normal] mt-[37px] py-[11px] rounded-lg text-base text-center text-gray-800 w-[232px]">
                Continue Shopping
              </Button>
            </div>
            <div className="bg-gray-100_03 flex md:flex-1 flex-col gap-[49px] items-center justify-start mr-[99px] md:px-5 py-[39px] w-[33%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[61%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                      size="txtCaustenMedium22Gray800"
                    >
                      Sub Total{" "}
                    </Text>
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                      size="txtCaustenMedium22Gray800"
                    >
                      $513.00
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-3.5 w-[93%] md:w-full">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                      size="txtCaustenMedium22Gray800"
                    >
                      Shipping
                    </Text>
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                      size="txtCaustenMedium22Gray800"
                    >
                      $5.00
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[37px] w-full">
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                      size="txtCaustenBold22"
                    >
                      Grand Total
                    </Text>
                    <Text
                      className="text-[22px] text-gray-800 sm:text-lg md:text-xl tracking-[0.44px]"
                      size="txtCaustenBold22"
                    >
                      $518.00
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-400 h-px w-full" />
              <Button className="bg-deep_purple-A200 cursor-pointer font-semibold leading-[normal] mb-2.5 py-3 rounded-lg text-center text-lg text-white-A700 w-[232px]">
                Proceed To Checkout
              </Button>
            </div>
          </div>
          <Footer1 className="bg-gray-800 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CartPagePage;
