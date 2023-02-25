import styles from "./PostsList.module.css"
import { Post } from "./Post"
import { CreatePost } from "./CreatePost"
import { useState } from 'react'
import Modal from "./Modal"

export function PostsList({isPosting,onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredName, setEnteredName] = useState('')
    


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
            {isPosting && (
                <Modal onClose={onStopPosting}>
                <CreatePost
                    onBodyChange={bodyChangeHandler}
                    onNameChange={onNameChangeHandler} 
                    closeFn={onStopPosting}/>
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