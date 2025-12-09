import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function MenuItem({ nom, description, prix }) {
  return (
    <div className="menuItem">
      <div className="menuItemContent">
        <h4>{nom}</h4>
        <p>{description}</p>
      </div>
      <span className="price">{prix}</span>
    </div>
  );
}
