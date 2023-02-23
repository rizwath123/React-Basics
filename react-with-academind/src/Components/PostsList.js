import styles from "./PostsList.module.css"
import { Post } from "./Post"
import { CreatePost } from "./CreatePost"
import {useState} from 'react'


export function PostsList() {
    const [enteredBody, setEnteredBody] = useState('')
    function bodyChangeHandler(event){
        setEnteredBody(event.target.value)
    }
    return (
        <div>
            <CreatePost onBodyChange={bodyChangeHandler}/>
            <ul className={styles.posts}>
                <Post name="Riz" text={enteredBody} />
                <Post name="ReactJs" text="I have done it" />
                <Post name="React State" text="Lets learn React State Next" />
            </ul>
        </div>
    )
}