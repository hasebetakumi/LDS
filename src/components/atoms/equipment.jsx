const Equipment = (props) => {
    return (
        <div className='equipment'>
            <ul>
                {props.names.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Equipment