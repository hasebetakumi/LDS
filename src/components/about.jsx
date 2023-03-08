

import Headline from './atoms/headline'

const About = () => {
    return (
        <div id='about'>
            <Headline 
                title={'About'}
            />
            <p className='text'>
                高坂駅から徒歩3分大型鏡・リノリウム完備のスタジオ<br />
                バレエ、ダンス、フィットネス、打ち合わせなど<br />
                様々な用途でご利用いただけます。
            </p>
        </div>
    )
}

export default About