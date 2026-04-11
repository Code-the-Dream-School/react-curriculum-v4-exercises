//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here

import SnackFooter from './SnackFooter';
import SnackHeader from './SnackHeader';
import SnackList from './SnackList';

export default function StudentWork() {
  return (
    <div>
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}
