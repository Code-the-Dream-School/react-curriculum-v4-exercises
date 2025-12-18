import Styles from '../../styles/hero.module.css';

import WordedLogo from '../assets/ctd_worded_logo_720.png';

import CTDDesktop from '../assets/ctd-desktop_720.png';

export function Hero() {
  return (
    <section className={Styles.hero}>
      <img src={CTDDesktop} className={Styles.heroBg} />
      <div className={Styles.heroContainer}>
        <img src={WordedLogo} alt="CTD worded logo" className={Styles.logo} />
        <h1 className={Styles.heroTitle}>Welcome, Future Developer! 🚀</h1>
        <p className={Styles.paragraph}>
          Dive in, explore, and let&#39;s code the dream together!
        </p>
      </div>
    </section>
  );
}
