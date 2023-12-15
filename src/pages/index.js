import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import styles from "./pages.module.css";
import PostCard from "@/app/components/PostCard";

export default function UserProfile({ isLoggedIn }) {
    const router = useRouter();
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    useEffect(() => {
        async function getAllPosts() {
            const postsArray = [];
            const db = getFirestore();
            const postQuery = await getDocs(collection(db, "posts"));

            postQuery.forEach((post) => {
                postsArray.push({id: post.id, ...post.data() });
            });
            setAllPosts(postsArray);
        }
        getAllPosts();
    }, []);   

    return(
        <>
            <main>
                <h1 className={styles.userProfileTitle}>see events in your area!</h1>
                <div className={styles.feedPostsStyle}>
                    {allPosts.map((post, i) => (
                    <PostCard post={post} key={i} />
                    ))}
                </div>
            </main>
        </>
    );
}