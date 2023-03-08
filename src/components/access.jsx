import Headline from "./atoms/headline"
import SubHeadline from "./atoms/subHeadline"

const Access = () => {
    return (
        <div id='access'>
            <Headline
                title={'Access'}
            />
            <SubHeadline
                title={'電車でお越しの方'}
            />
            <p className="text">東武東上線高坂駅東口を出て、交番を右手に直進<br/>突き当たり右手に当スタジオがあります</p>
            <SubHeadline
                title={'お車でお越しの方'}
            />
            <img src={process.env.PUBLIC_URL + '/images/parking1.png'} alt="" />
            <p className="text">当スタジオ敷地内に6台分の駐車場完備</p>
        </div>
    )
}

export default Access