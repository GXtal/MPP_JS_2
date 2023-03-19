import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import OperatorInfo from './pages/OperatorInfo';
import OperatorList from './pages/OperatorList';
import Header from "./partials/Header";

class App extends React.Component{  

  render() {
    return <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/operators" element={<OperatorList/>}/>
            <Route path="/operator/:id" element={<OperatorInfo/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  }
}

export default App

