import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link>Home</Link></li>
                    <li><Link to='cart'>Selected Classed</Link></li>
                    <li><Link to='cart'>Enrolled Classed</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;