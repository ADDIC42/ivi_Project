import React, { useState, useEffect } from "react";
import styles from "./Diamond.module.scss";

const Diamond = () => {
  const [count, setCount] = useState(1);
  const [isCounting, setIsCounting] = useState(false);
  const [showCount, setShowCount] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (isCounting) {
      interval = setInterval(() => {
        if (count === 3) {
          setIsCounting(false);
          setShowCount(false);
        } else {
          setCount(count + 1);
          setShowCount(true);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count, isCounting]);

  const handleIconClick = () => {
    setIsCounting(true);
    setShowCount(true);
    setCount(1);
  };

  const handleMouseEnter = () => {
    if (isCounting) {
      document.body.style.backgroundColor = "#000000";
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    document.body.style.backgroundColor = "white";
    setIsHovered(false);
  };

  useEffect(() => {
    if (!isCounting && !isHovered) {
      document.body.style.backgroundColor = "white";
    }
  }, [isCounting, isHovered]);

  return (
    <div className={styles.Container_diamond} onClick={handleIconClick}>
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={styles.diamond}
      >
        {showCount && <span className={styles.text}>{count}</span>}
        {!showCount && <span className={styles.text}>Go!</span>}
      </div>
    </div>
  );
};

export default Diamond;
