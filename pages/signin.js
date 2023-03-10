import styles from "../styles/Signin.module.css";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser } from "react-icons/fa";
import AuthContext from "../components/Context.js";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let router = useRouter();
  const { signin, user } = useContext(AuthContext);
  const person = {
    username: username,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(person);
    
  };

  return (
    <div className={styles.container}>
      <h1>
        <FaUser className={styles.user}/>
        Sign in
      </h1>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className={styles.main}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.main}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.btn2}><input type="submit" value="Εισοδος"/></div>
        <div className={styles.btn} onClick={() => router.push('/')}>Αρχικη</div>
      </form>
      
    </div>
  );
}
