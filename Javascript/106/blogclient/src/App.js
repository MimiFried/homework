import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import AddPost from './AddPost';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Posts />
        </Route>
        <Route path="/AddPost">
          <AddPost />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
