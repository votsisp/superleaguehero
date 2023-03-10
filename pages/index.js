import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../components/Context.js";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home({ data }) {
  const router = useRouter();
  const newdata = data.data.sort((a, b) => {
    return b.lastScore - a.lastScore;
  });

  const { user, setUser } = useContext(AuthContext);

  const handleChange = (e) => {
    e.preventDefault();
    router.push("/signin");
  };

  return (
    <div className={styles.container2}>
      <div className={styles.main}>
        <h2>
          Superleague<p>Hero</p>
        </h2>
      </div>

      <>
        {user ? (
          <>
            <div className={styles.best}>
              <div className={styles.title}>
                <p>
                  Best Picks <span>of the Week</span>
                </p>
              </div>
              <div className={styles.bestpick}>
                {newdata.map((a, i) => {
                  return (
                    <div key={i} className={styles.king}>
                      <h2 className={styles.cardTitle}>
                        <span>
                          <Image
                            className={styles.photo}
                            src={a.picture}
                            alt="My Image"
                            objectFit="cover"
                            width={30}
                            height={30}
                            priority
                          />
                        </span>
                        {a.lastScore} points
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.enter} onClick={() => setUser()}>
              SignOut
            </div>
          </>
        ) : (
          <div className={styles.enter} onClick={() => router.push("/signin")}>
            Join
          </div>
        )}
      </>
    </div>
  );
}

export async function getServerSideProps() {
  let res = await fetch(`https://stoplekto.vercel.app/api/users`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await res.json();

  return { props: { data } };
}
