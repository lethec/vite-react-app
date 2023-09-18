import React from "react";
import rootRouter from "./routes";
import BeforeRoute from "./beforeRoute";

const App = () => {
  return <BeforeRoute routeConfig={rootRouter} />;
};

export default App;
