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

  const findRoute = useCallback((path: string, routes: any) => {
    for (const value of routes) {
      if (value?.path === path) {
        return value;
      }
      if (value.children) {
        return findRoute(path, value.children);
      }
    }
    return null;
  }, []);

  const judgeRouter = useCallback(() => {
    const { pathname } = location;
    console.log(pathname, location);
    const route = findRoute(pathname, routeConfig[0].children);
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
