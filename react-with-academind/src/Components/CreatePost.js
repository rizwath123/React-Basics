import {useState} from 'react'
import classes from "./CreatePost.module.css"


export function CreatePost(props) {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredName, setEnteredName] = useState('')
    
    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }
    function onNameChangeHandler(event) {
        setEnteredName(event.target.value)
    }
   function submitHandlerFn(event){
    event.preventDefault()
    const postData = {
        body: enteredBody,
        name: enteredName
    }
    props.onAddPost(postData)
    console.log(postData);
    props.closeFn()
   }
    return (

        <form className={classes.form} onSubmit={submitHandlerFn}>
            <p>
                <label htmlFor="body">Your Message:</label>
                <textarea type="text" id="body" required rows={3}
                    placeholder="Type your message here" onChange={bodyChangeHandler}></textarea>
            </p>
            {/* <p>
                {enteredBody}
                
                    onBodyChange={bodyChangeHandler}
                    onNameChange={onNameChangeHandler} 
            </p> */}
            <p>
                <label htmlFor="name">Your Name:</label>
                <input id="name" type="text" required
                    placeholder="Type your name here" onChange={onNameChangeHandler}></input>
            </p>
            <p className={classes.actions}>

                <button className={classes.button} type="button" onClick={props.closeFn}>Cancel</button>
                <button className={classes.button} type="submit">Submit</button>
            </p>
        </form>
    )
}