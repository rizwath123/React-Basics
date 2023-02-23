import styles from "./PostsList.module.css"
import { Post } from "./Post"
import { CreatePost } from "./CreatePost"
export function PostsList() {
    return (
        <div>
            <CreatePost/>
            <ul className={styles.posts}>
                <Post name="Riz" text="this is how props works" />
                <Post name="ReactJs" text="I have done it" />
                <Post name="React State" text="Lets learn React State Next" />
            </ul>
        </div>
    )
}