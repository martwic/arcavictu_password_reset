import { useRouter } from "next/router";
import { useState, FormEventHandler } from "react";
import { supabase } from "/supabase";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Zen_Kaku_Gothic_Antique } from 'next/font/google'

const inter = Zen_Kaku_Gothic_Antique({ subsets: ['latin'], weight: "400" })

export default function HomePage() {


  return (
    <div className={styles.container}>
    <Head>
      <title>ArcaVictu</title>
      <link rel="icon" href="/logo_kolor.png" />
    </Head>
    <main className={styles.main}>
    <h1 className={styles.title}>
          <img src='/logo_kolor.png' className={styles.logo} />
          <a className={inter.className}>  ArcaVictu</a>
        </h1>

      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}