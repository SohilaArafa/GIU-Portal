import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';


function App() {

  return (
    <Provider store={store}> 
    <div className="App">
      <AppNavbar />
    </div>
    </Provider>
  );
  
}


export default App;
