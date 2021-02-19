import { BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import My_dialogs from './dialogs/Dialogs';
import Create_header from './header/Header';
import Create_navbar from './navbar/Navbar';
import Create_profile from './profile/Profile';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Create_header />
      <Create_navbar />
      <div className="wrapper-content">
        <Route exact path = "/" component = {Create_profile} />
        <Route path = "/profile" component = {Create_profile}/>
        <Route path = "/dialogs" component = {My_dialogs}/>
      </div>
      </ BrowserRouter>
    </div>
  )
}

export default App;
