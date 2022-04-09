import React, { useEffect, useState } from 'react';
import Header from './component/header/Header';
import Registration from './component/registration/Registration';
import Login from './component/login/Login';
import Posts from './component/posts/Posts';

import './App.scss';
import LanguageContext from './contexts/LanguageContext';

const App: React.FC = () => {
  const [lang, setLang] = useState("ru");

  return (
    <LanguageContext.Provider value={{lang, setLang}}>
      <div className="app-container">
          <Header/>
        <div className="app-content">
          {/* <Registration/> */}

            <Login/>

          {/* <Posts/> */}
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
