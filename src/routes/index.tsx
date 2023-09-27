import React, { Suspense } from "react";
import { PageLoading } from "@ant-design/pro-components";
import { Demo, Home, Layout, SubDemo, Test } from "./config";

const lazyLoad = (Component: any) => (
  <Suspense fallback={<PageLoading />}>
    <Component />
  </Suspense>
);

const rootRouter = [
  {
    path: "/",
    name: "首页",
    element: lazyLoad(Layout),
    children: [
      {
        path: "/",
        name: "首页",
        element: lazyLoad(Home),
      },
      {
        name: "Demo",
        path: "demo",
        element: lazyLoad(Demo),
        children: [
          {
            path: "add",
            name: "Demo",
            element: lazyLoad(SubDemo),
          },
        ],
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
