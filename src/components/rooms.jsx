import Headline from "./atoms/headline"
import LockerRoom from "./atoms/lockerRoom"
import MeetingRoom from "./atoms/meetingRoom"
import Studio from "./atoms/studio"

const Rooms = () => {
    return (
        <div id='rooms'>
            <Headline
                title={'Rooms'}
            />
            <Studio />
            <MeetingRoom />
            <LockerRoom />
        </div>
    )
}

export default Rooms