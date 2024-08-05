import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import ListPage from "../pages/list-page";
import TaskManager from "../pages/charts-page";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/loading";
import Addserverpage from "../pages/Addserverpage";
import Listdetailpage from "../pages/Listdetailpage";
// import LayoutFlow from "../components/flowchart";
import Flowchart from "../pages/flowchart-page";
import ProjectStatsPage from "../pages/projectStatsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/chart/:id",
        element: <TaskManager />
    },
    {
        path: "/list",
        element: <ListPage />
    },
    {
        path: "/loading",
        element: <Loading />
    },
    {
        path: "/addserver",
        element: <Addserverpage />
    },
    {
        path: "/server/detail/:id",
        element: <Listdetailpage />
    },
    {
        path: "/flow/:id",
        element: <Flowchart />
    },
    {
        path: "/project/:id",
        element: <ProjectStatsPage/>
    },
]);

const Router = () => (
    <div>
        <Navbar/>
        <RouterProvider router={router} />
        <Footer/>
    </div>
);

export default Router;
