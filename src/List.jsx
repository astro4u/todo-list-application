import React from "react";
import { X } from "lucide-react";

export function List({ borderColor, importance, items, onToggle, removeItem }) {
  const sortedItems = [...items].sort((a, b) => a.completed - b.completed);

  // JSX Structure for each individual list. Reusable component.
  // Props: borderColor (string), importance (string), items (array of objects), onToggle (function), removeItem (function)
  return (
    <div>
      <h1
        className="justify-contents-center h-auto font-bold font-[Nunito] text-4xl"
        style={{ borderColor, color: `${borderColor}` }}
      >
        {importance}
      </h1>
      <div
        className="bg-secondary-1 w-[26.1vw] h-[72.12vh] border-solid flex flex-col justify-content-center text-[2rem] border-5 p-2 text-primary overflow-y-auto"
        style={{ borderColor: `${borderColor}` }}
      >
        <ul className="space-y-2" id="checklist">
          {sortedItems.map((item) => (
            <div className="grid" key={item.id}>
              <li
                key={item.id}
                onClick={() => onToggle(item.id)}
                className={`peer col-start-1 row-start-1 grid items-center text-start justify-start gap-3 p-1 text-[1rem] font-medium hover:bg-secondary-2 rounded-md`}
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => onToggle(item.id)}
                  className={`peer 
                              col-start-1 row-start-1 justify-self-start
                              appearance-none
                              w-4 h-4 border-2 border-primary-1 rounded-full shrink-0
                            hover:bg-secondary-3`}
                />
                <div className="
                      pointer-events-none
                      justify-self-center
                      col-start-1 row-start-1
                      w-2 h-2 rounded-full peer-checked:bg-primary
                    "/>
                <span
                  className={`col-start-2 row-start-1 ${
                    item.completed ? "line-through text-secondary-3" : ""
                  }`}
                >
                  {item.text}
                </span>
                
              </li>
              <button className="col-start-2 row-start-1 hover:bg-secondary-2 rounded-full justify-self-end self-center h-6 w-6 flex items-center"
                      onClick={() => removeItem(item.id)}>
                  <X height={24} width={24}/>
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
