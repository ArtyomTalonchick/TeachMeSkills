import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from "./header/Header";
import Menu from "./menu/Menu";
import LoginPage from './loginPage/LoginPage';
import Clicker from "./clicker/Clicker";
import UsersPage from "./usersPage/UsersPage";
import UserPage from "./userPage/UserPage";
import { withTheme } from '../hoc/withTheme';
import AuthContext from './contexts/AuthContext';

import "./App.scss";

function App({setThemeFromStore}) {
  const [me, setMeToState] = useState(JSON.parse(localStorage.getItem("me")));

  const setMe = (me) => {
    localStorage.setItem("me", JSON.stringify(me));
    setMeToState(me);
  }

  useEffect(() => setThemeFromStore(), []);

  return (
    <AuthContext.Provider value={{me, setMe}}>
      <div className="app">
        <Header/>

        <div className="app_page">
          <Menu/>

          <main className="app__main">

            <Routes>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/clicker' element={<Clicker/>}/>
              <Route path='/users' element={<UsersPage/>}/>
              <Route path='/users/:login' element={<UserPage/>}/>
            </Routes>
      
          </main>
        </div>
        
      </div>
    </AuthContext.Provider>
  );
}

export default withTheme(App);
