import React from "react";

import { Img, Text } from "components";

const CartPageRowicon = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-px ml-[13px] rounded-[50%] w-[12%]"
          src="images/img_group_gray_800.svg"
          alt="icon"
        />
        <Text className="ml-4 text-gray-800 text-xs" size="txtCaustenMedium12">
          {props?.groupnumber}
        </Text>
        <Img
          className="h-[9px] ml-4 mr-3 rounded-[1px] w-[9px]"
          src="images/img_plus.svg"
          alt="plus"
        />
      </div>
    </>
  );
};

CartPageRowicon.defaultProps = { groupnumber: "1" };

export default CartPageRowicon;
