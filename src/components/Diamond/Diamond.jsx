import React, { useState, useEffect } from 'react';
import styles from './Diamond.module.scss';
// import diamondSvg from '../../assets/diamond/diamond.svg';

const Diamond = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [showCount, setShowCount] = useState(false);

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
    setCount(0);
  };

  return (
    <div className={styles.diamond} onClick={handleIconClick}>
      {/* <img src={diamondSvg} className={styles.icon} alt="Diamond" />z */}
      <div className={styles.text_Block}>
        {showCount && (
          <span className={styles.text}>{count}</span>
        )}
        {!showCount && (
          <span className={styles.text}>Go!</span>
        )}
      </div>

    </div>
  );
};

export default Diamond;

