import { getSearchParam } from "@src/utils";
import React from "react";

const Index = () => {
  const searchParam = getSearchParam();
  console.log("id", searchParam);
  return <div>Demo</div>;
};

export default Index;
