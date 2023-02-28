import React, { useState } from "react";

const ToDo = () => {
    const [items, setItems] = useState[
        {
            text: 'Tomates',
            checked: false,
            deleted: false
        },
        {
            text: 'Judias',
            checked: false,
            deleted: false
        },
        {
            text: 'Manzanas',
            checked: false,
            deleted: false
        }
    ]

    function addTask(event) {
        
    }
    function viewAllTask() {
        console.log('recuperar')
    }
    return (
        <div>
            <h1>To Do</h1>
            <input type="text" />
            <button onClick={addTask}>add task</button>
            <button onClick={viewAllTask}>view all task</button>
            <ul>
                {items.map((item, index) => (
                    <th key={index}>
                        <input type='checkbox' checked={item.checked} />
                        {item.text}
                    </th>
                ))}
            </ul>
        </div>
    )
}
export default ToDo;