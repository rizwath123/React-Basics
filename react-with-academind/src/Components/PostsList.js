import styles from "./PostsList.module.css"
import { Post } from "./Post"
export function PostsList() {
    // let ary = [
    //     { id: "01st Post", name: "Riz", text: "This is a text for 1st line" },
    //     { id: "02nd Post", name: "Web", text: "This is a text for 02nd line" },
    //     { id: "03rd Post", name: "Dev", text: "This is a text for 03rd line" },
    //     { id: "04th Post", name: "2023", text: "This is a text for 04th line" }
    // ]
    return (
        <div>
            <ul className={styles.posts}>
                <Post name="Riz" text="this is how props works" />
                <Post name="ReactJs" text="I have done it" />
                <Post name="React State" text="Lets learn React State Next" />
            </ul>
            {/* <ul className={styles.Posts}>
                <li>
                    <div className={styles.name}>{ary[0].id} </div>
                    <div className={styles.text}>{ary[0].name} </div>
                    <div className={styles.random}>{ary[0].text} </div>
                </li>
                <li>
                    <div className={styles.name}>{ary[1].id} </div>
                    <div className={styles.text}> {ary[1].name} </div>
                    <div className={styles.random}>{ary[1].text} </div>
                </li>
                <li>
                    <div className={styles.name}>{ary[2].id} </div>
                    <div className={styles.text}>{ary[2].name} </div>
                    <div className={styles.random}>{ary[2].text} </div>
                </li>
                <li>
                    <div className={styles.name}>{ary[3].id} </div>
                    <div className={styles.text}>{ary[3].name} </div>
                    <div className={styles.random}> {ary[3].text} </div>
                </li>
            </ul> */}
        </div>
    )
}