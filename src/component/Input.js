const Input = ({id,text,value,onChangeHandler}) => {
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <input type="text" id={id} value={value} onChange={onChangeHandler}></input>
        </>
    )
}

export default Input;