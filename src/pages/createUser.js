import { useEffect } from "react"; 
import { useRouter } from "next/router"; 
import Header from "@/app/components/Header";
import CreateUserForm from "@/app/components/CreateUserForm";
import styles from "./pages.module.css";

export default function Create( { createUser, isLoggedIn } ) {
    const router = useRouter(); 
    useEffect(() => {
        if (isLoggedIn) router.push("/"); 
    }, [isLoggedIn]); 
    return (
        <>
        <main>
        <div className={styles.createUserHeader}>
            <h1>create user</h1>
            </div>
            <CreateUserForm createUser={createUser}/> 
        </main>
        </>
    )
} 