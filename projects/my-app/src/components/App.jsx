import Header from "./header/Header";
import Menu from "./menu/Menu";
// import { Clicker } from "./clicker/Clicker";
import { UsersPage } from "./usersPage/UsersPage";

import "./App.scss";

function App() {

  const isUserPage = true;

  return (
    <div className="app">

      
      <Header/>

      <div className="app_page">
        <Menu/>

        <main className="app__main">
          {/* <Clicker/> */}

          {isUserPage
            ?
            <UsersPage/>
            :
            <div>Empty Page</div>
          }
        </main>
      </div>
      
    </div>
  );
}

export default App;
