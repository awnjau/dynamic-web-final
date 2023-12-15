import { useState } from "react";
import styles from "./components.module.css";
const CreatePostForm = ({ createPostFunction }) => {
    const [imageUpload, setImageUpload] = useState();
    return(
        <div>
            <form className={styles.postcreation} onSubmit={(e) => createPostFunction(e, imageUpload) }>

                <label htmlFor="postContent"></label>
                <input type="text" id="postContent" name="postContent" className={styles.input} placeholder="write today's entry!"/>

                <label htmlFor="postDate"></label>
                <input type="text" id="postDate" name="postDate" className={styles.input} placeholder="entry date (mm/dd/yy)"/>

               <label htmlFor="image" className={styles.imgName}>put a pic!</label>
               <input type="file" id="image" name="image" placeholder="choose image" accept="image/png,image/jpeg" onChange={(e) => setImageUpload(e.target.files[0])} className={styles.imgInputButton}/>

                <button type="submit" className={styles.button}>create post</button>
            </form>
        </div>
    );
}; 

export default CreatePostForm;