import Head from 'next/head'
import { Div, Text } from "atomize";
import Navigation from '../components/navigation';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Div>
      <Head>
        <title>Next.js Ghost Starter</title>
        <meta name="description" content="Next.js Ghost starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main className={styles.main}>
        <h1 className={styles.title}>
           Next.js + Ghost boilerplate
        </h1>

        

        <div className={styles.grid}>
          <a href="https://github.com/skarthikeyan96/nextjs-ghost-boilerplate" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Find source code.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          <Text tag='p' style={{fontSize: '1rem'}}>  Built in ❤️ with Next.js </Text> 
        </span>
      </footer>
    </Div>
  )
}
