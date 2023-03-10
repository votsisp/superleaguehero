import styles from "../../styles/Unique.module.css";
import { useState, useContext } from "react";
import AuthContext from "../../components/Context";
import { useRouter } from "next/router";

export default function Unique() {
  const router = useRouter();
  const { user, users } = useContext(AuthContext);
  console.log(users);

  return (
    <div className={styles.container}>
      {user ? (
        <div className={styles.main}>
          <div className={styles.statistics1}>
            <div className={styles.position}>1st</div>
          </div>
          <div className={styles.statistics2}>
            <div className={styles.mymatch}>
              {user.bet.map((b, index) => {
                return (
                  <div className={styles.match} key={index}>
                    <p>{b.choice}</p>
                    <p>{b.result}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.statistics3}>
            <h2>{user.score}pts</h2>
          </div>
          <div className={styles.statistics4}>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.btn2} onClick={() => router.push("/")}>
        Αρχικη
      </div>
    </div>
  );
}
