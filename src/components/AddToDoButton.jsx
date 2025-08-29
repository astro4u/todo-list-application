import { CirclePlus } from "lucide-react";
import React from "react";

/*
    Button to open the AddToDoModal.
*/


export function AddToDoButton({ onClick }) {
    return (
        <button onClick={onClick}
                className="p-2 border-2 border-secondary-2 rounded-md bg-secondary-1 hover:bg-secondary-2 hover:border-secondary-button active:bg-secondary-button active:border-secondary-3 text-primary flex items-center gap-2 font-[Nunito]">
          <CirclePlus />
          Add task!
        </button>
    )
}