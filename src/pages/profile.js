import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { collection, getFirestore, query, doc, getDocs, where } from "firebase/firestore";
import UserProfileCard from "@/app/components/UserProfileCard";
import styles from "./pages.module.css";


export default function UserProfile({ isLoggedIn, userInformation }) {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    useEffect(() => {
        async function getUser() {
            let user = {};
            const db = getFirestore();
            const q = query(
                collection(db, "users"),
                where("userId", "==", userInformation?.uid)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) =>{
                user = doc.data();
            });
            setUser(user);
        }

        

        async function getUserPosts() {
            let posts = [];
            const db = getFirestore();
            const q = query(
                collection(db, "posts"),
                where("userId", "==", userInformation?.uid)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((post) => {
                posts.push({ id: post.id, postDate: post.data().postDate, ...post.data() });
              });
          
            setUserPosts(posts);
        }

        if (userInformation) {
            getUser();
            getUserPosts();
        }
    }, [userInformation]);

    return(
        <>
            <main>
                <h1 className={styles.userProfileTitle}>your profile </h1>
                <UserProfileCard user={user} emailinfo={userInformation}/>
            </main>
        </>
    );
}