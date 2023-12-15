import styles from "./components.module.css"

const LoginForm = ({ loginUser }) => {
    return(
        <div className={styles.loginWrapper} >
            <form className={styles.loginForm} onSubmit={(e) => loginUser(e)}>
                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="email" className={styles.input} />

                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="password" className={styles.input} />
                 
                <button type="submit" className={styles.button}>login</button>
            </form>
        </div>
    );
};

export default LoginForm;