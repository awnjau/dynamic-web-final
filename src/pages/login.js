import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginForm from "@/app/components/LoginForm";
import "../app/globals.css";
import styles from "./pages.module.css";


export default function Login({ isLoggedIn, loginUser }) {
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) router.push("/");
    }, [isLoggedIn]);

    return(
        <>
            <main>
                <div className={styles.loginHeader}>
                    <h1>login</h1>
                </div>
                <LoginForm loginUser={loginUser} /> 
                <div className={styles.loginblurb}>
                     <p>welcome to come find me! the premiere location for connecting with other black youth in your area. here, you can find and post events that help to connect you with others. please stay respectful, have fun, and don&apost forget to put the location of each event on the digital flyer or in the caption!</p>
                 </div>
            </main>
        </>
    );
}