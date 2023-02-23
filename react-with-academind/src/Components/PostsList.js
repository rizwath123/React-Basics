import styles from "./PostsList.module.css"
import { Post } from "./Post"
import { CreatePost } from "./CreatePost"
import { useState } from 'react'
import Modal from "./Modal"

export function PostsList() {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [isModalOpen, setISModalOpen] = useState(true)
    function hideModal() {
        setISModalOpen(false)
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }
    function onNameChangeHandler(event) {
        setEnteredName(event.target.value)
    }
    // let modelVisible;

    // if (isModalOpen) {
    //     modelVisible = <Modal onClose={hideModal}>
    //         <CreatePost
    //             onBodyChange={bodyChangeHandler}
    //             onNameChange={onNameChangeHandler} />
    //     </Modal>
    // }
    return (
        <div>
            {isModalOpen && (
                <Modal onClose={hideModal}>
                <CreatePost
                    onBodyChange={bodyChangeHandler}
                    onNameChange={onNameChangeHandler} />
            </Modal>
            )}
            {/* {isModalOpen ? <Modal onClose={hideModal}>
                <CreatePost
                    onBodyChange={bodyChangeHandler}
                    onNameChange={onNameChangeHandler} />
            </Modal> : null} */}

            <ul className={styles.posts}>
                <Post name={enteredName} text={enteredBody} />
                <Post name="ReactJs" text="I have done it" />
                <Post name="React State" text="Lets learn React State Next" />
            </ul>
        </div>
    )
}