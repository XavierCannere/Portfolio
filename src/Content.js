import './App.css';
import Comp1 from './Comp1.js';
import Comp2 from './Comp2.js';
import Comp3 from './Comp3.js';
import Comp4 from './Comp4.js';
import Comp5 from './Comp5.js';

function Content({id}) {

    let componentToRender;

    if (id === 'Accueil') {
      componentToRender = <Comp1 />;
    } else if (id === 'c2') {
      componentToRender = <Comp2 />;
    } else if (id === 'c3') {
      componentToRender = <Comp3 />;
    } else if (id === 'c4') {
      componentToRender = <Comp4 />;
    } else if (id === 'c5') {
      componentToRender = <Comp5 />;
    } else {
      componentToRender = <div>Composant inconnu</div>;
    }

    return (
      <div id={id} className="Content">
            {/* <h1>{id}</h1> */}
            {componentToRender}
      </div>
    );
  }
  
  export default Content;