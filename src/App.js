import { useSelector } from 'react-redux'
import './App.css';
import Home from './Screens/Home'
import Profile from './Screens/Profile';


function App() {
  const app = useSelector(
    (state) => state.app
  )

  return (
    <div className="wrapper">
      {app.screen === 'home'
        ? <Home/>
        : <Profile/>
      }
      
    </div>
  );
}

export default App;
