import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

function App({data: {dialogsPage, profilePage}, dispatch}) {
  return (
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile posts={profilePage.posts} dispatch={dispatch} newPostText={profilePage.newPostText}/>}/>
            <Route path="/dialogs/*" element={<Dialogs dialogsPage={dialogsPage} dispatch={dispatch}/>} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
