'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from './nav-link.module.css'

const NavLink = ({ text, path }) => {
    const pathName = usePathname()
    return(
        <Link href={path} className={pathName.startsWith(path) ? `${classes.active} ${classes.link}`: classes.link}>{text}</Link>
    )
}

export default NavLink;