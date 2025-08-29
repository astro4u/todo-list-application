import React from "react";
import styles from "./Header.module.css"

/*
    Header component at the top of the app.
    Displays the logo and houses two buttons: Add To-Do and Show Completed Tasks.
*/

export function Header({ child1, child2 }) {
    

    return (
        <div className={styles.header}>
            <div className={styles.todolisttitle}>
                <img src=".\src\assets\UpdateListIt.png" alt="ListIt logo"/>
                {/*<p className={styles.title}>L<span className="text-veryImportant">!</span>st <span className="text-semiImportant">!</span>t</p>*/}
            </div>
            <div className={styles.addtaskbuttonarea}>
                { child1 }
            </div>
            <div className={styles.completedtasks}>
                { child2 }
            </div>
        </div>
    )
}