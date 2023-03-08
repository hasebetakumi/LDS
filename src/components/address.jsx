import Headline from "./atoms/headline"

const Address = () => {
    return (
        <div id='address'>
            <Headline
                title={'Address'}
            />
            <p className="text">〒355-0047</p>
            <p className="text">埼玉県東松山市高坂1034-7</p>
        </div>
    )
}

export default Address