import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { supabase } from "/supabase";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Zen_Kaku_Gothic_Antique } from 'next/font/google'

const inter = Zen_Kaku_Gothic_Antique({ subsets: ['latin'], weight: "400" })


  export default function ResetPasswordPage() {
    const [state, setState] = useState("default");
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [password, setPassword] = useState("");
      const [passwordRepeat, setPasswordRepeat] = useState("");
    useEffect(() => {
      // Get the access token and refresh token from the URL
      if (typeof window !== "undefined") {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        setAccessToken(hashParams.get("access_token") || "");
        setRefreshToken(hashParams.get("refresh_token") || "");
      }
    }, []);
  
    useEffect(() => {
      // Authenticate the user using the access token and refresh token
      const getSessionWithTokens = async () => {
        if (accessToken && refreshToken) {
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });
  
          if (error) {
            alert(`Error signing in: ${error.message}`);
          }
        }
      };
  
      // Call this function only when accessToken and refreshToken are available.
      if (accessToken && refreshToken) {
        getSessionWithTokens();
      }
    }, [accessToken, refreshToken]);
  
    const handlePasswordUpdate = async (newPassword) => {
      try {
        const { data, error } = await supabase.auth.updateUser({
          password: newPassword,
        });
  
        if (error) {
          throw error;
        }
  
        if (data) {
          alert("Password has been updated successfully!");
        }
      } catch (error) {
        alert(`Error updating password: ${error.message}`);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handlePasswordUpdate(password);
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