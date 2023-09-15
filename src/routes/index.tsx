import { Suspense } from "react";
import { PageLoading } from "@ant-design/pro-components";
import { Demo, Home, Layout, Test } from "./config";

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
        index: true, // 是否将这个路由视为主页或者默认路由
        name: "首页",
        key: "/",
        auth: true,
        element: lazyLoad(Home),
      },
      {
        path: "demo",
        name: "Demo",
        key: "/demo",
        auth: true, // 是否需要身份验证或者登录才能访问
        element: lazyLoad(Demo),
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
