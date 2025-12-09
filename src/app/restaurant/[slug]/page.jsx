import { notFound } from "next/navigation";
import Image from "next/image";
import restaurantsData from "../../../data/restaurants.json";
import MenuItem from "../../../components/MenuItem/MenuItem";
import styles from "../../page.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

export default async function RestaurantPage({ params}) {
  const { slug } = params;

  const restaurant = restaurantsData.restaurants.find(
    (r) => r.slug === slug
  );

  if (!restaurant) return notFound();

  const { menu } = restaurant;

  return (
    <main className={styles.container}>
        <Image 
            src={restaurant.image}
            alt={restaurant.name}
            width={700}
            height={400}
            className={styles.imageMenu}
          />
        <div className={styles.listeMenu}>
            <div className={styles.nomMenu}>
                <h2>{slug}</h2>
                <FontAwesomeIcon 
                    icon={faHeartRegular} 
                    style={{ color: "black"}}
                    width={20}
                    height={20}
                />
            </div>
            {/* Entrées */}
            <div className={styles.titreListeMenu}>
                <h3>Entrées</h3>
                <hr />
            </div>
            {menu.entrées?.map((item, i) => (
                <MenuItem 
                key={i} 
                nom={item.nom} 
                description={item.description} 
                prix={item.prix} 
                />
            ))}
            {/* Plats */}
            <div className={styles.titreListeMenu}>
                <h3>Plats</h3>
                <hr />
            </div>
            {menu.plats?.map((item, i) => (
                <MenuItem 
                key={i} 
                nom={item.nom} 
                description={item.description} 
                prix={item.prix} 
                />
            ))}
            {/* Desserts */}
            <div className={styles.titreListeMenu}>
                <h3>Desserts</h3>
                <hr />
            </div>
            {menu.desserts?.map((item, i) => (
                <MenuItem 
                key={i} 
                nom={item.nom} 
                description={item.description} 
                prix={item.prix} 
                />
            ))}

            <div className={styles.buttonMenu}>
                <button>Commander</button>
            </div>
        </div>  
    </main>
  );
}
