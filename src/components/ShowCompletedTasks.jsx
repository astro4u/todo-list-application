import { X } from "lucide-react";
import React from "react";

/* 
    This is a modal that pops up owhen the "Show completed tasks" button is clicked.
    This modal displays a list of all completed tasks from all importance levels.
*/
export function ShowCompletedTasks({ completedItems, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-primary border-secondary-1 flex flex-col border-2 rounded-xl p-6 w-11/12 max-w-md">
            <button
                className="place-self-end bg-primary text-secondary-1 hover:bg-secondary-button rounded-md"
                onClick={onClose}>
                <X size={30} />
            </button>
                <h2 className="text-3xl text-secondary-1 font-bold mb-4">Completed Tasks</h2>
                {completedItems.length === 0 ? (
                    <p className="text-secondary-2">No completed tasks.</p>
                ) : (
                    <ul className="space-y-2 max-h-60 overflow-y-auto">
                        {completedItems.map((item) => (
                            <li key={item.id} className="border p-2 rounded">
                                <p className={`font-semibold 
                                            ${item.importance == "!" ? "text-nonImportant" : item.importance == "!!" ? "text-semiImportant" : "text-veryImportant"
                                }`}>
                                {item.text}
                            </p>
                            <p className="text-sm text-gray-500">{item.date}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}