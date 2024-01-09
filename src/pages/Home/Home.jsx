import LeftSideNav from "../Shared/LeftSideNav";
import RightSideNav from "../Shared/Rightsidenav";
const Home = () => {
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border"><LeftSideNav></LeftSideNav></div>
                <div className="text-4xl md:col-span-2 border">New Arrival.......</div>
                <div className="border"><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;