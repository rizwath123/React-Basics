import classes from "./Post.module.css"
export function Post(props) {
    return (
        <div className={classes.post}>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.text}>{props.text}</p>
            {/* <p >This is another trick of random Naming by Math the name is {name}</p> */}
        </div>

    )
}