import Button from './Button.js';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  //const onClick2 = () => setValue((prev) => prev + 1);
  function onClick2(){
    return(setValue(function(prev){
      return  prev+1;
    })
    );
  }

  //const onChange = (event) => setKeyword(event.target.value);
  function onChange(event){
    return setKeyword(event.target.value);
  }

  // 처음 실행시에 한번만 실행하고 다시는 하지말아라.
  useEffect(() => (
      console.log("Call the API...!!")
  ),[]);
  useEffect(()=>{
    if(keyword != "" && keyword.length > 5){
      console.log("Search For...!!",keyword);
    }
  },[keyword]);
  useEffect(()=>{
    if(counter > 10){
      console.log("Click the Button",counter);
    }
  },[counter]);

  useEffect(()=>{
      console.log("Search Together");
  },[keyword,counter]);

  const [showing, setShowing] = useState(false);

  const onShowClick = () => setShowing((prev) => !prev);

  function Hello() {
    useEffect(() => {
      console.log("hi!!!!");
      return () => console.log("byebye!!");
    }, []);
    return <h1>Hello</h1>;

/*     useEffect(function(){
      console.log("hi!!");
      return function(){
        console.log("byebye");
      }
    }, []) */

/*     function byFn() {
      console.log("bye");
    }ss
    function hiFn(){
      console.log("hi");
      return byFn;
    }
    useEffect(hiFn,[]); */

  }


  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='Searcr'/>
      <h1>{counter}</h1>
      <button onClick={onClick2}>Click me!!</button>
      <hr></hr>
      {showing ? <Hello/> : null}
      <button onClick={onShowClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
 