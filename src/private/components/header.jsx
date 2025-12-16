
import logo from '../assets/ctd_worded_logo_720.png';
import Styles from '../../styles/header.module.css';
import WeekDropdown from './weekDropdown.jsx';

export default function Header() {
  return (
    <header className={Styles.header}>
      <div className= {Styles.container}>
        <a href="/" style={{ display: 'inline-block' }}>
          <img src={logo} alt="CTD Logo" style={{ height: 48 }} />
        </a>
        <WeekDropdown buttonLabel="Lessons" />
      </div>
    </header>
  );
}












// import { Link } from 'react-router-dom';
// import styles from '../../styles/header.css'

// // export default function Header() {
// //   return (
// //     <header>
// //       <h1> CTD React Exercises </h1>
// //       <Link to="/"> Home </Link>
// //     </header>
// //   );
// // }

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.container}>
//         <nav className={styles.nav}>
//           <Link to="/exercises" className={styles.navLink}>
//             Exercises
//           </Link>
//           <button>Get Started</button>
//         </nav>
//       </div>
//     </header>
//   )
// }
