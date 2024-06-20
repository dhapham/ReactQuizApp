const Test2 = (props) => {
    return (
        <div>
            Im parent
            <div>{props.children}</div>
        </div>
    )
}

export default Test2;