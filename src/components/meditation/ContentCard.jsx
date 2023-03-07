import cardImg from '../../pages/user/meditation/images/vid_poster_001.png'
import {Link} from 'react-router-dom'

const ContentCard = () => {
  return (
    <div className='ContentCard'>
        {/* <div className="single-card"> */}
            <div className="card-img">
                <img src={cardImg} alt="" />
            </div>
            <h6 className="card-author">Mahlodi Letsie</h6>
            <Link to='/post'><h5 className="card-title"><b>Into to mindfulness</b></h5></Link>
            <p className="card-duration">60 MIN</p>
        {/* </div> */}
    </div>
  )
}

export default ContentCard