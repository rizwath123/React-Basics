import classes from "./Post.module.css"

export function Post(props) {
    // let namesAry = ["riz", "ishaal"]
    // let name = Math.random() > 0.5 ? namesAry[0]:namesAry[1]
    // let class1 = {color:'blue', background: "white"}
    return (
        <div className={classes.post}>
        {/* <div style={{color: 'red', textAlign:'center', background: 'white'}}> */}
            {/* <p style={class1}>{props.name}</p> */}
            {/* <p className={classes.name}>{props.name}</p>
            <p className={classes.text}>{props.text}</p>
            <p className={classes.random}>This is another trick of random Naming by Math the name is {name}</p> */}
            <p className={classes.name}>{props.name}</p>
            <p className={classes.text}>{props.text}</p>
            {/* <p >This is another trick of random Naming by Math the name is {name}</p> */}
        </div>

    )
}