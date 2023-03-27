import logo from './logo.svg';
import './App.css';
import HeadingComponent from './components/heading';
import ButtonComponent from './components/button';
import SomeComponent from './components/counter';
import CatFacts from './components/catfacts';
import BookFacts from './components/booklist';
import Bookid from './components/booksid';



function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <HeadingComponent name="anu" age={18}/>
        <ButtonComponent/>
        <br>
        </br>
        <SomeComponent/>
        <CatFacts/>
        <BookFacts/>
        <Bookid id="1"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
