'use client'
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, name }) {

    const path = usePathname();

    return (
        <Link
            className={path.startsWith(href) ? `${classes.active}` : undefined}
            href={href}>
            {name}
        </Link>)
}