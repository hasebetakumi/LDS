const PriceTable = (props) => {
    const { time, price} = props

    return (
        <table className='price-table'>
            <tbody>
                <tr>
                    <td>{time}料金</td>
                    <td>{price}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PriceTable