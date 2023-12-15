import Link from "next/link"
import styles from "./components.module.css"

const Header = ({ isLoggedIn, logoutUser }) => {
    return(
        <header className={styles.Header}>
            <nav>
            {isLoggedIn && (
                <>
                <Link href="/profile">user profile</Link>
                <Link href="/createPost">post a new event</Link>
                <Link href="/">events</Link>
                <a onClick={logoutUser}>log out</a>
                </>
            )}
            {!isLoggedIn && (
                <>
                    <Link href="/login">login</Link>
                    <Link href="/createUser">create user</Link>
                </>
            )}
            </nav>
        </header>
    );
}; 

export default Header;