import React, {useState} from 'react'

function TodoList() {

    const[inputList, setInputList]=useState("");
    const [items, setItems]=useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);  

    };
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];

        });
        setInputList("")

    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h3>Add ToDoList Here</h3>
                </div>
                <div className="addItems">
                     <input type="text" placeholder="Add items...." 
                     value={inputList}
                     onChange={itemEvent} />
                    <button onClick={listOfItems}>+</button>
                </div>
            </div>
                <div className="show item">
                <ol>
                        {/* <li>{inputList}</li>  */}
                       { items.map( (itemval) => {
                            return <li>{itemval}</li>;
                        }
                        )
                        }
                    </ol>
                </div> 
                </>
    )
}


export default TodoList
