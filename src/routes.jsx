import Splash from "./pages/Splash";
import Homepage from "./pages/homepage";

const routes = [
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
];

export default routes;
