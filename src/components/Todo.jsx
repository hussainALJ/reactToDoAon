function Todo ({text, index}) {
    return (
        <>
        <div key={index} className="todo">
            <p>{text}</p>
            <button>X</button>
        </div>
        </>
    )
}

export default Todo