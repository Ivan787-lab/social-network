import './App.css';
import Create_header from './header/Header';
import Create_navbar from './navbar/Navbar';
import Create_profile from './profile/Profile';

function App() {
  return (
    <div className = 'wrapper'>
      <Create_header />
      <Create_navbar />
      <Create_profile />
    </div>
  )
}

export default App;
