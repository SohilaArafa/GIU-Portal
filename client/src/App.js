import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import './App.css';
import View_Grades from './components/View_Grades';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <View_Grades/>
    </div>
  );
}

export default App;
