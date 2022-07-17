import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Toolbar from "./components/Toolbar";
import UserProfilePage from "./pages/UserProfilePage";
import AllUsersPage from "./pages/AllUsersPage";
import SingleUserPage from "./pages/SingleUserPage";
import ConversationsPage from "./pages/ConversationsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toolbar/>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegistrationPage/>}/>
          <Route path="/profile" element={<UserProfilePage/>}/>
          <Route path="/users" element={<AllUsersPage/>}/>
          <Route path="/user/:username" element={<SingleUserPage/>}/>
          <Route path="/conversations" element={<ConversationsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
