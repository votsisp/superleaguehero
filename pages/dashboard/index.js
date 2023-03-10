import styles from "../../styles/Dashboard.module.css";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import AuthContext from "../../components/Context.js";

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [addScore, setAddScore] = useState(0);

  const { addScores } = useContext(AuthContext)

  let person = {
    username: user,
    addScore: addScore,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addScores(person)
  };

  
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <label>
            UserName
            <input
              type="text"
              name="username"
              value={user || ""}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <label>
            New Score
            <input
              type="number"
              name="addScore"
              value={addScore || ""}
              onChange={(e) => setAddScore(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}


