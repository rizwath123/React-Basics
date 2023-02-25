import styles from "./PostsList.module.css"
import { Post } from "./Post"
import { CreatePost } from "./CreatePost"
import { useState } from 'react'
import Modal from "./Modal"

export function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([])

    function addPostHandlerFn(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts])
    }
    return (
        <div>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <CreatePost
                        closeFn={onStopPosting} onAddPost={addPostHandlerFn} />
                </Modal>
            )}
            {/* {isModalOpen ? <Modal onClose={hideModal}>
                <CreatePost
                    onBodyChange={bodyChangeHandler}
                    onNameChange={onNameChangeHandler} />
            </Modal> : null} */}
            {posts.length > 0 && (<ul className={styles.posts}>
                {posts.map((data) => <Post key={data.name} name={data.name} text={data.body} />)}

            </ul>)}
            {posts.length === 0 && (<div style={{ textAlign: "center", backGround: "Red", color: "yellow" }}>
                <h1>There are No posts to show</h1></div>)}
        </div>
    )
    // let modelVisible;
    // if (isModalOpen) {
    //     modelVisible = <Modal onClose={hideModal}>
    //         <CreatePost
    //             onBodyChange={bodyChangeHandler}
    //             onNameChange={onNameChangeHandler} />
    //     </Modal>
    // }
}