import Equipment from "./equipment"
import PriceTable from "./priceTable"
import SubHeadline from "./subHeadline"


const Studio = () => {
    return (
        <div className="studio">
            <SubHeadline
                title={'Studio'}
            />
            <Equipment
                names={['大型鏡', 'モニター', 'リノリウム', '撮影用ライト']}
            />
            <Equipment
                names={['レッスン用バー', 'スピーカー(Bluetooth©︎対応)']}
            />
            <div className="img-list">
                <img className="first" src={process.env.PUBLIC_URL + '/images/studio1.png'} alt="" />
                <div>
                    <img className="left" src={process.env.PUBLIC_URL + '/images/studio2.png'} alt="" />
                    <img className="right" src={process.env.PUBLIC_URL + '/images/studio3.png'} alt="" />
                </div>
            </div>
            <PriceTable 
                time={'30分'}
                price={'1000円（税込）'}
            />
        </div>
    )
}

export default Studio