// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import React, { useState } from 'react'
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setalert(null);
      }, 3000);
  }

  const toggleMode=()=>{
    if(mode=== 'light'){
      setmode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
   <>
   {/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
{/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
        </Switch> */}



    {/* <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
      <Route path="/about" element={<About />} />
    </Routes> */}

</div>
{/* </Router> */}
   </>
  );
}

export default App;
