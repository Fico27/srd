import Splash from "./pages/Splash";

const routes = [
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
  {
    path: "feed",
    element: <Feed />,
  },
];

export default routes;
