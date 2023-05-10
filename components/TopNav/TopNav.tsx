import Link from "next/link";
import { BiMailSend } from "react-icons/bi";

export const TopNav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Steve Shammah
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/contact" className="btn btn-ghost normal-case text-xl">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BiMailSend className="text-xl" />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
