import Equipment from "./equipment"
import PriceTable from "./priceTable"
import SubHeadline from "./subHeadline"


const LockerRoom = () => {
    return (
        <div className="locker-room">
            <SubHeadline
                title={'Locker Room'}
            />
            <Equipment
                names={['鍵付きロッカー']}
            />
            <Equipment
                names={['シャワールーム（女性用更衣室）']}
            />
            <div className="img-list">
                <img className="left" src={process.env.PUBLIC_URL + '/images/locker-room1.png'} alt="" />
                <div className="right">
                    <img className="top" src={process.env.PUBLIC_URL + '/images/locker-room2.png'} alt="" />
                    <img className="bottom" src={process.env.PUBLIC_URL + '/images/locker-room3.png'} alt="" />
                </div>
            </div>
            <PriceTable 
                time={''}
                price={'無料'}
            />
        </div>
    )
}

export default LockerRoom