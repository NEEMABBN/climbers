import Blogs from "./Pages/BlogsPage/Blogs";
import Home from "./Pages/HomePage/Home";
import Map from "./Pages/MapPage/Map";
import Reports from "./Pages/ReportsPage/Reports";
import StorePage from "./Pages/StorePage/StorePage";
import Teams from "./Pages/TeamsPage/Teams";
import AdvancedSearchPlaces from "./Pages/TouristAttractionsPage/_components/AdvancedSearchPlaces";
import TouristAttractionsDetails from "./Pages/TouristAttractionsPage/_components/TouristAttractionsDetails";
import TouristAttractions from "./Pages/TouristAttractionsPage/TouristAttractions";
import AdvancedSearch from "./Pages/ToursPage/_components/AdvancedSearch";
import InformationPassengers from "./Pages/ToursPage/_components/InformationPassengers";
import TourDetails from "./Pages/ToursPage/_components/TourDetails";
import Tours from "./Pages/ToursPage/Tours";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tourist-attractions/:id",
    element: <TouristAttractionsDetails />,
  },
  {
    path: "/tourist-attractions",
    element: <TouristAttractions />,
  },
  {
    path: "/tourist-attractions/search",
    element: <AdvancedSearchPlaces />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/team",
    element: <Teams />,
  },
  {
    path: "/tours/:id/submit-passengers",
    element: <InformationPassengers />,
  },
  {
    path: "/tours/search",
    element: <AdvancedSearch />,
  },
  {
    path: "/tours/:id",
    element: <TourDetails />,
  },
  {
    path: "/tours/*",
    element: <Tours />,
  },
  {
    path: "/store",
    element: <StorePage />,
  },
];

export default router;
