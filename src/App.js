import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom'

const HatPage = () =>(
  <div className='hats'>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={HatPage}/>
    </div>
  );
}

export default App;
