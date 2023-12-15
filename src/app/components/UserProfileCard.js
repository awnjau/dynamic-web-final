import styles from "./components.module.css"


const UserProfileCard = ({ user, emailinfo }) => {
    return(
        <div className={styles.userProfileCardStyle}>
            <p>name: {user.name}</p>
            <p>email: {emailinfo?.email}</p>
            <img className={styles.mapimg} src="https://i.ibb.co/2hBsDhw/map.png"></img>
        </div>
        
    );
};

export default UserProfileCard;

  

