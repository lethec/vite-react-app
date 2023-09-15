import routes from "@src/routes";

const flattenRoutes = (arr: any[]) =>
  arr.reduce((prev, item) => {
    if (Array.isArray(item.children)) {
      prev.push(item);
    }
    return prev.concat(
      Array.isArray(item.children) ? flattenRoutes(item.children) : item
    );
  }, []);

const getKeyName = (pathName = "/404") => {
  const thePath = pathName.split("?")[0];
  const curRoute = flattenRoutes(routes)
    .filter((item: any) => !item.index)
    .filter((item: any) => item.key?.indexOf(thePath) !== -1);
  if (!curRoute[0]) {
    return {
      title: "Not Found",
      tabKey: "/404",
      element: <div>404</div>,
    };
  }

  const { name, key, element, index, path, auth } = curRoute[0];
  return {
    index: index ?? false,
    path,
    auth,
    title: name,
    tabKey: key,
    element,
  };
};

export { getKeyName };
