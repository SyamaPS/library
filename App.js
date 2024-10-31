import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import UserHome from "./UserHome";
import AdminHome from "./AdminHome";
import Navbar from "./Navbar";
import {getBooks} from "./api";
 const App = () => {
   const [user, setUser] = React.useState(null);
   const [books, setBooks] = React.useState([]);

   const handleLogin = async(userData) => {
     setUser(userData);
     const fetchedBooks = await getBooks();
     setBooks(fetchedBooks);

   }

   return (
     <Router>
       <Navbar user={user} />
       <Routes>
         <Route path="/login" element={<Login onLogin={handleLogin} />} />
         <Route path="/user-home" element={user?<UserHome books={books} />:<Navigate to="/login" />} />
         <Route path="/admin-home" element={user?.isAdmin?<AdminHome books={books} />:<Navigate to="/login" />} />
       </Routes>
     </Router>
   );
 }

export default App