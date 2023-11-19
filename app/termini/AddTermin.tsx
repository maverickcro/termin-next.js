"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Termini.module.css";

export default function AddTermin() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const router = useRouter();
  const add = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/termini/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        time,
      }),
    });
    setName("");
    setTime("");
    router.refresh();
  };
  return (
    <form onSubmit={add} className={styles.form}>
      <h3>Dodaj novi termin:</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="Ime termina - Lokacija"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Vrijeme termina"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Dodaj termin!
      </button>
    </form>
  );
}
