import './App.css';
import Header from './Header.js';
import Content from './Content.js';

function App() {
  return (
    <div className="App">
        <Header />
        <Content id="Accueil"/>
        <Content id="c2"/>
        <Content id="c3"/>
        <Content id="c4"/>
        <Content id="c5"/>
    </div>
  );
}

export default App;
