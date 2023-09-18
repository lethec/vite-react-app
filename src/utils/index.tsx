import { useSearchParams } from "react-router-dom";

const getSearchParam = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchParams] = useSearchParams();

  const paramsObject = Array.from(searchParams.entries()).reduce(
    (accumulator: any, [key, value]) => {
      accumulator[key] = value;
      return accumulator;
    },
    {}
  );

  return paramsObject;
};

export { getSearchParam };
