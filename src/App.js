import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom'
import ShopPage from './pages/shoppage/shoppage.component';


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
