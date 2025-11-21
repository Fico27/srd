import Splash from "./pages/Splash";
import Homepage from "./pages/homepage";
import Music from "./pages/Music";

const routes = [
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/music",
    element: <Music />,
  },
];

export default routes;
