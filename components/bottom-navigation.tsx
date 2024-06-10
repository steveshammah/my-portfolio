"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../data";

interface Props {}
const BottomNavigation = ({}: Props) => {
  const activePage = usePathname();

  return (
    <div className="btm-nav w-[80">
      {links.map((page, index) => (
        <Link
          href={`${page.href}`}
          className={`${
            page.href.replace("/", "") === activePage.replace("/", "") &&
            "active"
          }`}
          key={index}
        >
          <page.icon />
          <span className="btm-nav-label">{page.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigation;
