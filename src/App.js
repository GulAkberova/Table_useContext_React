import './App.css';
import React,{ useState,useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { tableContext } from './components/TableContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './components/Home'
import Table from './components/Table';
import Wishlist from './components/Wishlist';
import Detail from './components/Detail';

function App() {
  let {all, setAll,value, setValue,loading,setLoading} =useContext(tableContext)

  useEffect(()=>{
    setLoading(true)
    fetch('https://northwind.vercel.app/api/products/')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setAll(data)
      setLoading(false)
    })
  },[value])

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/table' element={<Table/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
     
    </>
  );
}

export default App;
