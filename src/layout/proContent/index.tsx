import { Outlet } from "react-router-dom";
/**
 * @description 用于自定义内容区域
 * @description 配置显示面包屑
 */
const ProContent = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProContent;
