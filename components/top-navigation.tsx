"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHome, BiMailSend } from "react-icons/bi";

export const TopNav = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const homeLabel = isHome ? "" : "Steve Shammah";
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          {homeLabel || <BiHome />}
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
