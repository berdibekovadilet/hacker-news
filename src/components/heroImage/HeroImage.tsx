import heroImage from "../../assets/images/HeroImage.png";
import styles from "./HeroImage.module.scss";
const HeroImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1>The Hacker News</h1>
        <h3>
          The Hacker News is the most trusted independent news service focused
          on publishing breaking news and high quality articles on cyber
          security, hacking
        </h3>
      </div>
      <img className={styles.heroImage} src={heroImage} alt="heroImage" />
    </div>
  );
};

export default HeroImage;
