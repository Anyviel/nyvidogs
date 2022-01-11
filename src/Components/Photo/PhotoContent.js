import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './Comments/PhotoComments';
import styles from './Photo.module.css';

const PhotoContent = ({ data }) => {

  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div className="">
          <p className={styles.author}>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <p className={styles.description}>{photo.descricao}</p>
          <ul className={styles.attributes}>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  )
}

export default PhotoContent
