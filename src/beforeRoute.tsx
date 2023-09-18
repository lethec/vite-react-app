import { FC, useCallback, useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

interface IProps {
  routeConfig: any;
}
const BeforeRoute: FC<IProps> = (props) => {
  const { routeConfig } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const router = useRoutes(routeConfig);

  const findRoute = useCallback((routes: any, path: string) => {
    for (const route of routes) {
      if (route.path === path) {
        return route;
      }

      if (route.children) {
        const childRoute: any = findRoute(route.children, path);
        if (childRoute) {
          return childRoute;
        }
      }
    }

    return null; // 如果未找到匹配的路由，返回 null 或其他默认值
  }, []);

  const judgeRouter = useCallback(() => {
    const { pathname } = location;
    const route = findRoute(routeConfig, pathname);
    // 路由守卫判断
    if (!route) {
      navigate("/404");
      return;
    }
  }, []);

  useEffect(() => {
    judgeRouter();
  }, []);

  return router;
};

export default BeforeRoute;
