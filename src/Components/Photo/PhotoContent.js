import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import Image from '../../Helpers/Skeleton/Image';
import PhotoComments from './Comments/PhotoComments';
import styles from './Photo.module.css';
import PhotoDelete from './PhotoDelete';

const PhotoContent = ({ data, single }) => {

  const { photo, comments } = data;

  const user = React.useContext(UserContext);

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>
      </div>
      <div className={styles.details}>
        <div className="">
          <div className={styles.author}>
            {user.data && user.data.username === photo.author ?
              (
                <PhotoDelete id={photo.id} />
              )
               :
              (
                <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
              )}
            <span className={styles.views}>{photo.acessos}</span>
          </div>
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
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  )
}

export default PhotoContent
