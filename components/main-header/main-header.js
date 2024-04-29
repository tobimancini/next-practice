import Link from "next/link";
import Image from "next/image";

import classes from './main-header.module.css'
import logoImg from '@/assets/logo.png'
import MainHeaderBackground from "./main-header-background";
import NavLink from './nav-link'

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href={"/"}>
                    <Image src={logoImg} priority />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink path={"/meals"} text={"Browse Meals"} />
                        </li>
                        <li>
                            <NavLink path={"/community"} text={"Foodies Community"} />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader;