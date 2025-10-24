
import Styles from '../../styles/weekly-exercises.module.css';

const weeklyLessons = [
  { slug: 'week-01', title: 'Week 01: Introduction to React' },
  { slug: 'week-02', title: 'Week 02:' },
  { slug: 'week-03', title: 'Week 03:' },
  { slug: 'week-04', title: 'Week 04:' },
  { slug: 'week-05', title: 'Week 05:' },
  { slug: 'week-06', title: 'Week 06:' },
  { slug: 'week-07', title: 'Week 07:' },
  { slug: 'week-08', title: 'Week 08:' },
  { slug: 'week-09', title: 'Week 09:' },
  { slug: 'week-10', title: 'Week 10:' },
  { slug: 'week-11', title: 'Week 11:' },
];


export default function WeeklyExercises() {


    return (
        <section className={Styles.section}>
            <div className={Styles.container}>
                <h2 className={Styles.title}>Weekly Exercises</h2>
                <p className={Styles.description}>Practice your React skills with our weekly exercises to reinforce your learing and build the confidence you need to succeed as a developer.</p>
                <div className={Styles.card}>
                    <div className={Styles.cardHeader}>
                        <h3 className="card-title">
                            Select your lesson
                        </h3>
                        <p className="card-text">
                            choose a week to start practicing
                        </p>
                        <div>
                            <select >
                                <option value=""> Select a weekly lesson </option>
                                {weeklyLessons.map(({ slug, title }) => (
                                    <option key={slug} value={slug}> {title} </option>
                                ))} 
                                </select>  
                                
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


}


