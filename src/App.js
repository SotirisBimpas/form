import React from 'react'
import './App.css';
import NewForm from './NewForm'
import Provider from './context/Provider'
import UserInfo from './UserInfo';



function App() {
  return (
    <Provider>
    <div className="App">
        <NewForm />
        <UserInfo />
    </div>
    </Provider>
  );
}

export default App;
