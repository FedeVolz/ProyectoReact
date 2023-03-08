
import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BasicExample from './components/CardPan/CardPan';
import './App.css'
import CardPan from './components/CardPan/CardPan';
import CardLeche from './components/CardLeche/CardLeche';
import CardYerba from './components/CardYerba/CardYerba';

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Yo te conozco"} />
      <div className='cards'>
        <CardPan />
        <CardLeche />
        <CardYerba />
      </div>
    </div>

  );
}

export default App;