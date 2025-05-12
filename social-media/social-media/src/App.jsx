import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Userinput from './components/Userinput';
import PostList from './components/PostList';
import { useState } from 'react';

function App() {
   const [OnTab , setOnTab] = useState("Home");
   
   
  return (

    <div className="app-container">
      <Sidebar OnTab={OnTab} setOnTab={setOnTab}/>
      <div className='content'>
        <Header/>
        {(OnTab === "Home") ? (<PostList />) : (<Userinput />)};
        <Footer />
      </div>
    </div>
  )
}

export default App
