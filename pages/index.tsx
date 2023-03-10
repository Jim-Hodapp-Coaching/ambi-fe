import Head from 'next/head'
import { Card, Container, Grid } from '@mui/material';

import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <h1 className={styles.title}>
            Welcome to Next.js!
          </h1>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Card variant='outlined'>Temperature</Card>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Card variant='outlined'>Temperature</Card>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Card variant='outlined'>Temperature</Card>
            </Grid>
          </Grid>
        </Container>
      </main>

    </div>
  )
}
