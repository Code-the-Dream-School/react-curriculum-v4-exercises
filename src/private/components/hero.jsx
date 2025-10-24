import Styles from '../../styles/hero.module.css';

export function Hero() {

    return (
        <section className={Styles.hero}>
            <div className={Styles.heroContainer}>
                <h1 className={Styles.heroTitle}>
                    Welcome, Future Developer! 🚀
                </h1>
                <p className={Styles.paragraph}>
                    Each weeek brings an amazing Challenge, Thes excercises are designed to help you build your skills step by step. Dive in, explore, and let's code the dream together!
                </p>
                <div className={Styles.buttonContainer}>
                    <button className={Styles.primaryButton}>
                        Start this weeks excercises
                    </button>
                    <button className= {Styles.secondaryButton}>
                        Keep Tracking your progress
                    </button>
                    
                </div>
            </div>

        </section>
    )

}