import styles from "../../styles/Overall.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsTrophyFill } from "react-icons/bs";

export default function Overall({ data }) {
  const router = useRouter();

  const newdata = data.data.sort((a, b) => {
    return b.score - a.score;
  });

  const restdata = newdata.slice(3);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Βαθμολογια Πρωταθληματος</h1>
      </div>
      <div className={styles.matches}>
        <div className={styles.king1}>
          <h2 className={styles.cardTitle}>
            <BsTrophyFill className={styles.cup} />
            <span>
              <Image
                className={styles.photo}
                src={newdata[0].picture}
                alt="My Image"
                objectFit="cover"
                width={30}
                height={30}
                priority
              />
            </span>
            <div className={styles.userscore}>
              <p>{newdata[0].username}</p>
              <p>
                {newdata[0].score} ({newdata[0].lastScore})
              </p>
            </div>
          </h2>
          <div className={styles.cardBody}>
            {newdata[0].bet ? (
              newdata[0].bet.map((a, b) => {
                return (
                  <h5 key={b}>
                    {a.choice} {a.result}
                  </h5>
                );
              })
            ) : (
              <></>
            )}
          </div>

          <div className={styles.date_card}>
            <h3>{newdata[0].createdAt}</h3>
          </div>
        </div>
        <div className={styles.king2}>
          <h2 className={styles.cardTitle}>
            <BsTrophyFill className={styles.cup2} />
            <span>
              <Image
                className={styles.photo}
                src={newdata[1].picture}
                alt="My Image"
                objectFit="cover"
                width={30}
                height={30}
                priority
              />
            </span>
            <div className={styles.userscore}>
              <p>{newdata[1].username}</p>
              <p>
                {newdata[1].score} ({newdata[1].lastScore})
              </p>
            </div>
          </h2>
          <div className={styles.cardBody}>
            {newdata[1].bet ? (
              newdata[1].bet.map((a, b) => {
                return (
                  <h5 key={b}>
                    {a.choice} {a.result}
                  </h5>
                );
              })
            ) : (
              <></>
            )}
          </div>

          <div className={styles.date_card}>
            <h3>{newdata[1].createdAt}</h3>
          </div>
        </div>
        <div className={styles.king3}>
          <h2 className={styles.cardTitle}>
            <BsTrophyFill className={styles.cup3} />
            <span>
              <Image
                className={styles.photo}
                src={newdata[2].picture}
                alt="My Image"
                objectFit="cover"
                width={30}
                height={30}
                priority
              />
            </span>
            <div className={styles.userscore}>
              <p>{newdata[2].username}</p>
              <p>
                {newdata[2].score} ({newdata[2].lastScore})
              </p>
            </div>
          </h2>
          <div className={styles.cardBody}>
            {newdata[2].bet ? (
              newdata[2].bet.map((a, b) => {
                return (
                  <h5 key={b}>
                    {a.choice} {a.result}
                  </h5>
                );
              })
            ) : (
              <></>
            )}
          </div>

          <div className={styles.date_card}>
            <h3>{newdata[2].createdAt}</h3>
          </div>
        </div>
        {restdata.map((item, index) => {
          return (
            <div key={index} className={styles.king}>
              <h2 className={styles.cardTitle}>
                <span>
                  <Image
                    className={styles.photo}
                    src={item.picture}
                    alt="My Image"
                    objectFit="cover"
                    width={30}
                    height={30}
                    priority
                  />
                </span>
                <div className={styles.userscore}>
                  <p>{item.username}</p>
                  <p>
                    {item.score} ({item.lastScore})
                  </p>
                </div>
              </h2>
              <div className={styles.cardBody}>
                {item.bet ? (
                  item.bet.map((a, b) => {
                    return (
                      <h5 key={b}>
                        {a.choice} {a.result}
                      </h5>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>

              <div className={styles.date_card}>
                <h3>{item.createdAt}</h3>
              </div>
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
  let res = await fetch(`https://superleaguehero.com/api/users`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await res.json();

  return { props: { data } };
}
