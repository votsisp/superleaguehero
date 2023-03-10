import styles from "../../styles/Rules.module.css";
import { useState, useContext } from "react";
import AuthContext from "../../components/Context";
import { useRouter } from "next/router";

export default function Unique() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Κανονες</div>
      <div className={styles.main}>
        <p>Η Χρήση του παιχνιδιού αυτού έχει ώς σκοπό την ψυχαγωγία και όχι τον τζόγο. Για την συμμετοχή ενος ατόμου στην εφαρμογή αυτη, πρέπει να καταβάλει το ποσό που έχει συμφωνηθεί για να πάρει username και κωδικό χρήστη. Το ποσο ειναι για όλη την διάρκεια της χρονιάς.<br/><br/> Η δομή των επάθλων είναι η εξής:<br/> 1. 70%<br/> 2. 30%</p>
        <p>Δ ικαίωμα συμμετοχής έχουν όλοι άνω των 18 ετών εφόσον συμφωνούν με τους κανόνες</p> 
      </div>
      <div className={styles.btn2} onClick={() => router.push("/")}>
        Αρχικη
      </div>
    </div>
  );
}
