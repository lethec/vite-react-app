import React, { useEffect, useState } from "react";
import { getKeyName } from "@src/utils";
import { useLocation } from "react-router-dom";

const ProContent = () => {
  const { pathname } = useLocation();
  const [element, setElement] = useState<any>(null);

  useEffect(() => {
    const { tabKey, title, element } = getKeyName(pathname);
    console.log("param", tabKey, title, element);
    setElement(element);
  }, [pathname]);

  return <>{element}</>;
};

export default ProContent;
