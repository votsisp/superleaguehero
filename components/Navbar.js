import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { BsPersonLinesFill } from "react-icons/bs";
import { useState, useContext } from "react";
import AuthContext from "../components/Context";
import Link from "next/link";

export default function Navbar() {
  const { changeScreen, setChangeScreen, user} = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>
          Superleague
          <br />
          <p>Hero</p>
        </div>
      </Link>
      {user ? (
      <div
        className={styles.lines}
        onClick={() => setChangeScreen(!changeScreen)}
      > 
        <BsPersonLinesFill className={styles.user}/>
      </div>
      ) : (<></>)}
    </div>
  );
}
