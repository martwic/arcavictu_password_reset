import React, { useState } from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Zen_Kaku_Gothic_Antique } from 'next/font/google'

const inter = Zen_Kaku_Gothic_Antique({ subsets: ['latin'], weight: "400" })
export default function Home() {
  const [email, setemail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = _supabase.auth.resetPasswordForEmail(theEmail, {
      redirectTo: 'https://localhost:3000/reset-password',
    });
    console.log(data);

    if (error) {
      alert('Error resetting password: ' + error.message);
    } else {
      alert(`Recovery instructions sent to ${theEmail}. Please check your spam folder.`)
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>ArcaVictu - reset hasła</title>
        <link rel="icon" href="/logo_kolor.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <img src='/logo_kolor.png' className={styles.logo} />
          <a className={inter.className}>  ArcaVictu</a>
        </h1>

        <p className={styles.description}>
          Aby otrzymać link do zmiany hasła, wpisz swój adres email i zatwierdź.
        </p>
        <form onSubmit={handleSubmit} method='post'>
          <input className={styles.input} type="email" required value={email} onChange={(e) => setemail(e.target.value)} />
          <input className={styles.submit} type="submit" value="Wyślij link" />
        </form>
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
