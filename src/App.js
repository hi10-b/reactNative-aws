import './App.css';
import Login from './components/Auth/Login';
import Main from './components/navigation/main';
import NavigationBar from './components/navigation/navBar';

function App() {
  return (
    <div className="App">
      {/* <h1>it works</h1> */}
      <NavigationBar />
      <Main />
    </div>
  );
}

export default App;
