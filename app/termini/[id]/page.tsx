import styles from "../Termini.module.css";

async function getTermin(terminId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/termini/records/${terminId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data as any;
}

export default async function TerminPage({ params }: any) {
  const termin = await getTermin(params.id);
  return (
    <div>
      <h1>Termin:</h1>
      <div className={styles.termin}>
        <h3>{termin.name}</h3>
        <h5>{termin.time}</h5>
      </div>
    </div>
  );
}
