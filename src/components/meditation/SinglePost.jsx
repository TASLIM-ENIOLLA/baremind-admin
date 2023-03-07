import { useEffect } from 'react'
import FeaturedImage from '../../pages/user/meditation/images/feat-img.png'

const SinglePost = ({setNavTitle}) => {
    useEffect(() => {
      setNavTitle('Post');
      }, []);
    
  return (
    <div className="single-post">
        <div className="single-post-featured-img">
            <img src={FeaturedImage} />
        </div>
        <br/>
        <div className="single-post-content">
            <h4 className="post-title"><b>Extended Meditation</b></h4>
            <h6>by <span className="post-author"><b>Mahlodi Letsie</b></span></h6>
            <br/>
            <p>This soft and soothing ambient soundscape created by Malhodi is an ideal backdrop for meditation, relaxation or sleep. Floating evokes a state of mind, where all of our thoughts are suspended, free to just be. Relax and allow yourself to drift to a calm and quiet place withi</p>
        </div>


    </div>
  )
}

export default SinglePost