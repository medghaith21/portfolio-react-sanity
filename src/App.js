import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import Post from './components/Post'
import About from './components/About'
import Home from './components/Home'
import Project from './components/Project'
import SinglePost from './components/SinglePost'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/post/:slug" component={SinglePost} />
        <Route path="/post" component={Post} />
        <Route path="/project" component={Project} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
