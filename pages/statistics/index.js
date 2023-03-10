import styles from "../../styles/Statistics.module.css";
import { useState, useContext } from "react";
import AuthContext from "../../components/Context";
import { useRouter } from "next/router";

export default function Unique({ data }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const newdata = data.data;

  return (
    <div className={styles.container}>
      <div className={styles.matches}>
        {newdata.map((a, i) => {
          return (
            <div className={styles.unique} key={i}>
              <div className={styles.name}>{a.username}</div>
              {a.bet.map((b, index) => {
                return (
                  <div className={styles.match} key={index}>
                    <p>{b.choice}</p><p>{b.result}</p>
                  </div>
                );
              })}
              <div className={styles.date}>{a.createdAt}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.btn2} onClick={() => router.push("/")}>
        Αρχικη
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let res = await fetch(`https://superleaguehero.vercel.app/api/users`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await res.json();

  return { props: { data } };
}
