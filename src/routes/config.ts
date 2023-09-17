import { lazy } from "react";
// 配置页面需要加载的路由文件（建议按照功能模块分隔）
const Layout = lazy(() => import("@src/layout"));
const Home = lazy(() => import("@pages/home"));
const Demo = lazy(() => import("@pages/demo"));
const Test = lazy(() => import("@pages/test"));
const SubDemo = lazy(() => import("@pages/demo/components/subPage/index"));

export { Layout, Home, Demo, Test, SubDemo };
