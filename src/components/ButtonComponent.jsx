function ButtonComponent({id, text, onClick}) {
    return (
<>
<button id={id} onClick={onClick}>{text}</button>
</>
    )
}

export default ButtonComponent