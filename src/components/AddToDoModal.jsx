import { X, CirclePlus } from "lucide-react";
import React, { useState } from "react";


/*
    Modal component for adding a new to-do item. Includes a form that asks for 3 inputs:
    1. To-do text (string)
    2. Importance (radio buttons with 3 levels of importance, signified by "!", "!!", and "!!!")
    3. Date due (date input)

    On submission, the form data is sent to the parent component (Background.jsx) via the onSubmit prop.
    On closing the modal, the onClose prop is called to hide the modal.
*/

function AddToDoModal({ onClose, onSubmit }) {
  const [toDoText, setToDoText] = useState("");
  const [toDoImportance, setToDoImportance] = useState("!");
  const [toDoDate, setToDoDate] = useState("");

  // Handles form submission
  // Prevents default form submission behavior, checks if the to-do text is not empty.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toDoText.trim()) return;
    onSubmit([toDoText, toDoImportance, toDoDate]);
    setToDoText("");
    setToDoImportance("!");
    setToDoDate("");
  };
  

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center font-[Nunito] font-bold">
      <div className="flex flex-col gap-5 text-secondary-1">
        <div className="bg-primary border-secondary-1 border-2 w-[25rem] rounded-xl px-5 py-5 flex flex-col gap-5 items-center mx-4">
          <button
            className="place-self-end bg-primary hover:bg-secondary-button rounded-md"
            onClick={onClose}
          >
            <X size={30} />
          </button>
          <h1 className="text-3xl font-extrabold">Add a To-Do</h1>
          <form
            onSubmit={handleSubmit}
            id="toDoForm"
            className="flex flex-col w-[15rem] gap-5"
          >
            <input
              className="bg-secondary-1 rounded-md text-center w-full text-black"
              type="text"
              name="toDo"
              placeholder="Write your to-do here..."
              autoComplete="off"
              onChange={(e) => setToDoText(e.target.value)}
              required
            />
            {/* THIS IS THE START OF THE RADIO BUTTONS, BEWARE. */}
            <div
              className="flex flex-row gap-2 justify-center items-center"
              onChange={(e) => setToDoImportance(e.target.value)}
            >
              Importance :
              <div className="grid place-items-center">
                <input
                  type="radio"
                  name="importance"
                  id="noimportance"
                  value="!"
                  defaultChecked
                  className="
                      peer
                      col-start-1 row-start-1
                      appearance-none
                      w-4 h-4 border-2 border-green-500 rounded-full shrink-0
                      hover:bg-primary-2"
                />
                <label htmlFor="noimportance" className="text-green-500">
                  !
                </label>
                <div
                  className="
                      pointer-events-none
                      col-start-1 row-start-1
                      w-2 h-2 rounded-full peer-checked:bg-green-300
                    "
                />
              </div>
              <div className="grid place-items-center">
                <input
                  type="radio"
                  name="importance"
                  id="mildimportance"
                  value="!!"
                  className="
                    peer
                    col-start-1 row-start-1
                    appearance-none
                    w-4 h-4 border-2 border-yellow-500 rounded-full shrink-0
                    hover:bg-primary-2"
                />
                <label htmlFor="mildimportance" className="text-yellow-500">
                  !!
                </label>
                <div
                  className="
                    pointer-events-none
                    col-start-1 row-start-1
                    w-2 h-2 rounded-full peer-checked:bg-yellow-300
                  "
                />
              </div>
              <div className="grid place-items-center">
                <input
                  type="radio"
                  name="importance"
                  id="highimportance"
                  value="!!!"
                  className="
                    peer
                    col-start-1 row-start-1
                    appearance-none
                    w-4 h-4 border-2 border-red-500 rounded-full shrink-0
                    hover:bg-primary-2"
                />
                <label htmlFor="highimportance" className="text-red-500">
                  !!!
                </label>
                <div
                  className="
                    pointer-events-none
                    col-start-1 row-start-1
                    w-2 h-2 rounded-full peer-checked:bg-red-400
                  "
                />
              </div>
            </div>
            <div>
              <label className="mr-2" htmlFor="dodate">
                Do by:
              </label>
              <input
                className="bg-secondary-1 text-black rounded-md text:"
                type="date"
                id="dodate"
                name="dodate"
              />
              <span className="" />
            </div>
            <button
              type="submit"
              className="mt-4 w-[10rem] place-self-center flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md border-2 border-secondary-1 bg-gray-800 hover:bg-gray-900"
            >
              <CirclePlus />
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddToDoModal;
