import Head from "next/head";
import { Container } from "@mui/material";
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
        <Container>
          <Dashboard></Dashboard>
        </Container>
      </main>
    </div>
  );
}
