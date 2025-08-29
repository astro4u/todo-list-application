import React from "react";
import { ListContainer } from "./ListContainer";
import { Header } from "./Header";
import AddToDoModal from "./components/AddToDoModal";
import { AddToDoButton } from "./components/AddToDoButton";
import { useEffect, useState } from "react";
import { ShowCompletedTasks } from "./components/ShowCompletedTasks";
import { ShowCompletedTasksButton } from "./components/ShowCompletedTasksButton";

/*
    Container for the to-do windows.
*/
export function Background() {
  const [showAddToDoModal, setShowAddToDoModal] = useState(false);
  const [thisToDoText, setThisToDoText] = useState("");
  const [thisToDoImportance, setThisToDoImportance] = useState("");
  const [thisToDoDate, setThisToDoDate] = useState("");
  const [impItems, setImpItems] = useState([]);
  const [semiImpItems, setSemiImpItems] = useState([]);
  const [nonImpItems, setNonImpItems] = useState([]);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  // Function to handle adding a new to-do item.
  // Updates three state variables (thisToDoText, thisToDoImportance, thisToDoDate) based on the input from the AddToDoModal component.
  const handleAddToDo = (newToDo) => {
    setThisToDoText(newToDo[0]);
    setThisToDoImportance(newToDo[1]);
    setThisToDoDate(newToDo[2]);
    setShowAddToDoModal(false);
  }


  // Functions to handle toggling the completed status of an item in the respective importance list. Passed into the listContainer component as props.
  const handleToggleImp = (id) => {
    setImpItems(prev =>
        prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed, importance: "!!!" } : item
        )
    );
  };

  const handleToggleSemiImp = (id) => {
    setSemiImpItems(prev =>
        prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed, importance: "!!" } : item
        )
    );
  };

  const handleToggleNonImp = (id) => {
    setNonImpItems(prev =>
        prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed, importance: "!" } : item
        )
    );
  };

  // Functions to handle removing an item from the respective importance list. Passed into the listContainer component as props.
  const handleRemoveImp = (id) => {
    setImpItems(prev =>
      prev.filter(item => item.id !== id)
    )
  }

    const handleRemoveSemiImp = (id) => {
    setSemiImpItems(prev =>
      prev.filter(item => item.id !== id)
      )
  }

    const handleRemoveNonImp = (id) => {
    setNonImpItems(prev =>
      prev.filter(item => item.id !== id)
      )
  }




  // useEffect to add the new to-do item to the appropriate list based on its importance.
  // This effect runs whenever thisToDoText, thisToDoImportance, or thisToDoDate changes.
  // (These state variables only change when a new to-do is added via the handleAddToDo function.)
  useEffect(() => {
    switch (thisToDoImportance) {
      case "!!!":
        setImpItems((prevToDos) => [...prevToDos, {id: Math.random(), text: thisToDoText, date: thisToDoDate, completed: false}]);
        break;
      case "!!": 
        setSemiImpItems((prevToDos) => [...prevToDos, {id: Math.random(), text: thisToDoText, date: thisToDoDate, completed: false}]);
        break;
      case "!":
        setNonImpItems((prevToDos) => [...prevToDos, {id: Math.random(), text: thisToDoText, date: thisToDoDate, completed: false}]);
        break;
    }}, [thisToDoText, thisToDoImportance, thisToDoDate])


  // JSX Structure
  return (
    <div className="bg-primary h-full w-full flex flex-col justify-evenly items-center text-shadow-white">
      <Header child1={<AddToDoButton onClick={() => setShowAddToDoModal(true)}/>} child2={<ShowCompletedTasksButton onClick={() => setShowCompletedTasks(true)}/>}/>
  
      <ListContainer veryImportantItems={impItems}
                     semiImportantItems={semiImpItems}
                     nonImportantItems={nonImpItems}
                     onToggleImp={handleToggleImp}
                     onToggleSemiImp={handleToggleSemiImp}
                     onToggleNonImp={handleToggleNonImp}
                     removeItemImp={handleRemoveImp}
                     removeItemSemiImp={handleRemoveSemiImp}
                     removeItemNonImp={handleRemoveNonImp}
                    />
      {/*Conditional to show modal if the showAddToDoModal state variable is true (if "Add to-do" button is clicked)*/}
      {showAddToDoModal && (
        <AddToDoModal
          onSubmit={handleAddToDo}
          onClose={() => setShowAddToDoModal(false)}
        />
      )}
      {/*Conditional to show modal if the showCompletedTasks state variable is true (if "Show completed tasks" button is clicked)*/}
      {showCompletedTasks && (
        <ShowCompletedTasks
          completedItems={[...impItems, ...semiImpItems, ...nonImpItems].filter(item => item.completed)}
          onClose={() => setShowCompletedTasks(false)}
        />
      )}
    </div>
  );
}
