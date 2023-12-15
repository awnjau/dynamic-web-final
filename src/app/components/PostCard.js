import styles from "./components.module.css"; 

const PostCard = ({ post, user}) => {
    const getPostDateString = (postDate) => {
    const date = new Date(postDate);
    return date.toDateString();
      };  
    return (
        <div className={styles.PostCardContainer}>
        <div className={styles.PostCard}>
            <div className={styles.ImageContainer}>
                 <img src={post.imageURL} alt="" />
            </div>
            <p className={styles.PostContent}>{post.postContent}</p>
            <p className={styles.PostDate}>event date: {getPostDateString(post.postDate)}</p>
        </div>
        </div>

    ); 
}; 

export default PostCard;