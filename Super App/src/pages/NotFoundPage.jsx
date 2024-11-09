import { Link } from "react-router-dom";
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div
     className={styles.container}>
        <h1 className={styles.heading}>404</h1>
        <p className={styles.text}>Oops! Page Not Found</p>
        <p className={styles.subText}>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable. 
        </p>
        <Link to="/" className={styles.link}>
          Go to Homepage
        </Link>
     </div>
  );
}


