import { Link, NavLink } from "react-router-dom";
import Profile_pic_placeholder from '../../assets/profilepic_place_holder.png'
import logo from '../../assets/Build Right logo.png'
import useAuth from "../../hooks/UseAuth";
import UseCart from "../../hooks/UseCart";

const NavBar = () => {
    const { user, logOut } = useAuth();

    const [cart] = UseCart();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {user &&
            <>
                <li><Link to='/dashboard'>Dashboard </Link></li>
                <li>
                    <Link to={'/cart'}>
                        Selected <div className="badge badge-secondary">{cart.length}</div>
                    </Link>
                </li>
            </>
        }
    </>


    return (
        <nav className="navbar bg-base-100 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost normal-case text-xl"><img className="h-10" src={logo} alt="build right logo" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div title={user.displayName} className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {/* TODO: need to make the profile picture show in navbar after completing the user authentication */}
                                {user?.photoURL ? < img src={user?.photoURL} /> : <img src={Profile_pic_placeholder} />}
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user.displayName}
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div> : <>
                        <span className="mr-4"><Link to='/login' className="btn">Login</Link></span>
                        <Link to='/signup' className="btn btn-warning">Sign Up</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default NavBar;