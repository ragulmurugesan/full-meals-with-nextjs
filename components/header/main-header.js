import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import classes from "@/components/header/main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
    return (
        <header className={ classes.header }>
            <Link href="/" className={classes.logo}>
                <img src={LogoImg.src} />
            </Link>
            <nav className={ classes.nav }>
                <ul>
                    <li>
                        <NavLink href="/meals" name="Browse Meals" />
                        { /** For client side component you can use useRouter to handle navigation */}
                        {/* <a onClick={() => router.push("meals")}>Browse Meals</a> */}
                    </li>
                    <li>
                        {/* <Link href="/community"></Link> */}
                        <NavLink href="/community" name="Foodies Community" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}