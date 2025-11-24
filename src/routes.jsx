import Splash from "./pages/Splash";
import Homepage from "./pages/homepage";
import Music from "./pages/Music";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";

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
  {
    path: "/about-me",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
];

export default routes;
