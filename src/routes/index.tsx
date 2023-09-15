import { Suspense, lazy } from "react";
import { PageLoading } from "@ant-design/pro-components";

const lazyLoad = (Component: any) => (
  <Suspense fallback={<PageLoading />}>
    <Component />
  </Suspense>
);

// 路由配置
const Layout = lazy(() => import("../layout"));
const Home = lazy(() => import("../pages/home"));
const Demo = lazy(() => import("../pages/demo"));

const rootRouter = [
  {
    page: "/",
    name: "首页",
    key: "/",
    element: lazyLoad(Layout),
    auth: true,
    children: [
      {
        index: true,
        name: "首页",
        key: "/",
        auth: true,
        element: lazyLoad(Home),
      },
      {
        index: false,
        path: "demo",
        name: "Demo",
        key: "/demo",
        auth: true,
        element: lazyLoad(Demo),
      },
    ],
  },
];

export default rootRouter;
