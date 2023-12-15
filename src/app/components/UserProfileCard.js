import styles from "./components.module.css"
const UserProfileCard = ({ user, emailinfo }) => {
    return(
        <div className={styles.userProfileCardStyle}>
            <p>name: {user.name}</p>
            <p>email: {emailinfo?.email}</p>
        </div>
    );
};

export default UserProfileCard;