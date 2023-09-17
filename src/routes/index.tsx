import { Suspense } from "react";
import { PageLoading } from "@ant-design/pro-components";
import { Demo, Home, Layout, SubDemo, Test } from "./config";

const lazyLoad = (Component: any) => (
  <Suspense fallback={<PageLoading />}>
    <Component />
  </Suspense>
);

const rootRouter = [
  {
    page: "/",
    name: "首页",
    key: "/",
    element: lazyLoad(Layout),
    auth: true,
    children: [
      {
        path: "/",
        index: true, // 是否将这个路由视为主页或者默认路由
        name: "首页",
        key: "/",
        auth: true, // 是否需要身份验证或者登录才能访问
        element: lazyLoad(Home),
      },
      {
        path: "/demo",
        name: "Demo",
        key: "demo",
        element: lazyLoad(Demo),
        children: {
          path: "/subDemo",
          name: "subDemo",
          element: lazyLoad(SubDemo),
        },
      },
    ],
  },
  {
    path: "/login",
    name: "登录",
    element: lazyLoad(Test),
    auth: false,
  },
];

export default rootRouter;
