import Head from "next/head";
import Dashboard from "./dashboard";

import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ambi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Dashboard></Dashboard>
      </main>
    </div>
  );
}
