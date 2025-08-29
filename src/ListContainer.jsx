import React from "react";
import { List } from "./List"
import styles from "./ListContainer.module.css"

/*
    Large container below the To Do List title.
    Houses three List components, one for each importance level.
*/
export function ListContainer({ veryImportantItems, semiImportantItems, nonImportantItems, onToggleImp, onToggleSemiImp, onToggleNonImp, removeItemImp, removeItemNonImp, removeItemSemiImp }) {


    return (
        <div className={styles.listcontainer}>
            <List borderColor="#b01805" importance="!!!" items={veryImportantItems} onToggle={onToggleImp} removeItem={removeItemImp}/>
            <List borderColor="#d4a206" importance="!!" items={semiImportantItems} onToggle={onToggleSemiImp} removeItem={removeItemSemiImp}/>
            <List borderColor="#7C8D3F" importance="!" items={nonImportantItems} onToggle={onToggleNonImp} removeItem={removeItemNonImp}/>
        </div>
    )
}