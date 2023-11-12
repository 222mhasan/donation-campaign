import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="container mx-auto">
            {/* <nav className="flex justify-between items-center my-10">
                <div>
                    <Logo></Logo>
                </div>
                <div>
                    <ul className="flex gap-12">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A;] underline font-bold text-lg" : ""
                                }>
                                <div className="text-lg">Home</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A;] underline font-bold text-lg" : ""
                                }>
                                <div className="text-lg">Donation</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A;] underline font-bold text-lg"  : ""
                                }>
                                <div className="text-lg">Statistics</div>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav> */}

            <div className="navbar justify-between py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box ">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A;] underline font-bold text-lg" : ""
                                    }>
                                    <div className="text-lg">Home</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A;] underline font-bold text-lg" : ""
                                    }>
                                    <div className="text-lg">Donation</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A;] underline font-bold text-lg" : ""
                                    }>
                                    <div className="text-lg">Statistics</div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Logo></Logo>
                </div>

                <div className="hidden lg:flex items-end justify-end ">
                    <ul className="flex gap-8 items-end justify-items-end  px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A;] underline font-bold text-lg" : ""
                                }>
                                <div className="text-lg">Home</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A;] underline font-bold text-lg" : ""
                                }>
                                <div className="text-lg">Donation</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A;] underline font-bold text-lg" : ""
                                }>
                                <div className="text-lg">Statistics</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;