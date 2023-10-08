

import { Route, Routes } from 'react-router-dom';
import './App.css';

import Signup from './jsx/Signup';
import Signin from './jsx/Signin';
import ImageSlider from './jsx/ImageSlider';
// import ButtonAppBar from './jsx/AppBar';
// import Forgot from './jsx/Forgot';
 import Home  from './jsx/Home';
 import Forgot from './jsx/Forgot';
// import AppBar from './jsx/AppBar';
// import Footer from './jsx/Footer';
import AdminLogin from './jsx/AdminLogin';
// import Adminpanel from './jsx/Adminpanel';
// import LoginPage from './jsx/sample';
// import {Route,Routes} from 'react-router-dom';
import ManageLaptop from './jsx/ManageLaptop';
import AdminDashboard from './jsx/AdminDashboard';
// import ManageUser from './jsx/ManageUser';
// import { Route, Routes } from 'react-router-dom';
// import AdminList from './jsx/AdminList';
import AdminUpdateLaptop from './jsx/AdminUpdateLaptop';
import AdminManageUser from './jsx/AdminManageUser';
import AdminManageLaptop from './jsx/AdminManageLaptop';
import AdminPostLaptop from './jsx/AdminPostLaptop';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/forgot" element={<Forgot/>}></Route>
        <Route path="/admin" element={<AdminLogin/>}></Route>
        <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
        <Route path="/adminuser" element={<AdminManageUser/>}></Route>
        <Route path="/adminpostlaptop" element={<AdminPostLaptop/>}></Route>
        <Route path="/adminmanagelaptop" element={<AdminManageLaptop/>}></Route>
        <Route path="/adminupdatelaptop/:modelid" element={<AdminUpdateLaptop/>}></Route>
        <Route path="/managelaptop" element={<ManageLaptop/>}></Route>
        <Route path="/imgs" element={<ImageSlider/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
