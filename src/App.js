import { BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import My_dialogs from './dialogs/Dialogs';
import Create_header from './header/Header';
import Create_navbar from './navbar/Navbar';
import Create_profile from './profile/Profile';



function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Create_header />
      <Create_navbar />
      <div className="wrapper-content">
        <Route exact path = "/" render = {() => <Create_profile text_of_posts = {props.text_of_posts}/>} />
        <Route path = "/profile" component = {Create_profile}/>
        <Route path = "/dialogs" render = {() => <My_dialogs dialog_name = {props.dialog_name} messages_item = {props.messages_item} />}/>
      </div>
      </ BrowserRouter>
    </div>
  )
}

export default App;
