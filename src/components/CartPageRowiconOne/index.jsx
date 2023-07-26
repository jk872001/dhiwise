import React from "react";

import { Img, Text } from "components";

const CartPageRowiconOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-px ml-[13px] rounded-[50%] w-[12%]"
          src="images/img_group_gray_800.svg"
          alt="icon_One"
        />
        <Text
          className="ml-[15px] text-gray-800 text-xs"
          size="txtCaustenMedium12"
        >
          {props?.actionnumber}
        </Text>
        <Img
          className="h-[9px] ml-[15px] mr-[11px] rounded-[1px] w-[9px]"
          src="images/img_plus.svg"
          alt="plus_One"
        />
      </div>
    </>
  );
};

CartPageRowiconOne.defaultProps = { actionnumber: "2" };

export default CartPageRowiconOne;
