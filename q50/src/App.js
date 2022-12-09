import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MagicNumberComp from './MagicNumberComp';
import {Provider} from 'react-redux'
import store from './redux/store';


function App() {

  return (
    <Provider store={store}> 
<div className="App">

<Router>

  <Routes>
    <Route path="/check-your-magic-number" element={<MagicNumberComp/>} />
    </Routes>
</Router>

</div>
    </Provider>
    
  );
}

export default App;