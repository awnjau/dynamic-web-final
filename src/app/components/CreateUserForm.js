import styles from "./components.module.css";

const CreateUserForm = ({ createUser }) => {
    return(
        <div>
            <form className={styles.createuserForm} onSubmit={(e) => createUser(e) }>

                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" placeholder="name" className={styles.input} />

                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="email" className={styles.input} />

                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="password" className={styles.input} />
                 
                <button type="submit" className={styles.button}>create user</button>
            </form>
        </div>
    );
};

export default CreateUserForm;