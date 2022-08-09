import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from './header'

export default function Home(): JSX.Element {
  return (
    <>
    <Header />
    <div className={styles.container}>
      <Head>
        <title>Marrocos</title>
        <meta name="description" content="Powered by Marrocos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Título <a>destaque</a>
        </h1>

        <p className={styles.description}>
          Descrição
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Card 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, accusantium minima officia iusto quos eius magnam officiis cumque adipisci sit numquam possimus neque provident rem sapiente amet atque! Nemo, voluptates.</p>
          </a>

          <a className={styles.card}>
            <h2>Card 2</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi harum neque consequatur qui quam, animi, sint mollitia reiciendis, esse cupiditate excepturi? Perspiciatis ab quos veniam voluptatem cumque saepe nemo hic.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://hmarrocos.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Distribuído por{''}
          <span className={styles.logo}>
            <Image src="/favicon-16x16.png" alt="Marrocos Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </>
  );
}
