import { useState } from "react";
import Todo from "./Todo";

function List() {
  const [item, setItem] = useState("");
  const [itemsArr, setItemsArr] = useState([]);

  return (
    <>
      <section className="todoList">
        <div className="container">
          <div className="flex">
              <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Write Text here . . ."
              />
              <button
                className="addNew"
                onClick={() => {
                  setItemsArr([...itemsArr, item]);
                  setItem("");
                }}>
                + Add New
              </button>
          </div>
          {itemsArr.map((item, index) =>
            <Todo key={index} text={item}/>
            )}

          <p className="counter">Total list: <span>{itemsArr.length}</span></p>
        </div>
      </section>
    </>
  );
}

export default List;
