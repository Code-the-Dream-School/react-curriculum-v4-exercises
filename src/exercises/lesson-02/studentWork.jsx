//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here
import SnackHeader from './SnackHeader';
import SnackList from './SnackList';
import SnackFooter from './SnackFooter';

function SnackRankingApp() {
  return (
    <div>
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}

export default function StudentWork() {
  return (
    <div>
      {/* add JSX here */}
      <SnackRankingApp />
      <p> Student output will go here</p>
    </div>
  );
}
