import React from "react";
import { useRoutes } from "react-router-dom";
import rootRouter from "./routes";

const App = () => {
  const element = useRoutes(rootRouter as any);
  return <>{element}</>;
};

export default App;
