import styles from "./Profile.module.css";

export const Profile = ({ pinfo }) => {
  const formatNumber = (num) => {
    if (num > 1000) {
      const suffixes = ["", "K", "M", "B", "T"];
      const suffixNum = Math.floor(("" + num).length / 3);

      let shortValue = parseFloat(
        (suffixNum !== 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(2)
      );

      if (shortValue % 1 !== 0) {
        // checks if short value is an integer
        shortValue = shortValue.toFixed(1);
      }

      return shortValue + suffixes[suffixNum];
    }
    return num;
  };

  return (
    <div className={styles.profileCard}>
      <div className={styles.infoImages}>
        <img src="https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <img src={pinfo.img} />
      </div>
      <div className={styles.profileInfo}>
        <div>
          <span>{pinfo.name}</span>
          <span>{pinfo.age}</span>
        </div>
        <div>{pinfo.location}</div>
      </div>
      <hr />
      <div className={styles.followerInfo}>
        <div className={styles.followers}>
          <span>{formatNumber(pinfo.socialMedia.followers)}</span>
          <span>Followers</span>
        </div>
        <div className={styles.likes}>
          <span>{formatNumber(pinfo.socialMedia.likes)}</span>
          <span>Likes</span>
        </div>
        <div className={styles.photos}>
          <span>{formatNumber(pinfo.socialMedia.photos)}</span>
          <span>Photos</span>
        </div>
      </div>
    </div>
  );
};
