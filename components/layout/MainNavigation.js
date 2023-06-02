import Link from "next/link";
import Logo from "./Logo";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.container}>
      <Link href="/" className={classes.logo}>
        <Logo />
      </Link>
      <nav>
        <ul className={classes.navLinks}>
          <li>
            <Link href="/posts">Post</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
