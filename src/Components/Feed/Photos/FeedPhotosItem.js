import React from 'react'
import Image from '../../../Helpers/Skeleton/Image';

import styles from './FeedPhotos.module.css';

const FeedPhotosItem = ({photo, setModalPhoto}) => {

  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      {/* <img src={photo.src} alt={photo.title} /> */}
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
