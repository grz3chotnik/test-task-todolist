import {useState} from "react";

const TodoList = () => {

    const [listItems, setListItems] = useState([])
    const [inputValue, setInputValue] = useState()
    const inputHandler = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <>
        <div>

            <ul>
                {listItems.map((item) => <li>{item}</li>)}
            </ul>
        </div>


            <input value={inputValue} onChange={inputHandler} />
        <div>
            <button onClick={() => {setListItems([...listItems, inputValue])}} >add</button>
        </div>
        </>
    )
}

export default TodoList