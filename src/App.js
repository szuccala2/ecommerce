import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path='/tw'
        component={() => { 
          window.location = 'https://theuselessweb.com/';
          return null;}}/>
      <Route path="/prod/:id" component={ProductDetails} />
      <Route path="/" component={ProductList} />
    </Switch>
  );
}

export default App;
