import Link from "next/link";
import styles from "./Termini.module.css";
import AddTermin from "./AddTermin";

async function getTermini() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/termini/records?page=1&perPage=30",
    { cache: "no-store" }
  );

  const data = await res?.json();
  return data?.items as any[];
}

export default async function Termini() {
  const termini = await getTermini();
  return (
    <div>
      <div className={styles.grid}>
        {termini?.map((termin: any) => {
          return (
            <Termin
              termin={termin}
              key={termin.id}
              id={termin.id}
              name={termin.name}
              time={termin.time}
            />
          );
        })}
      </div>
      <AddTermin />
    </div>
  );
}

function Termin({ termin }: any) {
  const { id, name, time } = termin || {};
  return (
    <Link href={`/termini/${id}`} className={styles.termin}>
      <h2>{name}</h2>
      <h3>{time}</h3>
    </Link>
  );
}
