import logo from './logo.svg';
import './App.css';
import Login from './Login'
import LoginClass from './LoginClass'
import  { BrowserRouter, Route, Switch }  from  'react-router-dom';


function App() {

  return (
    <div className="App">
      
<BrowserRouter>
<Switch>
<Route exact={true} path="/">
<LoginClass></LoginClass>
</Route>
  <Route path="/home">
<Login></Login>
</Route>
<Route path="/login2">
<Login></Login>
</Route>
</Switch>
</BrowserRouter>
      
    </div>
  );
}

export default App;
