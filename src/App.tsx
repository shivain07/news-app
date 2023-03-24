import './App.css';
import { Switch, Route } from 'react-router-dom';
import PagesContainer from './containers/PagesContainer';
import Bookmarks from './screens/Bookmarks';
import Home from './screens/Home';

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' render={(props) => (
            <PagesContainer>
              <Home />
            </PagesContainer>
          )} />
          <Route path='/bookmarks' render={(props) => (
            <PagesContainer>
              <Bookmarks />
            </PagesContainer>
          )} />
        </Switch>
      </div>
    </>
  );
}

export default App;
