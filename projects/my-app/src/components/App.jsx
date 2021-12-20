import { Routes, Route } from 'react-router-dom'

import Header from "./header/Header";
import Menu from "./menu/Menu";
import { Clicker } from "./clicker/Clicker";
import { UsersPage } from "./usersPage/UsersPage";
import UserPage from "./userPage/UserPage";

import "./App.scss";

function App() {

  const isUserPage = true;

  return (
    <div className="app">
      <Header/>

      <div className="app_page">
        <Menu/>

        <main className="app__main">

          <Routes>
            <Route path='/clicker' element={<Clicker/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path='/users/:login' element={<UserPage/>}/>
            {/* <Route path='/repositories' element={<UsersPage/>}/> */}
            {/* <Route path='/accounts' element={<UsersPage/>}/> */}
          </Routes>
    

          {/* {isUserPage
            ?
            <UsersPage/>
            :
            <div>Empty Page</div>
          } */}
        </main>
      </div>
      
    </div>
  );
}

export default App;
