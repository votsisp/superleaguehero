import styles from "../../styles/Choices.module.css";
import { useRouter } from "next/router";


export default function NextWeek() {
  const data = require("../../components/matches.JSON");
  const matchday = data.matches[9];
  const router = useRouter()
  
  

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Επομενη Εβδομαδα</h1>
      </div>
      <div className={styles.matches}>
        {matchday.map((item, index) => {
          return (
            <div key={index} className={styles.fixture}>
              <div className={styles.text}>{item}</div>
              
            </div>
          );
        })}
      </div>
    
      <div className={styles.btn} onClick={() => router.push("/")}>
        Αρχικη
      </div>
    </div>
  );
}
