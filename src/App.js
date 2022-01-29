import { Routes, Route } from "react-router-dom";
import "./App.css";
//import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from "./components/users/UsersContainer";

//function App({data: {dialogsPage, profilePage}, dispatch}) {
  
function App() {
  return (
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            {/* <Route path="/profile" element={<Profile posts={profilePage.posts} dispatch={dispatch} newPostText={profilePage.newPostText}/>}/>
            <Route path="/dialogs/*" element={<DialogsContainer dialogsPage={dialogsPage} dispatch={dispatch}/>} /> */}
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
            <Route path="/users" element={<UsersContainer/>}/>
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
