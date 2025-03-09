import { useState } from "react";
import Confetti from "react-confetti";
import useSound from "use-sound";
import styles from "./WishPage.module.css";
import birthdaySong from "../assets/happy-birthday.mp3";

const WishPage: React.FC = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [playBirthdaySong] = useSound(birthdaySong, { volume: 0.5 });

  const handleCakeClick = () => {
    playBirthdaySong();
    setShowFireworks(true);
    setIsClicked(true);
    setShowMessage(true);

    setTimeout(() => {
      setShowFireworks(false);
    }, 10000);
  };

  return (
    <div className={styles.container}>
      {showFireworks && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={1000}
          recycle={false}
          colors={[
            "#ff6b81",
            "#ff4757",
            "#fff",
            "#ffd700",
            "#ffeb3b",
            "#ff4081",
          ]}
          gravity={0.1}
          wind={0.05}
          initialVelocityY={30}
          tweenDuration={10000}
        />
      )}
      {showFireworks && (
        <div className={styles.bubbleContainer}>
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className={styles.bubble}
              style={{
                left: `${Math.random() * 100}vw`,
                animationDuration: `${5 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      )}

      <div className={styles.content}>
        <h1 className={styles.title}>
          Chúc mừng sinh nhật <span className={styles.highlight}>Mẹ Loan</span>!
        </h1>

        <div className={styles.cakeContainer} onClick={handleCakeClick}>
          <div
            className={`${styles.cakeWrapper} ${
              isClicked ? styles.shake : ""
            } ${showFireworks ? styles.glow : ""}`}
          >
            <svg
              className={styles.cake}
              viewBox="0 0 300 200"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect
                x="50"
                y="100"
                width="200"
                height="80"
                rx="20"
                fill="#8B4513"
                stroke="#5A2E0A"
                strokeWidth="2"
              />
              <rect
                x="50"
                y="60"
                width="200"
                height="40"
                rx="20"
                fill="#FFFACD"
                stroke="#DAA520"
                strokeWidth="2"
              />
              <rect
                x="50"
                y="20"
                width="200"
                height="40"
                rx="20"
                fill="#FFFACD"
                stroke="#DAA520"
                strokeWidth="2"
              />
              <circle cx="150" cy="10" r="10" fill="#ff4757" />
              <circle cx="110" cy="10" r="10" fill="#ff4757" />
              <circle cx="190" cy="10" r="10" fill="#ff4757" />
              <path
                d="M90 60 Q100 90 110 60 Q120 90 130 60 Q140 90 150 60 Q160 90 170 60 Q180 90 190 60 Q200 90 210 60"
                fill="none"
                stroke="#FFFACD"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M60 20 Q80 40 100 20 Q120 40 140 20 Q160 40 180 20 Q200 40 220 20"
                fill="none"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>

            <div className={styles.candle}>
              <div className={styles.flame}></div>
            </div>
            <div className={`${styles.candle} ${styles.candle2}`}>
              <div className={styles.flame}></div>
            </div>
            <div className={`${styles.candle} ${styles.candle3}`}>
              <div className={styles.flame}></div>
            </div>
          </div>
        </div>

        {showMessage && (
          <div
            className={`${styles.messageContainer} ${
              showMessage ? styles.bounceIn : ""
            }`}
          >
            <p className={styles.message}>
              Chúc mẹ tuổi mới luôn vui, khỏe mạnh và ví thật dày
              <br />
              Chúc mẹ Vạn sự như ý, tỉ sự như mơ, triệu triệu bất ngờ, không chờ
              cũng đến
              <br />
              <span className={styles.love}>Happy Birth Day</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishPage;
