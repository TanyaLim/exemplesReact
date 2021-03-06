import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter,Route} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

function App (props) {
  return (
  <BrowserRouter>
    <div className = 'app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} /> }/>
            <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                          addPost={props.addPost}
                                                          updateNewPostText={updateNewPostText}
            />} />
        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
