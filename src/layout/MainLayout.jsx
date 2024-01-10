import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";
import Navbar from "../pages/Shared/Navbar";
import BreakingNews from "../pages/Home/BreakingNews";
const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;