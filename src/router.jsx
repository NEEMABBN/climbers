import Agencies from "./Pages/AgenciesPage/Agencies";
import Blogs from "./Pages/BlogsPage/Blogs";
import Contact from "./Pages/ContactPage/Contact";
import Home from "./Pages/HomePage/Home";
import Reports from "./Pages/ReportsPage/Reports";
import TouristAttractions from "./Pages/TouristAttractionsPage/TouristAttractions";
import AdvancedSearch from "./Pages/ToursPage/_components/AdvancedSearch";
import Tours from "./Pages/ToursPage/Tours";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Tours/*",
    element: <Tours />,
  },
  {
    path: "/TouristAttractions",
    element: <TouristAttractions />,
  },
  {
    path: "/Reports",
    element: <Reports />,
  },
  {
    path: "/Agencies",
    element: <Agencies />,
  },
  {
    path: "/Blogs",
    element: <Blogs />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Tours/Search",
    element: <AdvancedSearch />,
  },
];

export default router;
