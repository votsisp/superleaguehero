import styles from "../../styles/Choices.module.css";
import { useState, useContext } from "react";
import AuthContext from "../../components/Context";
import { useRouter } from "next/router";

export default function Choices() {

  const agonas = 25;
  const data = require("../../components/matches.JSON");
  const { addBet, user, setUser } = useContext(AuthContext);
  const matchday = data.matches[agonas];
  const [choice, setChoice] = useState("");
  const [result, setResult] = useState("");
  const [bet, setBet] = useState([]);
  const router = useRouter();

  const handlePush = (e) => {
    e.preventDefault();

    const createdAt = new Date().toString();
    const person = {
      username: user.username,
      bet,
      createdAt,
    };

    addBet(person);
    setUser("");
    router.push("/");
  };

  const handleRemove = (index) => {
    const values = [...bet];
    values.splice(index, 1);
    setBet(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBet([...bet, { choice, result }]);
  };
  console.log(bet);

  return (
    <div className={styles.container}>
      <div className={styles.matches}>
        {user ? <h2 className={styles.username}><p>{user.username}</p>{user.score}<p></p></h2> : <h2 className={styles.username}><p>Astakos</p><p>Score: 251</p></h2>}
        <h3 className={styles.matchday}>SuperLeague Greece Matchday {agonas +1 }</h3>
        {matchday.map((item, index) => {
          return (
            <form
              key={index}
              className={styles.fixture}
              onSubmit={handleSubmit}
            >
              <div className={styles.text}>{item}</div>
              {result === "1" && choice === item ? (
                <div
                  className={styles.activeace}
                  onClick={() => {
                    setChoice(item);
                    setResult("1");
                  }}
                >
                  1
                </div>
              ) : (
                <div
                  className={styles.ace}
                  onClick={() => {
                    setChoice(item);
                    setResult("1");
                  }}
                >
                  1
                </div>
              )}
              {result === "X" && choice === item ? (
                <div
                  className={styles.activeace}
                  onClick={() => {
                    setChoice(item);
                    setResult("X");
                  }}
                >
                  X
                </div>
              ) : (
                <div
                  className={styles.ace}
                  onClick={() => {
                    setChoice(item);
                    setResult("X");
                  }}
                >
                  X
                </div>
              )}
              {result === "2" && choice === item ? (
                <div
                  className={styles.activeace}
                  onClick={() => {
                    setChoice(item);
                    setResult("2");
                  }}
                >
                  2
                </div>
              ) : (
                <div
                  className={styles.ace}
                  onClick={() => {
                    setChoice(item);
                    setResult("2");
                  }}
                >
                  2
                </div>
              )}
              <div className={styles.ok}><input type="submit" value="ok"/></div>
              <div className={styles.notok} onClick={() => handleRemove(index)}>
                X
              </div>
            </form>
          );
        })}
        <div className={styles.holebet}>
          <h3>MyBet</h3>
          {bet.map((item, index) => {
            return (
              <div key={index} className={styles.matchboard}>
                <h4>{item.choice}</h4>
                <h4>{item.result}</h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.play} onClick={handlePush}>
        Παιξε
      </div>
      <div className={styles.btn} onClick={() => router.push("/")}>
        Αρχικη
      </div>
    </div>
  );
}
