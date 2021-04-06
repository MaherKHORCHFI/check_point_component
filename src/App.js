import './App.css';
import UserPhoto from './Component/Profile/ProfilPhoto';
import UserName from './Component/Profile/FullName';
import UserAddress from './Component/Profile/Address';
import MyNavbar from './Component/Profile/NavBar';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <UserPhoto/>
      <UserName/>
      <UserAddress/>

    </div>
  );
}

export default App;
