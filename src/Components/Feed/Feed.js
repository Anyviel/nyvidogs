import React from 'react'
import FeedModal from './Modal/FeedModal';
import FeedPhotos from './Photos/FeedPhotos';

const Feed = () => {

  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  )
}

export default Feed;
