import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h2>IamBanky linktree</h2>
      </header>
      <main className={styles.main}>
        <a className={styles.button} href="https://facebook.com/IamBanky">Facebook</a>
        <a className={styles.button} href="https://www.instagram.com/iam.banky">Instagram</a>
        <a className={styles.button} href="https://twitter.com/CallMeBanky">Twitter</a>
        <a className={styles.button} href="https://discord.com/users/784066460627632148">Discord</a>
        <a className={styles.button} href="https://www.twitch.tv/iambanky">Twitch</a>
        <a className={styles.button} href="https://locket.camera/links/zXjafyizLfQfBzZv5">Locket</a>
        <a className={styles.button} href="https://github.com/BankTNBD">Github</a>

      </main>
      <footer className={styles.footer}>
        <p>@IamBanky.com</p>
      </footer>
    </div>
  );
}
