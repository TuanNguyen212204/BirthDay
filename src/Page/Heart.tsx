import styles from "./Heart.module.css";

const Heart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Nhân ngày <span className={styles.highlight}>8/3</span>, Anh chúc em
          luôn xinh đẹp, rạng rỡ, hạnh phúc và tràn đầy yêu thương.
        </h1>
        <p className={styles.message}>
          Cảm ơn em đã luôn bên anh, mang đến niềm vui và ý nghĩa cho cuộc sống
          này. <br />
          <span className={styles.love}>Love You So Much ❤️</span>
        </p>
      </div>
      <div className={styles.heartWrapper}>
        <div className={styles.heart}></div>
      </div>
    </div>
  );
};

export default Heart;
