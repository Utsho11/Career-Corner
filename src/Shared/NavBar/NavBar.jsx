
const NavBar = () => {
    const categories = <>
           <li>Software Engineering</li>
           <li>Product Manager</li>
           <li>Data Scientist</li>
    </>
    return (
        <div>
            <div className="navbar bg-transparent fixed z-10 shadow-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a><span className="font-semibold text-lg text-[#438fde]">Hire an employee</span></a></li>
                            <li>
                                <a><span className="font-semibold text-lg text-[#438fde]">Job Categories</span></a>
                                <ul className="p-2">
                                    {categories}
                                </ul>
                            </li>
                            <li><a><span className="font-semibold text-lg text-[#438fde]">Find Jobs</span></a></li>
                            <li><a><span className="font-semibold text-lg text-[#438fde]">About</span></a></li>
                        </ul>
                    </div>
                   <a><span className="text-5xl font-bold text-white">Career Corner</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a><span className="font-semibold text-lg text-[#438fde]">Hire an employee</span></a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary><span className="font-semibold text-lg text-[#438fde]">Job Categories</span></summary>
                                <ul className="p-2">
                                    {categories}
                                </ul>
                            </details>
                        </li>
                        <li><a><span className="font-semibold text-lg text-[#438fde]">Find Jobs</span></a></li>
                        <li><a><span className="font-semibold text-lg text-[#438fde]">About</span></a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-sm mx-2">Log in</a>
                    <a className="btn btn-sm">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;