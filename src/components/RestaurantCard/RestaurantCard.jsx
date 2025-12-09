"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './RestaurantCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

export default function RestaurantCard({ name, location, image, isNew, slug }) {

  const [liked, setLiked] = useState(false);

  return (
    <Link href={`/restaurant/${slug}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image 
            src={image}
            alt={name}
            width={400}
            height={300}
            className={styles.image}
          />

          {isNew && <span className={styles.badge}>Nouveau</span>}
        </div>

        <div className={styles.content}>
          <div className={styles.textCard}>
            <h3>{name}</h3>
            <p className={styles.locationRestaux}>{location}</p>
          </div>

          <div 
            className={styles.heartIcon} 
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
          >
            <FontAwesomeIcon 
              icon={liked ? faHeartSolid : faHeartRegular} 
              style={{ color: liked ? "#9356dc" : "black" }}
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
