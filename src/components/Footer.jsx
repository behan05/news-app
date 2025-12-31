import React from "react";
import Link from "next/link";
import styles from "../style/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.brand}>
          <h3 className={styles.logo}>NewsNest</h3>
          <p className={styles.tagline}>
            Write freely. Share your thoughts. Be yourself.
          </p>
        </div>

        {/* Center */}
        <div className={styles.links}>
          <Link href="#" className={styles.link}>About</Link>
          <Link href="#" className={styles.link}>Privacy</Link>
          <Link href="#" className={styles.link}>Terms</Link>
          <Link href="#" className={styles.link}>Contact</Link>
        </div>

        {/* Right */}
        <div className={styles.copy}>
          © {new Date().getFullYear()} NewsNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
