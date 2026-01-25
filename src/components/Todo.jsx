import deleteIcon from '/deleteIcon.svg'

function Todo ({text, index, onDelete}) {
    return (
        <>
        <div key={index} className="todo flex">
            <p>{text}</p>
            <button onClick={onDelete}><img src={deleteIcon} alt="" /></button>
        </div>
        </>
    )
}

export default Todo