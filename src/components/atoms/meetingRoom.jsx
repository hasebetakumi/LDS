import Equipment from "./equipment"
import PriceTable from "./priceTable"
import SubHeadline from "./subHeadline"


const MeetingRoom = () => {
    return (
        <div className="meeting-room">
            <SubHeadline
                title={'Meeting Room'}
            />
            <Equipment
                names={['机', '冷蔵庫', '給湯室', '椅子4脚']}
            />
            <Equipment
                names={['モニター', '電子レンジ']}
            />
            <div className="img-list">
                <div className="left">
                    <img className="top" src={process.env.PUBLIC_URL + '/images/meeting-room1.png'} alt="" />
                    <img className="bottom" src={process.env.PUBLIC_URL + '/images/meeting-room2.png'} alt="" />
                </div>
                <img className="right" src={process.env.PUBLIC_URL + '/images/meeting-room3.png'} alt="" />
            </div>
            <PriceTable 
                time={'30分'}
                price={'500円（税込）'}
            />
        </div>
        
    )

}

export default MeetingRoom