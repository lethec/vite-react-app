import React from "react";
import Config from "../../../common";
import { Image } from "antd";

const ProHeader = () => {
  return (
    <div className=" flex items-center h-full">
      <Image
        style={{ width: 50, height: 50 }}
        src={Config.logo}
        preview={false}
      />
      <div className=" text-xl font-bold ml-3">{Config.name}</div>
    </div>
  );
};

export default ProHeader;
