import React from "react";
import styles from "../styles/Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import AuthContext from "../components/Context";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  return (
    <>
      {user ? (
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src={user.picture}
              alt="My Image"
              objectFit="cover"
              layout="fill"
              quality={65}
            />
          </div>
          <Link href="/choices">
            {router.pathname === "/choices" ? (
              <div className={styles.activepiece}>Παίξε</div>
            ) : (
              <div className={styles.piece}>Παίξε</div>
            )}
          </Link>
          <Link href="/overall">
            {router.pathname === "/overall" ? (
              <div className={styles.activepiece}>Βαθμολογία</div>
            ) : (
              <div className={styles.piece}>Βαθμολογία</div>
            )}
          </Link>
          {/* <Link href="/statistics">
            {router.pathname === "/statistics" ? (
              <div className={styles.activepiece}>Στατιστικά</div>
            ) : (
              <div className={styles.piece}>Στατιστικά</div>
            )}
          </Link> */}
          <Link href="/unique">
            {router.pathname === "/unique" ? (
              <div className={styles.activepiece}>Χρήστης</div>
            ) : (
              <div className={styles.piece}>Χρήστης</div>
            )}
          </Link>
          <Link href="/rules">
            {router.pathname === "/rules" ? (
              <div className={styles.activepiece}>Κανόνες</div>
            ) : (
              <div className={styles.piece}>Κανόνες</div>
            )}
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
