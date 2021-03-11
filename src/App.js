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
      <Create_navbar friends = {props.state.sidebar.friends}/>
      <div className="wrapper-content">
        <Route exact path = "/" render = {() => <Create_profile addPost = {props.addPost} text_of_posts = {props.state.profile_page.text_of_posts}/>} />
        <Route path = "/profile" render = {() => <Create_profile addPost = {props.addPost} text_of_posts = {props.state.profile_page.text_of_posts}/>}/>

        <Route path = "/dialogs" render = {() => <My_dialogs addMessage = {props.addMessage} dialog_name = {props.state.dialogs_page.dialog_name} messages_item = {props.state.dialogs_page.messages_item} />}/>
      </div>
      </ BrowserRouter>
    </div>
  )
}

export default App;
