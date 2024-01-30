import { useRouter } from "next/router";
import { useState, FormEventHandler } from "react";
import { supabase } from "/supabase";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Zen_Kaku_Gothic_Antique } from 'next/font/google'

const inter = Zen_Kaku_Gothic_Antique({ subsets: ['latin'], weight: "400" })

export default function PasswordRecoveryPage() {
  const [state, setState] = useState("default");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const router = useRouter();

  const accessToken = router.query.access_token;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      alert("Hasła nie są identyczne.");
      return;
    }
    setState("resetting");
    supabase
      .updateUser(accessToken, { password })
      .then(() => {
        router.push("/pages/index copy.js");
      })
      .catch(() => {
        alert(t("Token wygasł"));
        setState("default");
      });
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
        <form onSubmit={handleSubmit}>
          <p className={styles.description}>{"Reset hasła"}</p>
          <input className={styles.input} type="password"
            placeholder={"hasło"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className={styles.input} type="password"
              placeholder={"powtórz hasło"}
              error={password !== passwordRepeat}
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
            <input className={styles.submit}
              fullWidth
              type="submit"
              value="Zresetuj"
              loading={state === "resetting"}
              disabled={state === "resetting"}
            />
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