import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import classes from "@/components/main-header.module.css";

export default function MainHeader() {
    return (
        <header>
            <Link href="/" className={classes.logo}>
                <img src={LogoImg.src} />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                        { /** For client side component you can use useRouter to handle navigation */ }
                        {/* <a onClick={() => router.push("meals")}>Browse Meals</a> */}
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}