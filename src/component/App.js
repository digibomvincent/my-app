import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import '../css/App.css';
import Input from './Input';
import '../all.scss';
import $ from "jquery";

function App() {
  const [text, setText] = useState('請輸入');
  const onChangeHandler = (e) => {
    setText(e.target.value)
  }
  //網頁初始化執行
  useEffect(() => {
    (async () => {
      const result = await axios.get('https://randomuser.me/api/');
      console.log(result);
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div id='show'></div>
        <button type="button" className="btn btn-danger" onClick={()=>{
          $(function(){
            $('#show').text('jq')
          });
        }}>danger</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input id="demoText" text="帳號" value={text} onChangeHandler={onChangeHandler} />
      </header>
    </div>
  );
}

export default App;
