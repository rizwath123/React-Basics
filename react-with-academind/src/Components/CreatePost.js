// import {useState} from 'react'
import classes from "./CreatePost.module.css"


export function CreatePost(props) {
    // const [enteredBody, setEnteredBody] = useState('')
    // let enteredBody = '';
    // function onChangeEventHandler(event){
    //     setEnteredBody(event.target.value);
    // }

    return (

        <form className={classes.form}>
            <p>
                <label  htmlFor="body">Your Message:</label>
                <textarea  type="text" id="body" required rows={3}
                    placeholder="Type your message here" onChange={props.onBodyChange}></textarea>
            </p>
            {/* <p>
                {enteredBody}
            </p> */}
            <p>
                <label htmlFor="name">Your Name:</label>
                <input  id="name" type="text" required 
                    placeholder="Type your name here" onChange={props.onNameChange}></input>
            </p>
            <p className={classes.actions}>

            <button className={classes.button} type="button" onClick={props.closeFn}>Cancel</button>
            <button className={classes.button} type="submit">Submit</button>
            </p>
        </form>
    )
}