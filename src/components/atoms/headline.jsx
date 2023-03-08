
const Headline = (props) => {
    return (
        <div className='headline'>
            <div className='line'></div>
            <div className='item-list'>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Headline