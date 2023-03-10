import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Image from "next/image";
import AuthContext from "./Context";
import { useContext } from "react";
import { useRouter } from "next/router";
import useDimensions from "react-cool-dimensions";

function Layout({ children }) {
  const { changeScreen, setChangeScreen, user } = useContext(AuthContext);
  const router = useRouter();

 

  return (
    <div className={styles.container}>
      <Head>
        <title>StoPlekto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      {changeScreen ? (
        <div className={styles.fullscreen}>
          <div className={styles.image}>
            <Image
              src={user.picture}
              alt="My Image"
              layout="fill"
              objectFit='contain'
              quality={100}
            />
          </div>
          <Link href="/choices">
            <div
              className={styles.piece}
              onClick={() => setChangeScreen(!changeScreen)}
            >
              Παίξε
            </div>
          </Link>
          <Link href="/overall">
            <div
              className={styles.piece}
              onClick={() => setChangeScreen(!changeScreen)}
            >
              Βαθμολογία
            </div>
          </Link>
         {/*  <Link href="/statistics">
            <div
              className={styles.piece}
              onClick={() => setChangeScreen(!changeScreen)}
            >
              Στατιστικά
            </div>
          </Link> */}
          <Link href="/unique">
            <div
              className={styles.piece}
              onClick={() => setChangeScreen(!changeScreen)}
            >
              Χρήστης
            </div>
          </Link>
          <Link href="/rules">
            <div
              className={styles.piece}
              onClick={() => setChangeScreen(!changeScreen)}
            >
              Κανόνες
            </div>
          </Link>
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.wrapper}>{children}</div>
        </div>
      )}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
